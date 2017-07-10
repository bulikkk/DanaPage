from django.shortcuts import render
from django.views import View
from .models import Project

# Create your views here.


class MainView(View):

    def get(self, request):
        projects = Project.objects.all()
        ctx = {'projects': projects}
        return render(request, 'app_dana/main.html', ctx)
