import requests
from django.conf import settings

from API.GetData.Genre import Genre


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
                'backdrop_path': i['backdrop_path'],
                'release_date': i['release_date']
            }
        )
    response = {
        'trend': result
    }
    return response
