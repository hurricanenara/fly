const intro = document.querySelector('.intro');
const text = intro.querySelector('h1');

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
        // { x: 555, y: -25 },
        { x: 500, y: -250 },
        { x: 400, y: -280 },
        { x: 300, y: -350 },
        { x: 200, y: -400 },
        { x: 90, y: -420 },
        { x: 200, y: -565 },
        { x: 300, y: -565 },
        { x: 400, y: -565 },
        { x: 600, y: -565 },
        // { x: 534, y: -565 },

        // { x: window.innerWidth, y: -290 },
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
    duration: 9000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('.intro')
    .addTo(controller)

const textAnim = TweenMax.fromTo(text, 3, { opacity: 0}, {opacity: 1});

let scene2 = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller)

let riverStart = document.querySelector('#river')
window.riverStart = riverStart;
// console.log(riverStart);