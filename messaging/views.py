from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from messaging.models import *

def index(request):
	messages = Message.objects.order_by('origin_msisdn','-timestamp').distinct('origin_msisdn')
	return render(request, 'messaging/dashboard/index.html',{'messages':messages})

def outbound_messages(request):
	messages = Message.objects.filter(message_type='outbound').order_by('-timestamp')
	return render(request, 'messaging/dashboard/outbound.html',{'messages':messages})

def inbound_messages(request):
	messages = Message.objects.order_by('origin_msisdn','-timestamp').distinct('origin_msisdn')
	return render(request, 'messaging/dashboard/inbound.html',{'messages':messages})

def open_conversation(request):
	message = Message.objects.filter(id=request.GET['message_id']).first()
	return render(request, 'messaging/dashboard/message.html',{'message':message,'type':request.GET['type']})