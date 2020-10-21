const intro = document.querySelector('.intro');
const text = intro.querySelector('h1');
const text2 = intro.querySelector('h2');

const controller = new ScrollMagic.Controller();

const flightPath = {
    //curviness of 0 is rigid motion
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: 0 },
        { x: 300, y: -10 },
        { x: 500, y: -15 },
        { x: 555, y: -20 },
        { x: 600, y: -30 },
        { x: 620, y: -270 },
        { x: 400, y: -300 },
        { x: 300, y: -420 },
        { x: 200, y: -450 },
        { x: 150, y: -500 },
        { x: 200, y: -450 },
        { x: 300, y: -500 },
        { x: 400, y: -550 },
        { x: 740, y: -600 },
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);


let scene = new ScrollMagic.Scene({
    triggerElement: intro,
    duration: 12000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('.intro')
    .addTo(controller)

let target1 = $('.section1').find('.box');
let tl1 = new TimelineMax();

tl1.from(target1, 1, { opacity: 0 });
tl1.to(target1, 1, {opacity: 0}, 0.75);

let projects = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: '400%'
})
    .setTween(tl1)
    .addIndicators()
    .addTo(controller);


    let target2 = $('.section2').find('.box');
    let tl2 = new TimelineMax();

    tl2.from(target2, 1, { opacity: 0, delay: 15});
    tl2.to(target2, 1, {opacity: 0, }, 0.75);

    new ScrollMagic.Scene({
    triggerElement: intro,
    triggerHook: 0,
    duration: 5000
    })
    .setTween(tl2)
    .addIndicators()
    .addTo(controller);


let target3 = $('.section3').find('.box');
let tl3 = new TimelineMax();

tl3.from(target3, 1, { opacity: 0, delay: 25 });
tl3.to(target3, 1, { opacity: 0 }, 0.75);

new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: 8000
})
    .setTween(tl3)
    .addIndicators()
    .addTo(controller);

