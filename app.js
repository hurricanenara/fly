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
    duration: 8000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('.intro')
    .addTo(controller)
    
// function fade() {
//   var target = $(this).find(".box");
//   var tl = new TimelineMax();
// }

// $(".section").each(function (i) {
//   var target = $(this).find(".box");
//   var tl = new TimelineMax();

//   tl.from(target, 1, { opacity: 0 });
//   tl.to(target, 1, { opacity: 0 }, 0.75);

//   new ScrollMagic.Scene({
//     triggerElement: intro,
//     triggerHook: 0,
//     duration: '392%'
//   })
//     // .setPin(this)
//     // .setTween(tween)
//     .setTween(tl)
//     .addIndicators()
//     .addTo(controller);
// });

let target1 = $('.section1').find('.box');
let tl1 = new TimelineMax();

tl1.from(target1, 1, { opacity: 0 });
tl1.to(target1, 1, { opacity: 0 }, 0.75);

new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: '392%'
})
.setTween(tl1)
.addIndicators()
.addTo(controller);

let target2 = $('.section2').find('.box');
let tl2 = new TimelineMax();

tl2.from(target2, 1, { opacity: 0 });
tl2.to(target2, 1, { opacity: 0 }, 0.75);

new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: '392%'
})
.setTween(tl2)
.addIndicators()
.addTo(controller);

// const textAnim = TweenMax.fromTo(text, 3, { opacity: 0}, {opacity: 1});
// const textAnim2 = TweenMax.fromTo(text2, 3, { opacity: 0}, {opacity: 1});

// let scene2 = new ScrollMagic.Scene({
//     duration: 6800,
//     triggerElement: intro,
//     triggerHook: 0,
// })

// .setTween(textAnim)
// .addIndicators()
// .addTo(controller)

// let scrollpos = 0;

// scene2.on('update', e => {
//     scrollpos = e.scrollPos / 1000;
//     if (e.scrollPos > 6030 && e.scrollPos < 7000) {
//         new ScrollMagic.Scene({
//         duration: 10000,
//         triggerElement: intro,
//         triggerHook: 0,
//     })
//         .setTween(textAnim2)
//         .addIndicators()
//         .addTo(controller)
//     };
//     console.log(e.scrollPos);
// })

let riverStart = document.querySelector('#river')
window.riverStart = riverStart;
// console.log(riverStart);