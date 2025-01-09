from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import json
from bs4 import BeautifulSoup as Soup
import re
from lxml import html
from datetime import datetime

def index(request):
    station_codes = load_station_codes()
    context = {
        'station_codes': station_codes
    }
    return render(request, 'index.html', context)

def our_blog(request):
    return render(request, 'our_blog.html')

@csrf_exempt
def pnr(request):
    if request.method == 'POST':
        pnr_number = request.POST.get('pnr_number')
        url = f"https://www.confirmtkt.com/pnr-status/{pnr_number}"
        
        try:
            response = requests.get(url)
            response.raise_for_status()
            
            soup = Soup(response.content, 'html.parser')
            script = soup.find('script', string=re.compile(r'data = {'))
            if script:
                json_data = re.search(r'data = ({.*?});', script.string, re.DOTALL)
                if json_data:
                    data_dict = json.loads(json_data.group(1))
                    return JsonResponse(data_dict)
            
            return JsonResponse({'error': 'Unable to parse PNR data'}, status=400)
        
        except requests.RequestException as e:
            return JsonResponse({'error': f"Failed to retrieve data: {str(e)}"}, status=400)
    
    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def live_running(request):
    try:
        if request.method == 'GET':
            train_number = request.GET.get('train_number')
            date = request.GET.get('date')
        elif request.method == 'POST':
            train_number = request.POST.get('train_number')
            date = request.POST.get('date')
        else:
            return JsonResponse({'error': 'Invalid request method'}, status=400)
        
        if not train_number or not date:
            return JsonResponse({'error': 'Missing train number or date'}, status=400)
        
        url = f'https://www.confirmtkt.com/train-running-status/{train_number}?Date={date}'
        
        response = requests.get(url)
        response.raise_for_status()

        tree = html.fromstring(response.content)
        
        xpath_expression = "//div[contains(concat(' ',normalize-space(@class),' '),' running-status ')]//div[contains(concat(' ',normalize-space(@class),' '),' well ')]"
        running_status_elements = tree.xpath(xpath_expression)
        
        status_data = []
        current_station = None

        for element in running_status_elements:
            station = element.xpath(".//span[@class='rs__station-name ellipsis']/text()")
            day = element.xpath('.//div[contains(concat(" ",normalize-space(@class)," ")," col-xs-3 ")][2]/span[1]/text()')
            date = element.xpath(".//span[2]/text()")
            time_elements = element.xpath('.//div[contains(concat(" ",normalize-space(@class)," ")," col-xs-2 ")]/span/text()')
            lates = element.xpath('.//div[contains(concat(" ",normalize-space(@class)," ")," rs__station-delay ")]/text()')
            live_train_div = element.xpath('.//div[contains(concat(" ",normalize-space(@class)," ")," circle blink ")]')
            
            live_train = ''
            if live_train_div:
                live_train_span = live_train_div[0].xpath('./following-sibling::span[1]/text()')
                live_train = live_train_span[0].strip() if live_train_span else ''

            arrives = []
            departs = []
            if time_elements:
                arrives = [time_elements[i].strip() for i in range(0, len(time_elements), 2)]
                departs = [time_elements[i].strip() for i in range(1, len(time_elements), 2)]
            
            for i in range(len(station)):
                station_name = station[i].strip()
                status_data.append({
                    'station': station_name,
                    'day': day[i].strip() if i < len(day) else '',
                    'date': date[i].strip() if i < len(date) else '',
                    'arrives': arrives[i] if i < len(arrives) else '',
                    'departs': departs[i] if i < len(departs) else '',
                    'lates': lates[i].strip() if i < len(lates) else '',
                    'live_train': live_train
                })
                
                if live_train.strip() != '':
                    current_station = station_name

        return JsonResponse({'status_data': status_data, 'current_station': current_station})

    except requests.RequestException as e:
        return JsonResponse({'error': f"Failed to fetch the webpage: {str(e)}"}, status=500)
    except Exception as e:
        return JsonResponse({'error': f"An unexpected error occurred: {str(e)}"}, status=500)

@csrf_exempt
def search_train(request):
    if request.method != 'POST':
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

    train_number = request.POST.get('train_number')
    if not train_number:
        return JsonResponse({'status': 'error', 'message': 'Train number is required'}, status=400)

    url = f'https://www.trainman.in/services/train/{train_number}?key=077e230d-4351-4a84-b87a-7ef4e854ca59&int=1'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Referer': 'https://www.trainman.in/'
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()

        # Validate and extract the required data
        if not data.get('routes') or len(data['routes']) == 0:
            return JsonResponse({'status': 'error', 'message': 'No route information found for this train'}, status=404)

        route = data['routes'][0]
        train_info = {
            'train_number': route.get('train_code'),
            'train_name': route.get('train_name'),
            'type': route.get('type'),
            'classes': route.get('class'),
            'distance': route.get('distance'),
            'duration': route.get('duration'),
            'pantry_car': route.get('pantry_car'),
            'rake_type': route.get('rake_type'),
            'origin': {
                'station': route['origin']['sname'],
                'code': route['origin']['scode'],
                'city': route['origin']['city']
            },
            'destination': {
                'station': route['dest']['sname'],
                'code': route['dest']['scode'],
                'city': route['dest']['city']
            },
            'schedule': [
                {
                    'station_name': station['sname'],
                    'station_code': station['scode'],
                    'day': station['day'],
                    'distance': station['distance'],
                    'arrival': station['arrive'],
                    'departure': station['depart'],
                    'platform': station['platform'],
                    'halt': station['halt'],
                    'coordinates': {
                        'lat': station['lat'],
                        'lng': station['lng']
                    }
                }
                for station in route.get('schedule', [])
            ],
            'popular_stations': route.get('meta_info', {}).get('popular_stations', []),
            'train_description': route.get('meta_info', {}).get('train_description')
        }
        print(train_info)
        return JsonResponse({'status': 'success', 'message': 'Train information retrieved successfully', 'data': train_info})

    except requests.RequestException as e:
        return JsonResponse({'status': 'error', 'message': f'Failed to fetch train information: {str(e)}'}, status=500)
    except json.JSONDecodeError as e:
        return JsonResponse({'status': 'error', 'message': f'Failed to parse train information: {str(e)}'}, status=500)
    except KeyError as e:
        return JsonResponse({'status': 'error', 'message': f'Missing expected data in response: {str(e)}'}, status=500)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': f'An unexpected error occurred: {str(e)}'}, status=500)

def load_station_codes():
    """Load station codes from a JSON file."""
    file_path = "./myrail_app/stations.json"
    with open(file_path, 'r') as file:
        return json.load(file)

def get_station_code(station_name, station_codes):
    """Retrieve station code from the loaded JSON data."""
    # Check if the input contains both station name and code
    if ' (' in station_name and ')' in station_name:
        # Extract the station code from the input
        start = station_name.index('(') + 1
        end = station_name.index(')')
        station_code = station_name[start:end]
        return station_code
    else:
        # Search for the station name in the station_codes dictionary
        for code, name in station_codes.items():
            if name == station_name:
                return code
    return ''

@csrf_exempt
def train_b_station(request):
    if request.method == 'POST':
        from_station_name = request.POST.get('from_station')
        to_station_name = request.POST.get('to_station')
        journey_date = request.POST.get('journey_date')
        quota = request.POST.get('quota')
        
        if quota == "general":
            quota = "GN"
        elif quota == "ladies":
            quota = "LD"
        elif quota == "tatkal":
            quota = "TQ"
        elif quota == "senior citizen":
            quota == "SS"
        
        print("qqqqqq",quota)
        print("amol",from_station_name, to_station_name)
        
        station_codes = load_station_codes()
        from_station_code = get_station_code(from_station_name, station_codes)
        to_station_code = get_station_code(to_station_name, station_codes)

        # station_codes = load_station_codes()
        # from_station_code = get_station_code(from_station_code, station_codes)
        # to_station_code = get_station_code(to_station_code, station_codes)
        

        base_url = "https://api.railyatri.in/api/trains-between-station-from-wrapper.json"
        params = {
            "from": from_station_code,
            "to": to_station_code,
            "dateOfJourney": journey_date,
            "action": "train_between_station",
            "controller": "train_ticket_tbs",
            "device_type_id": 4,
            "from_code": from_station_code,
            "from_name": f"{from_station_code} JN",
            "journey_date": journey_date,
            "journey_quota": quota,
            "to_code": to_station_code,
            "to_name": f"{to_station_code} CENTRAL",
            "authentication_token": "",
            "v_code": "null",
            "user_id": -1719221788
        }
        
        try:
            response = requests.get(base_url, params=params)
            response.raise_for_status()
            data = response.json()
            
            if data.get('success', False):
                train_between_stations = data.get('train_between_stations', [])
                
                confirmtkt_url = "https://cttrainsapi.confirmtkt.com/api/v1/trains/search"
                confirmtkt_params = {
                    "sourceStationCode": from_station_code,
                    "destinationStationCode": to_station_code,
                    "addAvailabilityCache": "true",
                    "excludeMultiTicketAlternates": "false",
                    "excludeBoostAlternates": "false",
                    "sortBy": "DEFAULT",
                    "dateOfJourney": datetime.strptime(journey_date, "%Y-%m-%d").strftime("%d-%m-%Y")
                }
                
                confirmtkt_response = requests.get(confirmtkt_url, params=confirmtkt_params)
                confirmtkt_response.raise_for_status()
                confirmtkt_data = confirmtkt_response.json()
                
                for train in train_between_stations:
                    train_number = train.get('train_number')
                    availability = next((t for t in confirmtkt_data.get('data', {}).get('trainList', []) if t.get('trainNumber') == train_number), None)
                    if availability:
                        train['seat_availability'] = availability.get('availabilityCache', {})
                    else:
                        train['seat_availability'] = {}
                
                return JsonResponse({'train_between_stations': train_between_stations})
            else:
                return JsonResponse({'error': "No trains found! Please check entered information is correct."}, status=400)
        except requests.exceptions.RequestException as e:
            return JsonResponse({'error': f"An error occurred: {e}"}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def fare_inquiry(request):
    if request.method == 'POST':
        from_station_name = request.POST.get('from_station')
        to_station_name = request.POST.get('to_station')
        tcode = request.POST.get('train_code')
        concession_code = 'NONE'
        age_group = request.POST.get('age_group')
        percentage_booked = '50'
        key = "012562ae-60a9-4fcd-84d6-f1354ee1ea48"
        print(from_station_name, to_station_name)
        station_codes = load_station_codes()
        from_station_code = "PUNE"
        to_station_code =  "MDU"
        print(from_station_code, to_station_code)
        url = (
            f"https://www.trainman.in/services/fare?origin={from_station_code}&dest={to_station_code}&tcode={tcode}"
            f"&concession_code={concession_code}&age_group={age_group}&percentage_booked={percentage_booked}"
            f"&key={key}"
        )

        try:
            response = requests.get(url)
            response.raise_for_status()
            fare_data = response.json()
            print(fare_data)
            return JsonResponse(fare_data)
        except requests.RequestException as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return JsonResponse({'error': 'Invalid request method'}, status=400)