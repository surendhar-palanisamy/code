# Generated by Django 4.1 on 2022-08-05 07:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=25, null=True)),
                ('last_name', models.CharField(blank=True, max_length=25, null=True)),
                ('mobile_number', models.BigIntegerField(blank=True, null=True)),
                ('office_number', models.BigIntegerField(blank=True, null=True)),
                ('home_number', models.BigIntegerField(blank=True, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team_name', models.CharField(blank=True, max_length=25, null=True)),
                ('team_id', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member', models.ManyToManyField(to='base.profile')),
                ('team_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.team')),
            ],
        ),
        migrations.CreateModel(
            name='MeetingsAssigned',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(blank=True, null=True)),
                ('time', models.TimeField(blank=True, null=True)),
                ('date_time', models.DateTimeField(blank=True, null=True)),
                ('team_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='meeting_team_id', to='base.team')),
            ],
        ),
        migrations.CreateModel(
            name='AssignedRole',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roles', models.CharField(choices=[('Member', 'Member'), ('Primary member', 'Primary member'), ('Secondary member', 'Secondary member'), ('Teritary member', 'Teritary member'), ('Primary lead', 'Primary lead'), ('Secondary lead', 'Secondary lead'), ('Manager', 'Manager')], max_length=60)),
                ('meeting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assigned_meeting', to='base.meetingsassigned')),
                ('members', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='team_members', to='base.teammember')),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assigned_team', to='base.team')),
            ],
        ),
    ]
