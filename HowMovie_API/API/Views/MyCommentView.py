from django.core.exceptions import FieldDoesNotExist
from django.db.models import Q
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from API.serializers import CommentSerializer
from API.models import Comment


class MyCommentView(APIView):
    def get(self, request):
        email = request.GET.get('email')
        comment_data = list(Comment.objects.filter(email=email).values())
        print(comment_data)
        response = {
            'success': True,
            'result': comment_data
        }
        return JsonResponse(response)

    def put(self, request):
        data = JSONParser().parse(request)
        email = request.GET.get('email')
        comment_data = Comment.objects.filter(
            Q(id=data['id']) &
            Q(email=email)
        ).first()
        comment_serializer = CommentSerializer(comment_data, data=data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            response = {
                'success': True,
                'user_name': data['user_name']
            }
            return JsonResponse(response)

    def delete(self, request):
        data = JSONParser().parse(request)
        email = request.GET.get('email')
        try:
            comment_data = Comment.objects.filter(
                Q(id=data['id']) &
                Q(email=email)
            ).first()
            comment_data.delete()
            response = {
                'success': True
            }
            return JsonResponse(response)
        except FieldDoesNotExist:
            response = {
                'success': False,
                'error': 'FieldDoesNotExist'
            }
            return JsonResponse(response, status=status.HTTP_404_NOT_FOUND)
