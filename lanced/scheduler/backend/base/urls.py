from django.urls import path
from .views import *

urlpatterns = [
    path('', meeting, name='meeting_form'),
    path('scheduled_meets',return_scheduled_meets,name='scheduled_meets')
]