from django.core.exceptions import FieldDoesNotExist
from django.db.models import Q, Avg
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from API.serializers import CommentSerializer
from API.models import Comment


class CommentView(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        comment_serializer = CommentSerializer(data=data)

        if comment_serializer.is_valid():
            comment_serializer.save()
            response = {
                'success': True,
                'user_name': data['user_name']
            }
            return JsonResponse(response, status=status.HTTP_201_CREATED)
        else:
            response = {
                'success': False,
                'err': comment_serializer.errors
            }
            return JsonResponse(response, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        movie_id = request.GET.get('movie_id')
        email = request.GET.get('email')
        if movie_id:
            try:
                comment_data = list(Comment.objects.filter(movie_id=movie_id).values())
                vote_average = Comment.objects.filter(movie_id=movie_id).aggregate(Avg('vote'))
                response = {
                    'success': True,
                    'vote_average': vote_average['vote__avg'],
                    'result': comment_data
                }
                return JsonResponse(response, status=status.HTTP_200_OK)
            except Comment.DoesNotExist:
                response = {
                    'success': False,
                    'err': 'Comment Does Not Exist'
                }
            return JsonResponse(response, status=status.HTTP_404_NOT_FOUND)
        elif email:
            try:
                comment_data = list(Comment.objects.filter(email=email).values())
                response = {
                    'success': True,
                    'result': comment_data
                }
                return JsonResponse(response, status=status.HTTP_200_OK)
            except Comment.DoesNotExist:
                response = {
                    'success': False,
                    'err': 'Comment Does Not Exist'
                }
            return JsonResponse(response, status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        data = JSONParser().parse(request)
        comment_data = Comment.objects.filter(
            Q(id=data['id']) &
            Q(email=data['email'])
        ).first()
        comment_serializer = CommentSerializer(comment_data, data=data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            response = {
                'success': True,
                'user_name': data['user_name']
            }
            return JsonResponse(response, status=status.HTTP_201_CREATED)
        else:
            response = {
                'success': False,
                'err': comment_serializer.errors
            }
            return JsonResponse(response, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        data = JSONParser().parse(request)
        try:
            comment_data = Comment.objects.filter(
                Q(id=data['id']) &
                Q(email=data['email']) &
                Q(movie_id=data['movie_id'])
            ).first()
            comment_data.delete()
            response = {
                'success': True
            }
            return JsonResponse(response, status=status.HTTP_200_OK)
        except FieldDoesNotExist:
            response = {
                'success': False,
                'error': 'Comment Does Not Exist'
            }
            return JsonResponse(response, status=status.HTTP_404_NOT_FOUND)
        except AttributeError:
            response = {
                'success': False,
                'error': 'Comment Does Not Exist'
            }
            return JsonResponse(response, status=status.HTTP_404_NOT_FOUND)