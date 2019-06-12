from datetime import datetime
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
import pandas as pd

from abtestingstrategiesbackend.run import run_experiment


def landing(request):
    return render(request, "landing/landing.html")


def get_chart_data(request):
    table = run_experiment()
    csv = table.loc[:, ["cumulative_sent_emails_count", "cumulative_reward"]].to_csv(
        index=False
    )
    return HttpResponse(content=csv, content_type="text/plain")
