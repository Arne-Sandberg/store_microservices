from celeryconf import app
from src.models import Stock


@app.task()
def decrease_stock_quantity(product_id):
    s = Stock.objects.get(product__id=product_id)
    s.quantity -= 1
    s.save()
    return s.quantity