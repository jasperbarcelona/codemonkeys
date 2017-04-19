from __future__ import unicode_literals
from django.contrib.auth.models import User
from polymorphic.models import PolymorphicModel
from django.db import models


class Message(models.Model):
    MESSAGE_STATES = [
        ('RECEIVE_SUCCESS', 'Message received'),
        ('READ_SUCCESS', 'Message read'),
        ('SEND_QUEUED', 'Message in Queue'),
        ('SEND_SUCCESS', 'Successfully sent.'),
        ('SEND_FAILED', 'Failed to send'),
    ]
    conversation_id = models.IntegerField()
    message_type = models.CharField(max_length=16)
    message = models.TextField()
    state = models.CharField(max_length=36, choices=MESSAGE_STATES)
    timestamp = models.DateTimeField(auto_now_add=True)
    origin_msisdn = models.CharField(max_length=15, default=None, blank=True, null=True)
    destination_msisdn = models.CharField(max_length=15, default=None, blank=True, null=True)
    sender = models.ForeignKey(User, default=None, blank=True, null=True)

class Conversation(models.Model):
    msisdn = models.CharField(max_length=15)
    timestamp = models.DateTimeField(auto_now_add=True)