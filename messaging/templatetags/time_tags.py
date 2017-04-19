from django import template

register = template.Library()

@register.simple_tag()
def get_date(value, format="%B %d, %Y"):
    try:
        return value.strftime(format)
    except ValueError:
        return u"Error: Invalid format."

@register.simple_tag()
def get_time(value, format="%I:%M %p"):
    try:
        return value.strftime(format)
    except ValueError:
        return u"Error: Invalid format."