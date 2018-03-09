'use strict'
var divs = document.getElementsByClassName('outer-circle');
var delta = Math.PI * 2 / divs.length;
var x = 0, y = 0, angle = 0;

for (var i = 0; i < divs.length; i++) {
    divs[i].style.position = 'absolute';
    divs[i].style.left =  280 * Math.cos(angle) + 'px';
    divs[i].style.top = 280 * Math.sin(angle) + 'px';

    angle += delta;
}
