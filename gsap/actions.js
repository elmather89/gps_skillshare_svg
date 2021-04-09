$(document).ready(function () {
    console.log('hello gsap');

    // variables
    const dog = $('#dog');
    const ear = $('#ear');
    const tennisball = $('.tennisball')
    var tl = gsap.timeline({ repeat: 2, yoyo: true, ease: 'elastic.out(1, 0.3)' });

    // simple timeline example:
    function animateEar() {
        tl.to(ear, { rotate: '0%', duration: 0.45, transformOrigin: '40% 0%' })
            .to(ear, { rotate: '30%', duration: 0.45 })
            .to(ear, { rotate: '-5%', duration: 0.45, })
            .to(ear, { rotate: '0%', duration: 0.45, });
    };

    // second timeline example:
    // function morphDog() {
    //     tl.to(dog, { morphSVG: tennisball, duration: 1 }, "+=1");
    // }

    /**
     * On hover
     */
    dog.hover(function (e) {
        e.preventDefault();
        animateEar();
    });

    /**
     * On click
     */
    dog.on('click', function (e) {
        e.preventDefault();
        // morphDog();
    });

});