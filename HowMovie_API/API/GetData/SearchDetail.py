import requests
from django.conf import settings
from API.GetData.MovieVideo import MovieVideo


def SearchDetail(request):

    url = 'https://api.themoviedb.org/3/movie/'
    api_key = '?api_key=' + getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    movie_id = request.GET.get('movie_id')
    res = requests.get(url + movie_id + api_key + language)
    data = res.json()

    result = [{
        'genres': data['genres'],
        'title': data['title'],
        'overview': data['overview'],
        'poster_path': data['poster_path'],
        'backdrop_path': data['backdrop_path'],
        'release_date': data['release_date'],
        'vote_average': data['vote_average'],
        'vote_count': data['vote_count'],
        'status': data['status'],
        'runtime': data['runtime'],
        'tagline': data['tagline'],
        'video': MovieVideo(request, movie_id)
    }]
    response = {
        'detail': result
    }
    return response
