import requests
from django.conf import settings


def MovieVideo(request, movie_id, boolean):

    url = 'https://api.themoviedb.org/3/movie/' + movie_id
    api_key = '/videos?api_key=' + getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    res = requests.get(url + api_key + language)
    data = res.json()
    result = []
    if boolean:
        for i in data['results']:
            result.append(
                {
                    'video': i['key']
                }
            )
    elif not boolean:
        result = data['results'][0]['key']

    response = result
    return response
