import requests
from django.conf import settings
from urllib import parse


def Search(request):
    url = 'https://api.themoviedb.org/3/search/movie?api_key='
    api_key = getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    if not request.GET.get('page'):
        page = '&page=1'
    else:
        page = '&page=' + request.GET.get('page')

    query = '&query=' + parse.quote(request.GET.get('query'))
    res = requests.get(url + api_key + language + query + page)
    if res.status_code == 401:
        raise Exception(401)
    elif res.status_code == 404:
        raise Exception(404)
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
        'search': result
    }
    return response
