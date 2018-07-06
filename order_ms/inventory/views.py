import json

from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


class CreateNewOrderView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(CreateNewOrderView, self).dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        from .tasks import create_new_order

        create_new_order.delay(data=request.POST)
        return HttpResponse('All good')
