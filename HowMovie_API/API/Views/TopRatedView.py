from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.TopRated import TopRated


class TopRatedView(APIView):
    def get(self, request):

        response = {
            'result': TopRated(request)
        }
        return JsonResponse(response)
