from django.shortcuts import render
from .models import stock,delivery
from django.http import JsonResponse
# Create your views here.
from bootstrap_modal_forms.generic import BSModalCreateView

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import deliverySerializer
from .forms import deliveryForm
def sto(request):
    return render(request,"ush.html")
def stock1(request):
    print("details had been recorded")
    company=request.POST["uname"]
    sharevalue=request.POST["psw"]
    purchase_value=request.POST["pname"]
    owner=request.POST["opsw"]
    stocky=stock(company=company,sharevalue=sharevalue,purchase_value=purchase_value,owner=owner)
    stocky.save()
    return render(request,"ush.html")
def deli(request):
    items=delivery.objects.all()
    form=delivery()
    con={'items':items,'form':form}
    return render(request,"dash.html",con)

def delis(request):
    print("product added")
    product_id=request.POST["product_id"]
    product_name=request.POST["product_name"]
    vehicle_number=request.POST["vehicle_number"]
    driver_name=request.POST["driver_name"]
    phone_number=request.POST["phone-no"]
    quantity=request.POST["quantity"]
    date=request.POST["date"]
    delisy=delivery(product_id=product_id,product_name=product_name,vehicle_number=vehicle_number,driver_name=driver_name,phone_number=phone_number,quantity=quantity,date=date)
    delisy.save()
    cont={'con':'Updated'}
    return render(request,"hm.html",cont)

def update_d(request,pk):
    delu=delivery.objects.get(product_id=pk)
    con={'delu':delu}
    delu.delete()
    return render(request,"ush.html",con)
def delete_d(request,pk):
    delu=delivery.objects.get(product_id=pk)
    delu.delete()
    cont={'con':'Deleted'}
    return render(request,"hm.html",cont)
@api_view(['GET'])
def apiOverview(request):
    api_urls={
        "list":'/delivery-list/'
    
    }
    return Response(api_urls)
@api_view(['GET'])
def deliverylist(request):
    deliverys=delivery.objects.all()
    serializer=deliverySerializer(deliverys,many=True)
    return Response(serializer.data)
@api_view(['POST'])
def stockcreate(request):
    
    serializer=deliverySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['POST'])
def updel(request,pk):
    delu=delivery.objects.get(product_id=pk)
    seri=deliverySeializer(instance=pk,data=request.data)
    if seri.is_valid():
        seri.save()
    return Response(seri.data)
@api_view(['Delete'])
def ddel(request,pk):
    delu=delivery.objects.get(product_id=pk)
    delu.delete()
    return Response(seri.data)