from django.db import models
import uuid

# Create your models here.


Nikah_nama = "Nikah_Nama"
Birthday = "Birthday"
Other = "Other"


class Category(models.TextChoices):
    Nikah_nama = "Nikah_Nama"
    Birthday = "Birthday"
    Other = "Other"

class Gallery(models.Model):
    image = models.ImageField(upload_to='gallery/images/')
    title = models.CharField(max_length=100)
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    category = models.CharField(max_length=100, choices=Category.choices, default=Category.Nikah_nama)
    size = models.CharField(max_length=20)


    def __str__(self):
        return self.title
    