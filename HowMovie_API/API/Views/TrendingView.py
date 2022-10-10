from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.Trend import Trend


class TrendingView(APIView):
    def get(self, request):
        
        response = {
            'result': Trend(request)
        }
        return JsonResponse(response)

