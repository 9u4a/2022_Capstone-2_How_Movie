from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from API.GetData.NowPlaying import NowPlaying
from API.GetData.Popular import Popular
from API.GetData.TopRated import TopRated
from API.GetData.UpComing import UpComing


class MainView(APIView):
    def get(self, request):
        try:
            result = [
                Popular(request),
                TopRated(request),
                NowPlaying(request),
                UpComing(request)
            ]
            response = {
                'success': True,
                'result': result
            }
            return JsonResponse(response, status=status.HTTP_200_OK)

        except Exception as e:
            if int(str(e)) == 401:
                response = {
                    'success': False,
                    'err': 'API_KEY ERROR'
                }
                return JsonResponse(response, status=status.HTTP_401_UNAUTHORIZED)

            elif int(str(e)) == 404:
                response = {
                    'success': False,
                    'err': 'NOT_FOUND'
                }
                return JsonResponse(response, status=status.HTTP_404_NOT_FOUND)

            response = {
                'success': False,
                'err': 'BAD_REQUEST'
            }
            return JsonResponse(response, status=status.HTTP_400_BAD_REQUEST)


