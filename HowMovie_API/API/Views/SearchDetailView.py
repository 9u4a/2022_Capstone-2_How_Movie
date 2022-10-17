from django.http import JsonResponse
from rest_framework.views import APIView
from API.GetData.Credit import Credit
from API.GetData.SearchDetail import SearchDetail


class SearchDetailView(APIView):
    def get(self, request):

        result = [
            SearchDetail(request),
            Credit(request),
        ]
        response = {
            'result': result
        }
        return JsonResponse(response)
