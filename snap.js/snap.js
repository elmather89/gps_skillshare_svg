$(document).ready(function () {
    console.log('hello snap.js');

    var dog = $('#dog');
    var tail = $('#tail');
    var mouth = $('#mouthLine'),
        tennisball = Snap('#ball');
    // var topWags = $('#topWagLines');
    // var bottomWags = $('#bottomWagLines');
    var speed = 500,
        easing = mina.easeinout,
        hovering = true;

    function againIn() {
        if (hovering) {
            tailWag.animate({ 'd': pathConfig.to }, speed, easing, againOut);
            topWagLines.animate({ 'opacity': 1 }, speed, easing, againOut);
        };
    }

    function againOut() {
        tailWag.animate({ 'd': pathConfig.from }, speed, easing, againIn);
        topWagLines.animate({ 'opacity': 0 }, speed, easing, againIn);
        bottomWagLines.animate({ 'opacity': 1 }, speed, easing, againIn);
    }

    // define the Snap target
    // Tail
    var tailWag = Snap('#tail'), // Snap() allows you to either create a drawing surface or wrap an existing SVG element. 
        path = tailWag.attr('d'),
        pathConfig = {
            from: path,
            to: tail.attr('data-path-destination'),
        };

    // Smile
    var smile = Snap('#mouthLine'),
        pathSmile = smile.attr('d'),
        pathConfigSmile = {
            from: pathSmile,
            to: mouth.attr('data-path-destination'),
        };

    dog.on('mouseenter', function () {
        console.log('wag tail');
        hovering = true;
        againIn(); // tail action
        smile.animate({ 'd': pathConfigSmile.to }, speed, easing,); // smile action

        /**
         * tennis ball
         */
        // Transform Property in the .animate() method: Each letter is a command. 
        // There are four commands: 
        // t is for translate, r is for rotate, s is for scale and m is for matrix.
        var ballSvg = tennisball.circle(100, 100, 20).attr({ id: 'ballSvg', fill: 'gold', stroke: 'white', strokeWidth: '5px', position: 'relative', zIndex: '100', });
        tennisball.animate({ 'opacity': 1, 'transform': 't0,160%,', 'rotate': '180deg', }, 700, mina.bounce,);
    });

    dog.on('mouseleave', function () {
        console.log('stop tail wag');
        hovering = false;
        againOut(); // tail action
        smile.animate({ 'd': pathConfigSmile.from }, speed, easing,); // smile action
        tennisball.animate({ 'opacity': 0, 'transform': 't0,160%, t100%,160%', }, 700, easing,);
    });

});