from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)


class UserManager(BaseUserManager):
    """
    A user manager that provides helper functions to created users
    """

    def create_user(self, email, password, **extra_fields):
        """
        Function to create a user
        """
        if not email:
            raise ValueError("Please provide an valid email address")
        email = self.normalize_email(email)   # makes the email all lower caps
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """
        creates a superuser for the system
        """
        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name='Email Address',
        max_length=255,
        unique=True,
        null=False,
    )
    password = models.CharField(max_length=255, null=False)
    username = models.CharField(max_length=255, verbose_name='Name')
    address = models.CharField(max_length=400)
    city = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # a admin user; non super-user
    is_superuser = models.BooleanField(default=False)  # a superuser
    # notice the absence of a "Password field", that is built in.

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [username, address, city, postal_code, phone_number]  # Email & Password are required by default.
    objects = UserManager()

    def get_full_name(self):
        # The user is identified by their email address
        return self.username

    # def get_short_name(self):
    #     # The user is identified by their email address
    #     return self.first_name

    def __str__(self):              # __unicode__ on Python 2
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    # @property
    # def is_staff(self):
    #     "Is the user a member of staff?"
    #     return self.is_staff
    #
    # @property
    # def is_superuser(self):
    #     "Is the user a admin member?"
    #     return self.is_superuser
    #
    # @property
    # def is_active(self):
    #     "Is the user active?"
    #     return self.is_active

