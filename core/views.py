from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from .forms import SignupForm


def index(request):
    """
    renders the index page view : Home Page
    """
    context_dict = {}
    response = render(request, 'index.html', context=context_dict)
    return response


def register(request):
    return render(request, 'register.html')


def signup_view(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(user.password)
            user.save()
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            user = authenticate(username=email, password=password)
            login(request, user)
            return redirect('core:index')
    else:
        form = SignupForm()
    return render(request, 'account/signup.html', {'form': form})