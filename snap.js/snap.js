$(document).ready(function () {
    console.log('hello snap.js');

    // define the Snap target
    var dog = $('#dog');
    var tail = $('#tail');
    var mouth = $('#mouthLine');
    var topWags = $('#topWagLines');
    var bottomWags = $('#bottomWagLines');

    function againIn() {
        if (hovering) {
            tailWag.animate({ 'd': pathConfig.to }, speed, easing, againOut);
            topWagLines.animate({ 'opacity': 1 }, speed, easing, againOut);
            // bottomWagLines.animate({ 'opacity': 0 }, speed, easing, againOut);
        };
    }

    function againOut() {
        tailWag.animate({ 'd': pathConfig.from }, speed, easing, againIn);
        topWagLines.animate({ 'opacity': 0 }, speed, easing, againIn);
        bottomWagLines.animate({ 'opacity': 1 }, speed, easing, againIn);
    }

    var speed = 500,
        easing = mina.easeinout,
        hovering = true;

    // Tail
    var tailWag = Snap(document.querySelector('#tail')),
        path = tailWag.attr('d'),
        pathConfig = {
            from: path,
            to: tail.attr('data-path-destination'),
        };

    // Smile
    var smile = Snap(document.querySelector('#mouthLine')),
        pathSmile = smile.attr('d'),
        pathConfigSmile = {
            from: pathSmile,
            to: mouth.attr('data-path-destination'),
        };

    // Top wag lines
    topWags.css('opacity', '0');

    // Bottom wag lines
    bottomWags.css('opacity', '0');

    dog.on('mouseenter', function () {
        console.log('wag tail');
        hovering = true;
        againIn(); // tail action
        smile.animate({ 'd': pathConfigSmile.to }, speed, easing,); // smile action
    });

    dog.on('mouseleave', function () {
        console.log('stop tail wag');
        hovering = false;
        againOut(); // tail action
        smile.animate({ 'd': pathConfigSmile.from }, speed, easing,); // smile action
    });

});