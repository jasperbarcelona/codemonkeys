from django.contrib.auth.models import User
from django.db.models.signals import post_save, pre_save
from messaging.models import OutboundMessage
from django.forms.models import model_to_dict


def send_sms(sender, instance, *args, **kwargs):
    print 'xxxxxxxxxxxx'
    print 'Implement code to globelabs'

def get_user(sender, instance, *args, **kwargs):
    print 'xxxxxxxxxxxx'
    print model_to_dict(instance)

pre_save.connect(send_sms, sender=OutboundMessage)
post_save.connect(get_user, sender=OutboundMessage)


# @receiver(post_save, sender=OutboundMessage)
# def on_message_save(sender, **kwargs):
#     if not kwargs.get('created', False):
#         print 'xxxxxxxxxxxx'
#       print sender
#       print 'Implement code to globelabs'
#     print 'xxxxxxxxxxxx'
#     print sender
#     print 'Implement code to globelabs'