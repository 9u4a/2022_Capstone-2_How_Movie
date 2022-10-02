from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.Popular import Popular


class PopularView(APIView):
    def get(self, request):

        response = {
            'result': Popular(request)
        }
        return JsonResponse(response)
