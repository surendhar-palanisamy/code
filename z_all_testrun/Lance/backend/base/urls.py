from django.urls import path

from .views import *
urlpatterns = [

    path('post/data', PostListView.as_view()),
    path('post/data/<pk>', PostRetriveView.as_view())
]
