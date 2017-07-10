from django.db import models

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    image = models.ImageField(upload_to="static")

    def __str__(self):
        return '{}, {}'.format(self.title, self.description)
