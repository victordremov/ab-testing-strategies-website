from datetime import datetime
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
import pandas as pd


def landing(request):
    return render(request, "landing/landing.html")


def get_chart_data(request):
    table = pd.DataFrame(
        {
            "a": [datetime(2019, 1, 1), datetime(2019, 1, 2), datetime(2019, 1, 3)],
            "b": [1, 2, 3],
        }
    )
    csv = table.to_csv(index=False)
    return HttpResponse(content=csv, content_type="text/plain")
