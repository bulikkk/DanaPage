from django.contrib import admin
from .models import Banner, Project

# Register your models here.


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    fields = ('title', 'description', 'type', 'image', 'new')


@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    fields = ('title', 'time', 'no', 'image', 'active')
