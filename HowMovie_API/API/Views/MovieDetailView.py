from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from API.GetData.Credit import Credit
from API.GetData.MovieDetail import MovieDetail


class MovieDetailView(APIView):
    def get(self, request):
        try:
            result = [
                MovieDetail(request),
                Credit(request),
            ]
            response = {
                'success': True,
                'result': result
            }
            return JsonResponse(response, status=status.HTTP_200_OK)
        except KeyError:
            response = {
                'success': False,
                'err': 'Movie Does Not Exist'
            }
            return JsonResponse(response, status=status.HTTP_404_NOT_FOUND)
        except NameError:
            response = {
                'success': False,
                'err': 'ApiKey error'
            }
            return JsonResponse(response, status=status.HTTP_400_BAD_REQUEST)
