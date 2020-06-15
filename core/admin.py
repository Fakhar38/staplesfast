from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import ugettext_lazy as _
from core.models import User

# Register your models here.


class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['email', 'username']
    fieldsets = (
        (
            None,
            {'fields': ('email', 'password')}
        ),
        (
            _('Personal Info'),
            {'fields': ('username', 'address', 'city', 'postal_code', 'phone_number')}
        ),
        (
            _('Permissions'),
            {'fields': ('is_active', 'is_staff', 'is_superuser')}
        ),
        (
            _('Important dates'),
            {'fields': ('last_login',)}
        ),
    )
    add_fieldsets = (
        (
            None,
            {'classes': ('wide',),
             'fields': ('email', 'username', 'password1', 'password2',
                        'is_staff', 'is_superuser'),
             }
        ),
    )


admin.site.register(User, UserAdmin)
