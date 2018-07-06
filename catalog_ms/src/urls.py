from django.conf.urls import url

from src.views import (
    ProductDetailView, ProductListView, ExecuteTaskView
)

urlpatterns = [
    url(r'^product/(?P<pk>[0-9]+)/$', ProductDetailView.as_view()),
    url(r'^$', ProductListView.as_view()),
    url(r'^task/(?P<pk>[0-9]+)/$', ExecuteTaskView.as_view()),
]
