from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=20, decimal_places=2)
    description = models.CharField(max_length=256)

    def __str__(self):
        return self.name


class Stock(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE, primary_key=True)
    quantity = models.IntegerField(default=0)
    location = models.CharField(max_length=64)
