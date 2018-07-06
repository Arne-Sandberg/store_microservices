from __future__ import unicode_literals

from django.db import models


class Order(models.Model):
    # we store an order as a key-value list where the key is the id of the product,
    # and the value is the quantity ordered
    # [{1: 2}, {3:1}, ...}
    items_quantity = models.CharField(max_length=511, blank=False)
    user = models.IntegerField()
