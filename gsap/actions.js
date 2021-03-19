$(document).ready(function () {
    console.log('hello gsap');

    const dog = $('#dog');
    const ear = $('#ear');
    var tl = new TimelineMax({ repeat: 1, yoyo: true, ease: 'elastic.out(1, 0.3)' });

    var rotateArr = ['0%', '30%', '-5%', '0%',];
    var duration = 0.45;
    var transformOriginArr = ['40% 0%', '0%', '0%', '0%',];
    var animationObj = [{
        rotate: '',
        duration: '',
        transformOrigin: '',
    }];

    /**
     * original mouth_line d="M2.03,3.8c-0.7,0.3-2.7-0.6-1.8-1c6.3-3.5,14.7-2.6,21.7-2.8";
     * 
     * end mouth_line d="M31.06,7.69c-4.3,0.2-7.73,0.15-13.04,0.12C14.71,7.06,2.72,2.26,0,0"
     */

    function animateEar() {
        tl.to(ear, { rotate: '0%', duration: 0.45, transformOrigin: '40% 0%' });
        tl.to(ear, { rotate: '30%', duration: 0.45 });
        tl.to(ear, { rotate: '-5%', duration: 0.45, });
        tl.to(ear, { rotate: '0%', duration: 0.45, });
    };

    function rotateDog() {
        tl.to(dog, { rotate: '180deg', });
        tl.to(dog, { rotate: '0deg', });
    }

    dog.hover(function (e) {
        e.preventDefault();
        animateEar();
    });

});