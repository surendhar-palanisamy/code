# Generated by Django 3.1.5 on 2021-04-18 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_profile_dob'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='date_created',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
