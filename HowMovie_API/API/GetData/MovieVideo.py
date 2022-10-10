import requests
from django.conf import settings


def MovieVideo(request, movie_id):

    url = 'https://api.themoviedb.org/3/movie/' + movie_id
    api_key = '/videos?api_key=' + getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    res = requests.get(url + api_key + language)
    data = res.json()
    result = []

    for i in data['results']:
        result.append(
            {
                'video': i['key']
            }
        )
    response = result
    return response
