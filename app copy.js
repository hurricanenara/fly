const intro = document.querySelector('.intro');
const text = intro.querySelector('h1');
const text2 = intro.querySelector('h2');
let scrollPos;

const controller = new ScrollMagic.Controller();

$(window).on('scroll', function() {
    // console.log( $(this).scrollTop() / 1000 );
    scrollPos = $(this).scrollTop() / 1000;
    console.log(scrollPos)
});

const flightPath = {
    //curviness of 0 is rigid motion
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: 0 },
        { x: 300, y: -10 },
        { x: 500, y: -15 },
        { x: 555, y: -20 },
        { x: 800, y: -30 },
        { x: 700, y: -270 },
        { x: 400, y: -400 },
        { x: 300, y: -400 },
        { x: 200, y: -450 },
        { x: 150, y: -500 },
        { x: 200, y: -600 },
        { x: 300, y: -660 },
        { x: 400, y: -660 },
        { x: 740, y: -680 },
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
    duration: 12000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('.intro')
    .addTo(controller)

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
// tl1.to(target1, 1, { opacity: 0 }, 0.75);
// tl1.set(target1, {opacity: 0});
tl1.to(target1, 1, {opacity: 1}, 0)
    .to(target1, 1, {opacity: 0}, 0.75);

let projects = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: 4000
})
.setTween(tl1)
.addIndicators()
.addTo(controller);


    let target2 = $('.section2').find('.box');
    let tl2 = new TimelineMax();

    tl2.from(target2, 1, { opacity: 0});
    tl2.to(target2, 1, {opacity: 1}, 0)
        .to(target2, 1, {opacity: 0, }, 0.75);

    new ScrollMagic.Scene({
    triggerElement: intro,
    triggerHook: 0,
    duration: 5000
    })
    .setTween(tl2)
    .addIndicators()
    .addTo(controller);

// if (scrollPos > 5.8) {
//     let target2 = $('.section2').find('.box');
//     let tl2 = new TimelineMax();

//     tl2.from(target2, 1, { opacity: 0});
//     tl2.to(target2, 1, {opacity: 1}, 0)
//         .to(target2, 1, {opacity: 0, }, 0.75);

//     new ScrollMagic.Scene({
//     triggerElement: intro,
//     triggerHook: 0,
//     duration: 5000
//     })
//     .setTween(tl2)
//     .addIndicators()
//     .addTo(controller);
// }


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
