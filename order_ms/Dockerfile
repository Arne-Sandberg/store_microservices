FROM python

ADD . /app/src
WORKDIR /app/src

RUN chmod +x /app/src/run_celery.sh
RUN chmod +x /app/src/run_web.sh

RUN mkdir -p /var/log/django && touch /var/log/django/debug.log
RUN pip install -r requirements.txt

EXPOSE 8000

#ENTRYPOINT ./manage.py runserver 0.0.0.0:8000
