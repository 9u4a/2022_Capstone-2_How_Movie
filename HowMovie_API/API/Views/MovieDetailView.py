from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.Credit import Credit
from API.GetData.MovieDetail import MovieDetail


class MovieDetailView(APIView):
    def get(self, request):

        result = [
            MovieDetail(request),
            Credit(request),
        ]
        response = {
            'result': result
        }
        return JsonResponse(response)
