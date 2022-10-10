from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.NowPlaying import NowPlaying


class NowPlayingView(APIView):
    def get(self, request):

        response = {
            'result': NowPlaying(request)
        }
        return JsonResponse(response)
