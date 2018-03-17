

function radiusPosition(radius, el, angle) {
    var elements = document.getElementsByClassName(el);
    var delta = (Math.PI * 2 / elements.length);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.position = 'absolute';
        elements[i].style.left = 10 + radius * Math.cos(angle) + 'px';
        elements[i].style.top = 325 + radius * Math.sin(angle) + 'px';
        angle += delta;
        // console.log(delta);
    }
}
radiusPosition(290, "outer-circle", 0);
radiusPosition(360, "text", 0);

var elem = window;

if (elem.addEventListener) {
    if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
    } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
    }
} else { // IE8-
    elem.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
    e = e || window.event;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    var angle = 0;
    angle += delta;
    console.log (angle);
    radiusPosition(290, "outer-circle", angle);
    radiusPosition(360, "text", angle);
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
};

var myBtnUp = document.getElementById('next');
var angle = 0;
myBtnUp.addEventListener('click', function () {
    var delta = 0.5711986642890533;
    angle -= delta;
    radiusPosition(290, "outer-circle", angle);
    radiusPosition(360, "text", angle);
});

var myBtnDown = document.getElementById('prev');
var angle = 0;
myBtnDown.addEventListener('click', function () {
    var delta = 0.5711986642890533;
    angle += delta;
    radiusPosition(290, "outer-circle", angle);
    radiusPosition(360, "text", angle);
});










// $(function () {
//     $('.outer-circle').on('scroll'), function (event) {
//         (event.target).addClass('visible');
//     }
// });
