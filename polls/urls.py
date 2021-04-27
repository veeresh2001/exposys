# -*- coding: utf-8 -*-
"""
Created on Sat Apr  3 15:43:05 2021

@author: Chait
"""
from django.urls import path
from . import views
urlpatterns=[path("",views.deli,name='polls'),
path("id",views.delis,name='id'),
path('update_d/<str:pk>/',views.update_d,name='update_d'),
path('delete_d/<str:pk>/',views.delete_d,name='delete_d'),
path('api',views.apiOverview,name="api"),
path('apix',views.deliverylist,name="apix"),
path('apic',views.stockcreate,name='apic'),
path('apid/<str:pk>/',views.updel,name='apid'),
path('apiv/<str:pk>/',views.ddel,name='apiv')

]
