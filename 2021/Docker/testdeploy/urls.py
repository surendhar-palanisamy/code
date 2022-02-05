"""testdeploy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_swagger.views import get_swagger_view
# from django.conf.urls import url
from django.conf import settings
from django.views.static import serve
schema_view = get_swagger_view(title='Poss Assignment Api creation')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('crud.urls')),
    path('api-auth/', include('rest_framework.urls')),
    re_path(r'^$', schema_view),
    re_path(r'^media/(?P<path>.*)$', serve,
            {'document_root':       settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve,
            {'document_root': settings.STATIC_ROOT})
]