from celeryconf import app

from inventory.models import Order


@app.task()
def create_new_order(data):
    items_quantity = data.get('items_quantity')
    user = data.get('user')
    Order.objects.create(items_quantity=items_quantity, user=user)
    return 'Yes'
