import requests
from django.conf import settings


def Trend(request):

    url = 'https://api.themoviedb.org/3/trending/movie/day?api_key='
    api_key = getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    res = requests.get(url + api_key + language)
    data = res.json()
    result = []

    for i in data['results']:
        result.append(
            {
                'id': i['id'],
                'title': i['title'],
                'poster_path': i['poster_path'],
                'backdrop_path': i['backdrop_path']
            }
        )
    res = {
        'trend': result
    }
    return res
