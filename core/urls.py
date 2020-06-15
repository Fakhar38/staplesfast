from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('index/', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('signup/', views.signup_view, name='signup'),
]