#!/usr/local/bin/python3

from math import sin, cos, radians

def svg():
    print('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">')
    # circle(39)
    group(40, 39, 35, 0)
    group(40, 35, 29, 15)
    group(40, 29, 23, 0)
    # group(40, 19, 15, 15)
    print('</svg>')

def circle(r):
    print('<circle cx="40" cy="40" r="'+str(r)+'" stroke="black" fill="transparent"/>')

def group(c, r1, r2, theta):
    print('<g>')
    for i in range(12):
        x1 = c + r1*sin(radians(i*30 + theta))
        y1 = c - r1*cos(radians(i*30 + theta))
        x1 = round(x1,1)
        y1 = round(y1,1)
        x1 = str(x1)
        y1 = str(y1)

        x2 = c + r2*sin(radians(i*30+15 + theta))
        y2 = c - r2*cos(radians(i*30+15 + theta))
        x2 = round(x2,1)
        y2 = round(y2,1)
        x2 = str(x2)
        y2 = str(y2)


        print('    <line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="black"/>',sep='')

        x2 = c + r2*sin(radians(i*30-15 + theta))
        y2 = c - r2*cos(radians(i*30-15 + theta))
        x2 = round(x2)
        y2 = round(y2)
        x2 = str(x2)
        y2 = str(y2)

        print('    <line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="black"/>',sep='')

    print('</g>')

if __name__ == '__main__':
    svg()