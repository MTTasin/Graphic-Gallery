from django.contrib import admin
from .models import Gallery
# Register your models here.




@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    model = Gallery
    list_display = ["title", "category"]
    list_display_links = ["title", "category"]
    list_filter = ["category"]
    search_fields = ["title", "category"]