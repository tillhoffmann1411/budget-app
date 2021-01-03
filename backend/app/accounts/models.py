from django.contrib.auth.models import AbstractUser
from django.db import models


class Account(AbstractUser):
    name = models.CharField(max_length=255)
    pass

    def __str__(self):
        return self.username

    def create_inactive_user(self, username, email, password, name, site, send_email=False, first_name=None, last_name=None):
        """
            Create a new, inactive ``User``, generate a
            ``RegistrationProfile`` and email its activation key to the
            ``User``, returning the new ``User``.

            By default, an activation email will be sent to the new
            user. To disable this, pass ``send_email=False``.
        """
        new_user = Account.objects.create_user(username, email, password, name)
        new_user.is_active = True
        new_user.name = name
        new_user.save()

        registration_profile = self.create_profile(new_user)

        return new_user
