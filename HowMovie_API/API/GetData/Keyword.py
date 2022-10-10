import requests
from django.conf import settings
from urllib import parse


def Keyword(request):

    url = 'https://api.themoviedb.org/3/search/keyword?api_key='
    api_key = getattr(settings, 'API_KEY', None)[0]

    if not request.GET.get('page'):
        page = '&page=1'
    else:
        page = '&page=' + request.GET.get('page')

    query = '&query=' + parse.quote(request.GET.get('query'))
    res = requests.get(url + api_key + page)
    data = res.json()

    response = {
        'keyword': data['results']
    }
    return response
