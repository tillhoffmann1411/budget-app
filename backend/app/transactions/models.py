from django.db import models
from django.conf import settings


class Regularity(models.Model):
    unit = models.CharField(max_length=30)

    def __str__(self):
        return self.unit


class Transaction(models.Model):
    id = models.AutoField(primary_key=True)
    amount = models.DecimalField(max_digits=11, decimal_places=2)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=120, null=True)
    comment = models.CharField(max_length=500, null=True)
    regularity = models.ForeignKey(
        Regularity,
        on_delete=models.SET_NULL,
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title + ': ' + str(self.amount)
