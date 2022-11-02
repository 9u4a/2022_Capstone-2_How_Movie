import requests
from django.conf import settings


def Credit(request):

    url = 'https://api.themoviedb.org/3/movie/'
    api_key = '/credits?api_key=' + getattr(settings, 'API_KEY', None)[0]
    language = '&language=ko-KR'

    movie_id = request.GET.get('movie_id')
    res = requests.get(url + movie_id + api_key + language)
    if res.status_code == 401:
        raise Exception(401)
    elif res.status_code == 404:
        raise Exception(404)
    data = res.json()

    acting = []
    writing = []
    directing = []
    for i in data['cast']:
        if i['known_for_department'] == "Acting":
            acting.append(
                {
                    'id': i['id'],
                    'name': i['name'],
                    'gender': i['gender'],
                    'character': i['character'],
                    'profile_path': i['profile_path'],
                    'popularity': i['popularity'],
                }
            )
        elif i['known_for_department'] == "Writing":
            writing.append(
                {
                    'id': i['id'],
                    'name': i['name'],
                    'gender': i['gender'],
                    'character': i['character'],
                    'profile_path': i['profile_path'],
                    'popularity': i['popularity'],
                }
            )
        elif i['known_for_department'] == "Directing":
            directing.append(
                {
                    'id': i['id'],
                    'name': i['name'],
                    'gender': i['gender'],
                    'character': i['character'],
                    'profile_path': i['profile_path'],
                    'popularity': i['popularity'],
                }
            )
    result = {
        'acting': acting,
        'writing': writing,
        'directing': directing
    }
    response = {
        'credit': result
    }
    return response
