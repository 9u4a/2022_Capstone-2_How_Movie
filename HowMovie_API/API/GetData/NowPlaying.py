import requests
from django.conf import settings


def NowPlaying(request):

    url = 'https://api.themoviedb.org/3/movie/now_playing?api_key='
    api_key = getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    if not request.GET.get('page'):
        page = '&page=1'
    else:
        page = '&page=' + str(request.GET.get('page'))

    res = requests.get(url + api_key + language + page)
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
    response = {
        'nowplaying': result
    }
    return response
