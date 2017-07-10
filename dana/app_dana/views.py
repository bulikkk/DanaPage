from django.shortcuts import render
from django.core import serializers
from django.views import View
from .models import Project

# Create your views here.


class MainView(View):

    def get(self, request):
        projects = Project.objects.all()[::-1]
        qs_json = serializers.serialize('json', projects)
        ctx = {'projects': qs_json}
        return render(request, 'app_dana/main.html', ctx)
