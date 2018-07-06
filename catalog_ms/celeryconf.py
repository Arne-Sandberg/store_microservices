import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'catalog_ms.settings')

app = Celery('src')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()
