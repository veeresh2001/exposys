from rest_framework import serializers
from .models import stock,delivery
class stockSerializer(serializers.ModelSerializer):
    class Meta:
        model=stock
        fields='__all__'
class deliverySerializer(serializers.ModelSerializer):
    class Meta:
        model=delivery
        fields='__all__'

