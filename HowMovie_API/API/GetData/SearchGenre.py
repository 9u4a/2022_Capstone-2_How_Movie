import requests
from django.conf import settings


def SearchGenre(request):

    url = 'https://api.themoviedb.org/3/discover/movie?api_key='
    api_key = getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false'
    genre = '&with_genres=' + request.GET.get('genre')
    monetiizatiion = '&with_watch_monetization_types=flatrate'
    if not request.GET.get('page'):
        page = '&page=1'
    else:
        page = '&page=' + request.GET.get('page')

    res = requests.get(url + api_key + language + page + genre + monetiizatiion)
    data = res.json()
    result = []

    for i in data['results']:
        result.append(
            {
                'id': i['id'],
                'title': i['title'],
                'poster_path': i['poster_path'],
                'backdrop_path': i['backdrop_path'],
                'release_date': i['release_date'],
                'adult': i['adult'],
                'original_title': i['original_title'],
                'genre_ids': i['genre_ids'],
                'overview': i['overview'],
                'vote_average': i['vote_average']
            }
        )
    response = {
        'genres': result
    }
    return response
