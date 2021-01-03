from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse

from .models import Account
from .serializers import AccountSerializer

from .forms import CustomUserCreationForm


@csrf_exempt
def account_list(request):
    """
    List all Accounts, or create a new Account.
    """
    if request.method == 'GET':
        accounts = Account.objects.all()
        serializer = AccountSerializer(accounts, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AccountSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def account_detail(request, pk):
    """
    Retrieve, update or delete a Account.
    """
    try:
        account = Account.objects.get(pk=pk)
    except account.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = accountSerializer(account)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = accountSerializer(account, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        account.delete()
        return HttpResponse(status=204)
