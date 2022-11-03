"""HowMovie_API URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path


from API.Views.CommentView import CommentView
from API.Views.GenreView import GenreView
from API.Views.MovieDetailView import MovieDetailView
from API.Views.MainView import MainView
from API.Views.MyCommentView import MyCommentView
from API.Views.NowPlayingView import NowPlayingView
from API.Views.SearchDetailView import SearchDetailView
from API.Views.SearchView import SearchView
from API.Views.TopRatedView import TopRatedView
from API.Views.TrendingView import TrendingView
from API.Views.PopularView import PopularView
from API.Views.UpComingView import UpComingView

urlpatterns = [
    path('admin', admin.site.urls),
    path('trend', TrendingView.as_view()),
    path('popular', PopularView.as_view()),
    path('upcoming', UpComingView.as_view()),
    path('nowplaying', NowPlayingView.as_view()),
    path('toprated', TopRatedView.as_view()),
    path('main', MainView.as_view()),
    path('moviedetails', MovieDetailView.as_view()),
    path('search', SearchView.as_view()),
    path('searchdetails', SearchDetailView.as_view()),
    path('genre', GenreView.as_view()),
    path('comments', CommentView.as_view()),

]
