from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.Search import Search


class SearchView(APIView):
    def get(self, request):

        response = {
            'result': Search(request)
        }
        return JsonResponse(response)
