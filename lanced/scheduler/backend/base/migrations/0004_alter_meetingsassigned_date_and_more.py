# Generated by Django 4.1 on 2022-08-08 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_profile_user_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meetingsassigned',
            name='date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='meetingsassigned',
            name='end_time',
            field=models.TimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='meetingsassigned',
            name='start_time',
            field=models.TimeField(auto_now_add=True, null=True),
        ),
    ]