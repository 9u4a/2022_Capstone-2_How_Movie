from django.db import models


class Comment(models.Model):
    user_id = models.CharField(max_length=50)
    movie_id = models.CharField(max_length=50)
    comment = models.CharField(max_length=1000)
    vote = models.FloatField(max_length=5)

    class Meta:
        db_table = 'API_Comment'
