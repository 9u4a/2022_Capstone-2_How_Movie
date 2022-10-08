FROM python:3.9-bullseye

ENV PYTHONUNBUFFERED=1

RUN apt update

WORKDIR /home/HowMovie_API
COPY requirements.txt /home/HowMovie_API

RUN pip install wheel
RUN pip install -r requirements.txt

EXPOSE 8000

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /