import requests
from django.conf import settings



def GetKeyword(request):

    url = 'https://api.themoviedb.org/3/movie/'
    api_key = 'keyword?api_key=' + getattr(settings, 'API_KEY', None)[0]

    if not request.GET.get('page'):
        page = '&page=1'
    else:
        page = '&page=' + request.GET.get('page')

    movie_id = request.GET.get('movie_id')
    res = requests.get(url + movie_id + api_key + page)
    if res.status_code == 401:
        raise Exception(401)
    elif res.status_code == 404:
        raise Exception(404)
    data = res.json()

    response = {
        'keyword': data['results']
    }
    return response
