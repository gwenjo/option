from django.shortcuts import render

# Create your views here.
from django.shortcuts import render


def index(request):
    """ A view to return the about us page """

    return render(request, 'about/about.html')
