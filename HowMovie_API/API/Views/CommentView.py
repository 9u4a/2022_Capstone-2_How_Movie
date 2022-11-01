from django.db.models import Q, Avg
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from API.serializers import CommentSerializer
from API.models import Comment


class CommentView(APIView):
    def post(self, request, movie_id):
        data = JSONParser().parse(request)
        data['movie_id'] = movie_id
        comment_serializer = CommentSerializer(data=data)

        if comment_serializer.is_valid():
            comment_serializer.save()
            response = {
                'success': True,
                'user_name': data['user_name']
            }
            return JsonResponse(response)
        else:
            response = {
                'success': False
            }
            return JsonResponse(response)

    def get(self, request, movie_id):
        comment_data = list(Comment.objects.filter(movie_id=movie_id).values())
        vote_average = Comment.objects.filter(movie_id=movie_id).aggregate(Avg('vote'))
        response = {
            'success': True,
            'vote_average': vote_average['vote__avg'],
            'result': comment_data
        }
        return JsonResponse(response)

    def put(self, request, movie_id):
        data = JSONParser().parse(request)
        data['movie_id'] = movie_id
        comment_data = Comment.objects.filter(
            Q(id=data['id']) &
            Q(email=data['email'])
        ).first()

        # comment_data = Comment.objects.get(id=data['id'])
        comment_serializer = CommentSerializer(comment_data, data=data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            response = {
                'result': True,
                'user_name': data['user_name']
            }
            return JsonResponse(response)

    def delete(self, request, movie_id):
        data = JSONParser().parse(request)
        comment_data = Comment.objects.filter(
            Q(id=data['id']) &
            Q(email=data['email']) &
            Q(movie_id=movie_id)
        ).first()
        comment_data.delete()
        response = {
            'success': True
        }
        return JsonResponse(response)
