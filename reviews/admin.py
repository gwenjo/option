from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'product',
        'user',
        'rating',
        'date_posted'
    )
