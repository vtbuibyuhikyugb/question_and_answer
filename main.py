import eel
from random import choice
import csv

o=open("2.csv","r")
l=list(csv.reader(o))
o.close()

m=0
eel.init("")
# Exposing the random_python function to javascript
@eel.expose	

def Text_def():
	print("Random function running")
	return choice(l)
	
# Start the index.html file


eel.start("index.html")
