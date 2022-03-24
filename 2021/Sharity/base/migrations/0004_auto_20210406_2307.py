# Generated by Django 3.1.5 on 2021-04-06 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_block'),
    ]

    operations = [
        migrations.AddField(
            model_name='block',
            name='cash',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='block',
            name='receiver',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='block',
            name='sender',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
