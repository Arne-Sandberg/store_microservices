FROM python

ADD . /app/src
WORKDIR /app/src

RUN mkdir -p /var/log/django && touch /var/log/django/debug.log
RUN pip install -r requirements.txt

EXPOSE 8000

#ENTRYPOINT python manage.py runserver 0.0.0.0:8000
