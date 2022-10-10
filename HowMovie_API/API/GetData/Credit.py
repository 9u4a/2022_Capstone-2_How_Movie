import requests
from django.conf import settings


def Credit(request):

    url = 'https://api.themoviedb.org/3/movie/'
    api_key = '/credits?api_key=' + getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    movie_id = request.GET.get('movie_id')
    res = requests.get(url + movie_id + api_key + language)
    data = res.json()

    result = []

    for i in data['cast']:
        if i['known_for_department'] == "Acting":
            result.append(
                {
                    'id': i['id'],
                    'name': i['name'],
                    'gender': i['gender'],
                    'character': i['character'],
                    'profile_path': i['profile_path'],
                    'popularity': i['popularity'],
                }
            )
    response = {
        'credit': result
    }
    return response
