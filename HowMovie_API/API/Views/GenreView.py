from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.SearchGenre import SearchGenre


class GenreView(APIView):
    def get(self, request):
        result = [
            SearchGenre(request)
        ]
        response = {
            'result': result
        }
        return JsonResponse(response)
