# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-14 14:45
from __future__ import unicode_literals

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
            name='Conversation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('msisdn', models.CharField(max_length=15)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conversation_id', models.IntegerField()),
                ('message_type', models.CharField(max_length=16)),
                ('message', models.TextField()),
                ('state', models.CharField(choices=[('RECEIVE_SUCCESS', 'Message received'), ('READ_SUCCESS', 'Message read'), ('SEND_QUEUED', 'Message in Queue'), ('SEND_SUCCESS', 'Successfully sent.'), ('SEND_FAILED', 'Failed to send')], max_length=36)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('origin_msisdn', models.CharField(blank=True, default=None, max_length=15, null=True)),
                ('destination_msisdn', models.CharField(blank=True, default=None, max_length=15, null=True)),
                ('sender', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
