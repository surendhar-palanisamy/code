# Generated by Django 3.2 on 2021-06-05 10:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('category', models.CharField(choices=[('electronic', 'electronic'), ('men clothes', 'men clothes'), ('women clothes', 'women clothes'), ('non consumable', 'non consumable')], default='non consumable', max_length=255)),
                ('product_type', models.CharField(choices=[('indoor', 'indoors'), ('outdoors', 'outdoors')], max_length=255)),
                ('price', models.CharField(max_length=255)),
                ('discounted_price', models.CharField(max_length=255)),
                ('product_specification', models.CharField(max_length=255)),
                ('product_image', models.ImageField(upload_to='images/')),
            ],
        ),
    ]
