from django.conf.urls import url

from inventory.views import (
    CreateNewOrderView
)

urlpatterns = [
    url(r'^new_order/$', CreateNewOrderView.as_view()),
]
