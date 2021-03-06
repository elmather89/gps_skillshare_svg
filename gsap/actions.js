$(document).ready(function () {
    console.log('hello gsap');

    const dog = $('#dog');
    const ear = $('#ear');
    var tl = new TimelineMax({ repeat: 1, yoyo: true, ease: 'elastic.out(1, 0.3)' });

    /**
     * original mouth_line d="M2.03,3.8c-0.7,0.3-2.7-0.6-1.8-1c6.3-3.5,14.7-2.6,21.7-2.8";
     * 
     * end mouth_line d="M31.06,7.69c-4.3,0.2-7.73,0.15-13.04,0.12C14.71,7.06,2.72,2.26,0,0"
     */


    dog.on('click', function (e) {
        e.preventDefault();
        tl.to(ear, { rotate: '0%', duration: 0.45, transformOrigin: '40% 0%'});
        tl.to(ear, { rotate: '30%', duration: 0.45 });
        tl.to(ear, { rotate: '-5%', duration: 0.45, });
        tl.to(ear, { rotate: '0%', duration: 0.45, });
        // TweenLite.from("#mouthLine", 1, { attr: { d: "M8.35,2.54c7.9,0.69,12.74,8.09,19.74,7.89c8.8-0.2,19.5-1.1,24.6-9.3 c0.1-0.1,0.2-0.2,0.4-0.2c-2.1,3.4-4.8,6.3-8.3,7.7c-2.1,0.8-4.5,1.6-7,2.4c-1.8,0.2-3.6,0.4-5.3,0.5c-4.3,0.2-8.6,0.1-12.9,0.3 C15.79,12.03,0.58,4.02,0.05,0C-0.65,0.3,6.02,3.54,8.35,2.54z" } });
    });

});