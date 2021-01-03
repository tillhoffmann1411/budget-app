from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from rest_framework import generics

from . import models
from . import serializers

from .forms import CustomUserCreationForm


class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'


class AccountsListView(generics.ListAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.AccountSerializer
