from django.db import models
from datetime import date

# Create your models here.


TYPE_CHOICES = {
    1: 'graphic design',
    2: 'illustration'
}


class Project(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    type = models.IntegerField(choices=TYPE_CHOICES.items())
    image = models.ImageField(upload_to="images")
    add_date = models.DateField(default=date.today)

    def __str__(self):
        return '{}, {}'.format(self.title, self.description)
