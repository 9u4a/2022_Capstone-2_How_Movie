FROM python:3.9-bullseye

ENV PYTHONUNBUFFERED 1

RUN apt update

WORKDIR /home/HowMovie_API
COPY . .

RUN pip install wheel
RUN pip install -r requirements.txt

CMD ["python3","manage.py","runserver","0.0.0.0:8000"]

EXPOSE 8000
