from django.http import JsonResponse
from rest_framework.views import APIView

import requests


class TrendingView(APIView):
    def get(self, request):
        url = 'https://api.themoviedb.org/3/trending/movie/day?api_key='
        api_key = 'b0d0bb16ec18a5b3afebde71b896e261'
        res = requests.get(url+api_key)
        data = res.json()
        result = []
        for i in data['results']:
            print(i['id'])
            print(i['poster_path'])
            print(i['backdrop_path'])
            result.append(
                {
                    'id': i['id'],
                    'poster_path': i['poster_path'],
                    'backdrop_path': i['backdrop_path']
                }
            )
        res = {
            'result': result
        }
        return JsonResponse(res)
