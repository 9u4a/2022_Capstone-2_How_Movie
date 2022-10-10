from django.http import JsonResponse
from rest_framework.views import APIView

from API.GetData.NowPlaying import NowPlaying
from API.GetData.Popular import Popular
from API.GetData.TopRated import TopRated
from API.GetData.UpComing import UpComing


class MainView(APIView):
    def get(self, request):
        result = [
            Popular(request),
            TopRated(request),
            NowPlaying(request),
            UpComing(request)
        ]
        response = {
            'result': result
        }
        return JsonResponse(response)
