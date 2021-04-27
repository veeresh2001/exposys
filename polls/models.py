from django.db import models
from django.utils import timezone
import datetime
from django.contrib.auth.models import User
class stock(models.Model):
    company=models.CharField(max_length=200)
    sharevalue=models.FloatField(default=0)
    purchase_value=models.FloatField(default=0)
    owner=models.CharField(max_length=200)
class delivery(models.Model):
    product_id=models.CharField(default="A1",primary_key=True,max_length=200)
    product_name=models.CharField(max_length=200)
    vehicle_number=models.CharField(max_length=200)
    driver_name=models.CharField(max_length=200)
    phone_number=models.CharField(max_length=13)
    quantity=models.FloatField(default=0)
    date=models.DateField(default=datetime.date.today)   


# Create your models here.
