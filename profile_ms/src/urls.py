from django.conf.urls import url

from src.views import (
    ProfileDetailView
)

urlpatterns = [
    url(r'^(?P<pk>[0-9]+)/$', ProfileDetailView.as_view(), name='profile_detail'),
]
