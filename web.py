#!/usr/bin/python
import dominate
from dominate import document
from dominate.tags import *
#from data import *
from dominate.util import raw

# add content


title = "Fibonacci number"
image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/SunflowerModel.svg/220px-SunflowerModel.svg.png"
body = " Fibonacci numbers appear unexpectedly often in mathematics, so much so that there is an entire journal dedicated to their study, the Fibonacci Quarterly. Applications of Fibonacci numbers include computer algorithms such as the Fibonacci search technique and the Fibonacci heap data structure, and graphs called Fibonacci cubes used for interconnecting parallel and distributed systems. They also appear in biological settings, such as branching in trees, the arrangement of leaves on a stem, the fruit sprouts of a pineapple, the flowering of an artichoke, an uncurling fern and the arrangement of a pine cone's bracts."
more = "more text here"
wiki = "https://en.wikipedia.org/wiki/Fibonacci_number"
video = "https://www.youtube.com/watch?v=keLN89CWZ-A&t=47s"



# make the document
with document(title) as doc:
    link(rel='stylesheet', href='style1.css')
    h1(title)
    div(img(src=image), _class='image')
    p(h2(' ', body))
    h4('Gia perisotera diavase ', raw('<a href="%s">wiki</a>' % wiki), ' h pata to ', raw('<a href="%s">video</a>' % video))




# create index.html file
with open("postx.html", "w") as f:
    f.write(doc.render())

