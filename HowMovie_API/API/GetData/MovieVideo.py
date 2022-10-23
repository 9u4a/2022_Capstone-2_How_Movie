import requests
from django.conf import settings
from django.http import JsonResponse
from rest_framework import status


def MovieVideo(request, movie_id, video):

    url = 'https://api.themoviedb.org/3/movie/' + movie_id
    api_key = '/videos?api_key=' + getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    res = requests.get(url + api_key + language)
    api_status = res.status_code
    print(api_status)
    data = res.json()
    result = []
    try:
        if video == 'search':
            for i in data['results']:
                result.append(
                    {
                        'video': i['key']
                    }
                )
        elif video == 'movie':
            result = data['results'][0]['key']
    except IndexError:
        result = []

    response = result
    return response



