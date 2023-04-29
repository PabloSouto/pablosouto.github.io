#!/usr/bin/env python3
import cgi
import sys

form = cgi.FieldStorage()
username = form.getvalue("username")
password = form.getvalue("password")

try:
    with open("pass.txt", "r") as f:
        file_data = f.read()
        if username in file_data and password in file_data:
            print("Content-Type: text/plain")
            print()
            print("Están")
        else:
            print("Content-Type: text/plain")
            print()
            print("No están")
except FileNotFoundError:
    print("Content-Type: text/plain")
    print()
    print("No se puede acceder al archivo")
