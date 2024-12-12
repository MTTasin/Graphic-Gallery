from django.shortcuts import render
from .serializers import GallerySerializer
from .models import Gallery
from .permission import IsOwnerOrReadOnly
from rest_framework import viewsets

# Create your views here.





class GalleryViewSet(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        limit = self.request.query_params.get('limit')

        if limit:
            return self.queryset.all()[:int(limit)]
        else:
            return self.queryset.all()



class NikahNamaViewSet(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all().filter(category='Nikah_Nama')
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        limit = self.request.query_params.get('limit')

        if limit:
            return self.queryset.all()[:int(limit)]
        else:
            return self.queryset.all()



class BirthdayViewSet(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all().filter(category='Birthday')
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        limit = self.request.query_params.get('limit')

        if limit:
            return self.queryset.all()[:int(limit)]
        else:
            return self.queryset.all()


class OtherViewSet(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all().filter(category='Other')
    permission_classes = [IsOwnerOrReadOnly]


    def get_queryset(self):
        limit = self.request.query_params.get('limit')

        if limit:
            return self.queryset.all()[:int(limit)]
        else:
            return self.queryset.all()
        