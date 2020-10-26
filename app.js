const intro = document.querySelector('.intro');
const text = intro.querySelector('h1');
const text2 = intro.querySelector('h2');
const river = document.querySelector('.river');

const controller = new ScrollMagic.Controller();

const flightPath = {
    //curviness of 0 is rigid motion
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -10 },
        { x: 600, y: -30 },
        { x: 500, y: -200},
        { x: 200, y: -350},
        { x: 550, y: -500},
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

tl1
.fromTo(target1, 1, { opacity: 0 }, { opacity: 1 })
.to(target1, 1, { opacity: 0 }, "+=0.5")
;

let projects = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: 2000,
})
    .setTween(tl1)
    .addIndicators()
    .offset(2100)
    .reverse(true)
    .addTo(controller);





let target2 = $('.section2').find('.box');
let tl2 = new TimelineMax();

tl2
.fromTo(target2, 1, { opacity: 0 }, { opacity: 1 })
.to(target2, 1, { opacity: 0 }, "+=0.5")
;

let experience = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0,
  duration: 2000
})
  .setTween(tl2)
  .addIndicators()
  .offset(5800)
  .reverse(true)
  .addTo(controller);




let target3 = $('.section3').find('.box');
let tl3 = new TimelineMax();

tl3
.fromTo(target3, 1, { opacity: 0 }, { opacity: 1 })
.to(target3, 1, { opacity: 0 }, "+=0.5")
;

let education = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: 2000
})
    .setTween(tl3)
    .addIndicators()
    .offset(8000)
    .reverse(true)
    .addTo(controller);

let target4 = $('.indicator').find('span');
let tl4 = new TimelineMax();

tl4
.fromTo(target4, 3, { opacity: 1 }, { opacity:  0})
// .to(target4, 1, { opacity: 0 }, "+=0.5")
;

let indicator = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: 4000,
})
    .setTween(tl4)
    .addIndicators()
    .offset(1000)
    // .reverse(true)
    .addTo(controller);



// let target1 = $('.section1').find('.box');
// let tl1 = new TimelineMax();

// tl1.from(target1, 1, { opacity: 0 });
// tl1.to(target1, 1, {opacity: 0}, 0.75);

// let projects = new ScrollMagic.Scene({
// triggerElement: intro,
// triggerHook: 0,
// duration: '400%'
// })
//     .setTween(tl1)
//     .addIndicators()
//     .addTo(controller);


//     let target2 = $('.section2').find('.box');
//     let tl2 = new TimelineMax();

//     tl2.from(target2, 1, { opacity: 0, delay: 15});
//     tl2.to(target2, 1, {opacity: 0, }, 0.75);

//     new ScrollMagic.Scene({
//     triggerElement: intro,
//     triggerHook: 0,
//     duration: 5000
//     })
//     .setTween(tl2)
//     .addIndicators()
//     .addTo(controller);


// let target3 = $('.section3').find('.box');
// let tl3 = new TimelineMax();

// tl3.from(target3, 1, { opacity: 0, delay: 25 });
// tl3.to(target3, 1, { opacity: 0 }, 0.75);

// new ScrollMagic.Scene({
// triggerElement: intro,
// triggerHook: 0,
// duration: 8000
// })
//     .setTween(tl3)
//     .addIndicators()
//     .addTo(controller);


window.river = river;
console.log(river)