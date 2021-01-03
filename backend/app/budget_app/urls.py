from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic.base import TemplateView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('transactions/', include('transactions.urls')),
    re_path(r'^auth/', include('rest_auth.urls')),
    re_path(r'^auth/registration/', include('rest_auth.registration.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
