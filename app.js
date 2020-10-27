const intro = document.querySelector('.intro');
const animation = document.querySelector('.ani-figure')
const text = intro.querySelector('h1');
const text2 = intro.querySelector('h2');
const river = document.querySelector('.river');
const paperPlane = $('.paper-plane')

console.log(paperPlane.position())
console.log(paperPlane.scrollTop())

const controller = new ScrollMagic.Controller();

const flightPath = {
    //curviness of 0 is rigid motion
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -10 },
        { x: 600, y: -30 },
        { x: 500, y: -200},
        { x: 100, y: -350},
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
    .addTo(controller);

// scene.on('update', e => {
//     console.log(e.scrollPos)
//     if (e.scrollPos > 4000) {
//         $('.education').remove()
//     }
// })

let target1 = $('.section1').find('.cloud-circle');
let tl1 = new TimelineMax();

tl1
.fromTo(target1, 1, { opacity: 0 }, { opacity: 0.94 })
.to(target1, 1, { opacity: 0 }, "+=0.5");

let education = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: 2000,
})
    .setTween(tl1)
    .addIndicators()
    .offset(2100)
    .reverse(true)
    .addTo(controller);

let target2 = $('.section2').find('.cloud-circle');
let tl2 = new TimelineMax();

tl2
.fromTo(target2, 1, { opacity: 0 }, { opacity: 0.94 })
.to(target2, 1, { opacity: 0 }, "+=0.5");

let experience = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0,
  duration: 2000
})
  .setTween(tl2)
  .addIndicators()
  .offset(5500)
  .reverse(true)
  .addTo(controller);

let target3 = $('.section3').find('.cloud-circle');
let tl3 = new TimelineMax();

tl3
.fromTo(target3, 1, { opacity: 0 }, { opacity: 0.94 })
.to(target3, 1, { opacity: 0 }, "+=0.5");

let projects = new ScrollMagic.Scene({
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
.fromTo(target4, 3, { opacity: 1 }, { opacity:  0});

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

// text tween

let textTarget1 = $('.section1').find('.cloud-text');
let txt1 = new TimelineMax();

txt1
.fromTo(textTarget1, 1, { opacity: 0 }, { opacity: 1 })
.to(textTarget1, 1, { opacity: 0 }, "+=0.5")
;

let educationText= new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: 2000,
})
    .setTween(txt1)
    .addIndicators()
    .offset(2100)
    .reverse(true)
    .addTo(controller);

let textTarget2 = $('.section2').find('.cloud-text');
let txt2 = new TimelineMax();

txt2
.fromTo(textTarget2, 1, { opacity: 0 }, { opacity: 1 })
.to(textTarget2, 1, { opacity: 0 }, "+=0.5");

let experienceText = new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: 0,
  duration: 2000
})
  .setTween(txt2)
  .addIndicators()
  .offset(5800)
  .reverse(true)
  .addTo(controller);

let textTarget3 = $('.section3').find('.cloud-text');
let txt3 = new TimelineMax();

txt3
.fromTo(textTarget3, 1, { opacity: 0 }, { opacity: 1 })
.to(textTarget3, 1, { opacity: 0 }, "+=0.5");

let projectsText = new ScrollMagic.Scene({
triggerElement: intro,
triggerHook: 0,
duration: 2000
})
    .setTween(txt3)
    .addIndicators()
    .offset(8000)
    .reverse(true)
    .addTo(controller);