import json
from datetime import datetime
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
import pandas as pd

from abtestingstrategiesbackend.run import run_experiment

from landing.forms import RunTestForm


def landing(request):
    if request.method == 'POST':
        form = RunTestForm(request)
    else:
        form = RunTestForm()
    return render(request, "landing/landing.html", {'form': form})


def get_chart_data(request):
    n_emails = 10
    if request.method == 'POST':
        form = RunTestForm(request.POST)
        if form.is_valid():
            n_emails = form.cleaned_data['n_emails']
    table = run_experiment(n_emails)
    csv = table.loc[:, ["cumulative_sent_emails_count", "cumulative_reward"]].to_csv(
        index=False
    )
    return HttpResponse(content=csv, content_type="text/plain")
