from django.conf.urls import url

from src.views import (
    ProductDetailView, ProductListView
)

urlpatterns = [
    url(r'^product/(?P<pk>[0-9]+)/$', ProductDetailView.as_view()),
    url(r'^$', ProductListView.as_view()),
]
