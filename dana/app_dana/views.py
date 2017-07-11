from django.shortcuts import render
from django.core import serializers
from django.views import View
from .models import Banner, Project

# Create your views here.


class MainView(View):

    def get(self, request):
        projects = Project.objects.all()[::-1]
        banners = Banner.objects.filter(active=True).order_by("No")
        proj_json = serializers.serialize('json', projects)
        bann_json = serializers.serialize('json', banners)
        ctx = {'projects': proj_json,
               'banners': bann_json}
        return render(request, 'app_dana/main.html', ctx)
