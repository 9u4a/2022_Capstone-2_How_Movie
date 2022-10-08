import requests
from django.conf import settings


def Genre(request):

    url = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
    api_key = getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    res = requests.get(url + api_key + language)
    data = res.json()

    response = {
        'genre': data['genres']
    }
    return response
