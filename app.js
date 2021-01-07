const intro = document.querySelector('.intro');
const intro2 = document.querySelector('.intro-2');
const animation = document.querySelector('.ani-figure')
const text = intro.querySelector('h1');
const text2 = intro.querySelector('h2');
const river = document.querySelector('.river');
const paperPlane = $('.paper-plane')
let isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);
const height = $(window).height();
const width = $(window).width();
const API_KEY = "cfc258c75e1da2149c33daffd07a911d";

$(document).ready(() => {
    getWeather();
});

function getWeather() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition( function(position) { 
            // console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
            console.log(position.coords);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            $.ajax({
                type: "GET",
                url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
                success: function(response) {
                    console.log(response);
                }
            })
        });
    } else{
        console.log("Browser doesn't support geolocation!");
    }
}

window.addEventListener('resize', () => {
    console.log(`H: ${window.innerHeight}`, `W: ${window.innerWidth}`)
    console.log(height, width)
})

const riverSVG = $('.river');
const riverPos = $('.river').offset();
const storySVG = $('.story');
const storyPos = $('.story').offset();

if (screen.width > 1024 ) {

    // console.log(config.apiKey, "key");
    console.log(isMobile ? "Mobile" : "Desktop")
    const storyHeight = $('.story').height();
    const storyWidth = $('.story').width();
    const anifigureHeight = $('.ani-figure');
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    
    $(".mobile").hide();

    const controller = new ScrollMagic.Controller({
        // container: "#example-wrapper"
    });

    // $('.paper-plane').offset({top: storyHeight + storyPos.top * .5, left: storyPos.left * 1.3})


    $('.paper-plane').offset({top: (storySVG.height() * .9) + storyPos.top, left: riverPos.left})
    
    const flightPath = {
        //curviness of 0 is rigid motion
        curviness: 1.25,
        autoRotate: true,
        values: [
            { x: storyWidth * .185, y: -(storyHeight * .01) },
            { x: storyWidth * .8, y: -(storyHeight * 0.2) },
            { x: storyWidth * .1, y: -(storyHeight * .6) },
            { x: storyWidth * .65, y: -(storyHeight * 0.68) },
        ]
    };
    
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
    duration: 2200,
    })
        .setTween(tl1)
        .addIndicators()
        .offset(2000)
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
      duration: 2200
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
    duration: 2200
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
    
    // $(".indicator").hide();
        
} else if (screen.width <= 1025 && screen.width >= 767) {
    console.log(isMobile ? "Mobile" : "Desktop")
    const storyPos = $('.story').position();
    const storyHeight = $('.story').height();
    const storyWidth = $('.story').width();
    const aniFigure = $('.ani-figure')
    const aniFigureH = aniFigure.height();
    const anifigureHeight = $('.ani-figure')
    const treeTrunk = $(".tree-trunk")
    const treeTrunkPos = treeTrunk.position();
    console.log(treeTrunk.position(), "Tree trunk")
    
    console.log(aniFigure)
    console.log(screen.width, screen.height, "Screen W and H")
    console.log(`Story H: ${storyHeight}, Story W: ${storyWidth}, Story Pos: ${storyPos.top}`)
    console.log($('.story').position(), 'Story position')
    console.log($('.story').offset(), 'Story offset')

    $(".desktop").hide();
    console.log("Mobile W", screen.width * .185)
    console.log("Mobile H", screen.height * .014)

 const controller = new ScrollMagic.Controller({
        // container: "#example-wrapper"
    });

    // $('.paper-plane-mobile').offset({top: treeTrunkPos.top + treeTrunkPos.top * 0.05, left: treeTrunkPos.left - treeTrunkPos.left * 0.6})
    // $('.paper-plane-mobile').offset({top: treeTrunkPos.top * 1.05 , left: storyPos.left})
    // $('.paper-plane-mobile').offset({top: screen.height * .83 , left: screen.width * .08});
    $('.paper-plane-mobile').offset({top: storyHeight - $('.paper-plane-mobile').height() * 1.5, left: ($('.story').position().left)});
    // $('.paper-plane-mobile').offset({top: (storySVG.height() * .9) + storyPos.top, left: riverPos.left})
    
    const flightPath = {
        //curviness of 0 is rigid motion
        curviness: 1.25,
        autoRotate: true,
        values: [
            { x: storyWidth * .185, y: -(storyHeight * .01) },
            { x: storyWidth * .83, y: -(storyHeight * 0.08) },
            { x: storyWidth * .1, y: -(storyHeight * .65) },
            { x: storyWidth * .78, y: -(storyHeight * 0.65) },
            // { x: 500, y: -200},
            // { x: 100, y: -350},
            // { x: 550, y: -500},
        ]
    }
    
    const tween = new TimelineLite();
    
    tween.add(
        TweenLite.to('.paper-plane-mobile', 1, {
            bezier: flightPath,
            ease: Power1.easeInOut
        })
    );
    
    let scene = new ScrollMagic.Scene({
        triggerElement: intro2,
        duration: 12000,
        triggerHook: 0
    })
        .setTween(tween)
        .addIndicators()
        .setPin('.intro-2')
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
    triggerElement: intro2,
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
      triggerElement: intro2,
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
    triggerElement: intro2,
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
    triggerElement: intro2,
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
    triggerElement: intro2,
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
      triggerElement: intro2,
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
    triggerElement: intro2,
    triggerHook: 0,
    duration: 2000
    })
        .setTween(txt3)
        .addIndicators()
        .offset(8000)
        .reverse(true)
        .addTo(controller);
} else if (screen.width < 768) {
    console.log(isMobile ? "Mobile" : "Desktop")
    const storyPos = $('.story').position();
    const storyHeight = $('.story').height();
    const storyWidth = $('.story').width();
    const aniFigure = $('.ani-figure')
    const aniFigureH = aniFigure.height();
    const anifigureHeight = $('.ani-figure')
    const treeTrunk = $(".tree-trunk")
    const treeTrunkPos = treeTrunk.position();
    console.log(treeTrunk.position(), "Tree trunk")
    
    console.log(aniFigure)
    console.log(screen.height, screen.width, "Screen W and H")
    console.log(`Story H: ${storyHeight}, Story W: ${storyWidth}, Story Pos: ${storyPos.top}`)
    console.log($('.story').position(), 'Story position')

    $(".desktop").hide();
    console.log("Mobile W", screen.width * .185)
    console.log("Mobile H", screen.height * .014)

 const controller = new ScrollMagic.Controller({
        // container: "#example-wrapper"
    });

    // $('.paper-plane-mobile').offset({top: treeTrunkPos.top + treeTrunkPos.top * 0.05, left: treeTrunkPos.left - treeTrunkPos.left * 0.6})
    $('.paper-plane-mobile').offset({top: storyHeight * 1.1, left: storyPos.left})
    
    const flightPath = {
        //curviness of 0 is rigid motion
        curviness: 1.25,
        autoRotate: true,
        values: [
            { x: storyWidth * .185, y: -(storyHeight * .01) },
            { x: storyWidth * .85, y: -(storyHeight * 0.08) },
            { x: storyWidth * .02, y: -(storyHeight * .70) },
            { x: storyWidth * .70, y: -(storyHeight * 0.7) },
            // { x: 500, y: -200},
            // { x: 100, y: -350},
            // { x: 550, y: -500},
        ]
    }
    
    const tween = new TimelineLite();
    
    tween.add(
        TweenLite.to('.paper-plane-mobile', 1, {
            bezier: flightPath,
            ease: Power1.easeInOut
        })
    );
    
    let scene = new ScrollMagic.Scene({
        triggerElement: intro2,
        duration: 12000,
        triggerHook: 0
    })
        .setTween(tween)
        .addIndicators()
        .setPin('.intro-2')
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
    triggerElement: intro2,
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
      triggerElement: intro2,
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
    triggerElement: intro2,
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
    triggerElement: intro2,
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
    triggerElement: intro2,
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
      triggerElement: intro2,
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
    triggerElement: intro2,
    triggerHook: 0,
    duration: 2000
    })
        .setTween(txt3)
        .addIndicators()
        .offset(8000)
        .reverse(true)
        .addTo(controller);
}



// if (isMobile) {
//     var myScroll = new IScroll('#example-wrapper',
//             {
//                 // don't scroll horizontal
//                 scrollX: false,
//                 // but do scroll vertical
//                 scrollY: true,
//                 // show scrollbars
//                 scrollbars: true,
//                 // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
//                 // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
//                 useTransform: false,
//                 // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
//                 useTransition: false,
//                 // set to highest probing level to get scroll events even during momentum and bounce
//                 // requires inclusion of iscroll-probe.js
//                 probeType: 3,
//                 // pass through clicks inside scroll container
//                 click: true 
//             }
//         );
			
// }

// controller.scrollPos(function () {
//     return -myScroll.y;
// });

// // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
// myScroll.on("scroll", function () {
//     controller.update(true);
// });

