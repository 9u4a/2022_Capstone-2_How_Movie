from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.UpComing import UpComing


class UpComingView(APIView):
    def get(self, request):

        response = {
            'result': UpComing(request)
        }
        return JsonResponse(response)