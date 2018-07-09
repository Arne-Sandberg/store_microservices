from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address_street = models.CharField(max_length=100, blank=True)
    address_number = models.IntegerField(blank=True, null=True)
    address_city = models.CharField(max_length=100, blank=True)
    address_postcode = models.CharField(max_length=10, blank=True)
    address_nation = models.CharField(max_length=50, blank=True)
    date_of_birth = models.DateField(verbose_name='Date of birth', blank=True, null=True)

    def __str__(self):
        return self.user.username
