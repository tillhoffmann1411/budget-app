from rest_framework import serializers

from .models import Transaction
from accounts.models import Account


class TransactionSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        slug_field='username', queryset=Account.objects.all())

    class Meta:
        model = Transaction
        fields = ('id', 'amount', 'title', 'user', 'comment',
                  'regularity', 'created_at', 'updated_at')
