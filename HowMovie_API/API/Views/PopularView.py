from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from API.GetData.Popular import Popular


class PopularView(APIView):
    def get(self, request):
        try:
            response = {
                'success': True,
                'result': Popular(request)
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
