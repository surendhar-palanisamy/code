# Generated by Django 3.1.5 on 2021-04-18 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_auto_20210418_1535'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='documents',
            field=models.FileField(blank=True, null=True, upload_to='doc'),
        ),
    ]