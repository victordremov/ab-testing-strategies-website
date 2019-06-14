from django import forms

class RunTestForm(forms.Form):
    n_emails = forms.IntegerField(label='Число писем', min_value=0, max_value=100000)