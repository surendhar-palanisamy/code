# Generated by Django 4.0.2 on 2022-02-23 19:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='useraccount',
            old_name='name',
            new_name='username',
        ),
    ]