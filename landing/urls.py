from django.urls import path
from . import views

urlpatterns = [
    path("", views.landing, name="index"),
    path("chart-data.csv", views.get_chart_data, name="chart-data"),
]
