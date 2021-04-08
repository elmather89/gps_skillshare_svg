$(document).ready(function () {
    console.log('hello sheba');

    var sheba = $('#sheba_dog');
    var leftBrow = $('#left_x5F_eyebrow');
    var rightBrow = $('#right_x5F_eyebrow');
    var keyframes = [
        {
            transform: 'translateY(-1000px) scaleY(2.5) scaleX(.2)',
            transformOrigin: '50% 0', filter: 'blur(40px)', opacity: 0
        },
        {
            transform: 'translateY(0) scaleY(1) scaleX(1)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ];
    var options = {
        iterations: Infinity,
        iterationStart: 0,
        delay: 0,
        endDelay: 0,
        direction: 'alternate',
        duration: 700,
        fill: 'forwards',
        easing: 'ease-out',
    }

    var degree = 45;

    // on hover event listener
    sheba.on('click', function (e) {
        e.preventDefault();
        console.log('clicked');
        
        // define action here
        // animateBrows(leftBrow);
        // animateBrows(rightBrow);
        rightBrow.css({
            transform: 'rotate(45deg)',
        });


        $('#testdiv').css({
            transition: 'all ease-in-out 400ms',
            transform: `rotate(${degree}deg)`,
        });

    });

});