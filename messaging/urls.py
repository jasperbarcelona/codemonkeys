from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^outbound/', views.outbound_messages, name='outbound_messages'),
    url(r'^inbound/', views.inbound_messages, name='inbound_messages'),
    url(r'^read/', views.open_conversation, name='open_conversation'),
]