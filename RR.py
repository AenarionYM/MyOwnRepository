import random
import time
import os

def clear():
    os.system("cls")
def sleep():
    time.sleep(0.25)
def start():
    os.system("color 4")
    clear()
    print("Teb Studio prezentuje")
    time.sleep(1.0)
    print("Rosyjska Ruletka")
    input("press enter...")
    clear()
    os.system("color 7")
def gra():
    print("Zagrajmy w Rosyjską Ruletke!")
    sleep()
    print("Gra została zmodyfikowana w taki sposób by to 5/6 naboji było załadowanych")
    sleep()
    print("Wybierz liczne od 1 do 6:")
    number = int(input())
    randomNumber = random.randint(1, 7)
    if number == randomNumber and number <= 6:
        print("Brawo! Przeżyłeś Rosyjską Ruletkę!")
    elif number != randomNumber and randomNumber < 7 and number <= 6:
        print("*Nie żyjesz*")
        print("Prawidłowy numer to ", randomNumber)
    elif number != randomNumber and randomNumber < 7 and number <= 6:
        print("Prawidłowy numer to ", randomNumber)
        print("yyy... Cuś sie zeobao")
    elif number >= 7:
        print("Jak ty jesteś głupi")
    else:
        print("Prawidłowy numer to ", randomNumber)
        print("yyy... Cuś sie zeobao")
    input("press enter to continue...")
    clear()
    gra()
#Wstęp
start()
#Gra
gra()