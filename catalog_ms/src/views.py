from django.http import HttpResponse
from django.http import JsonResponse
from django.views import View
from django.views.generic import DetailView
from django.views.generic import ListView

from src.models import Product


class ProductDetailView(DetailView):
    context_object_name = 'product'
    model = Product
    template_name = 'product_detail.html'


def _serialize_catalog_(queryset):
    data = {
        'catalog': []
    }
    for object in queryset:
        data['catalog'].append({'name': object.name,
                                'price': object.price,
                                'description': object.description,
                                'code': object.code,
                                'quantity': object.stock.quantity,
                                'location': object.stock.location
                                })
    return data


class ProductListView(ListView):
    context_object_name = 'products'
    model = Product
    template_name = 'product_list.html'

    def get(self, request, *args, **kwargs):
        data = _serialize_catalog_(self.get_queryset())
        return JsonResponse(data, status=200, safe=False)


class ExecuteTaskView(View):
    def get(self, request, *args, **kwargs):
        from .tasks import decrease_stock_quantity
        decrease_stock_quantity.delay(self.kwargs.get('pk'))
        return HttpResponse('All good')
