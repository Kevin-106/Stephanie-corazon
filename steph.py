from turtle import *
import math

setup(800, 800)
bgcolor("black")
speed(0)
hideturtle()
pensize(2)

def heart1(M):
    return 15 * math.sin(M) ** 3

def heart2(M):
    return 12 * math.cos(M) - 5 * \
           math.cos(2 * M) - 2 * \
           math.cos(3 * M) - \
           math.cos(4 * M)

# Dibujo del corazón
for i in range(380):
    penup()
    goto(heart1(i) * 18, heart2(i) * 18)
    pendown()
    color("red")
    goto(0, 0)

# Texto inferior
penup()
goto(0, -280)
color("pink")
write(
    "Stephanie te quiero mucho ❤️",
    align="center",
    font=("Arial", 20, "bold")
)

done()