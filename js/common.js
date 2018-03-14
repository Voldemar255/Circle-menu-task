

function radiusPosition(radius, el, angle) {
    var elements = document.getElementsByClassName(el);
    var delta = (Math.PI * 2 / elements.length);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.position = 'absolute';
        elements[i].style.left = 10 + radius * Math.cos(angle) + 'px';
        elements[i].style.top = 325 + radius * Math.sin(angle) + 'px';
        angle += delta;
    }
}
radiusPosition(290, "outer-circle", 0);
radiusPosition(360, "text", 0);

window.onwheel = function() {
    var angle = 0;
    var scrolled = window.pageYOffset || window.pageXOffset || document.documentElement.scrollTop;
    // console.log(scrolled);
    angle += scrolled;
    radiusPosition(290, "outer-circle", angle);
    radiusPosition(360, "text", angle);
};

// $(function () {
//     $('.outer-circle').on('scroll'), function (event) {
//         (event.target).addClass('visible');
//     }
// });
