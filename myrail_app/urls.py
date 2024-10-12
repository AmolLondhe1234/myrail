from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pnr/', views.pnr, name='pnr'),
    path('live_running/', views.live_running, name='live_running'),
    path('search_train/', views.search_train, name='search_train'),
    path('train_b_station/', views.train_b_station, name='train_b_station'),
    path('fare_inquiry/', views.fare_inquiry, name='fare_inquiry'),
    path('our_blog/', views.our_blog, name='our_blog'),

]