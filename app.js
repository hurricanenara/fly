
const API_KEY = "cfc258c75e1da2149c33daffd07a911d";

$(document).ready(() => {
    const intro = document.querySelector('.intro');
    const intro2 = document.querySelector('.intro-2');
    const plane = $(".paper-plane");
    const riverPos = $('.river').offset();
    const storySVG = $('.story');
    const storyPos = $('.story').offset();
    const storyHeight = $('.story').height();
    const storyWidth = $('.story').width();
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const cloudCircle = $('.cloud-circle');
    const cloudText = $('.cloud-text');
    const socialList = [$('.fa-linkedin'), $('.fa-angellist'), $('.fa-github'), $('.fa-file-pdf')];
    let flightPath;
    let isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);
    const basicClouds = $('.cloud-group');
    let isiPad = navigator.userAgent.match(/iPad|surfaceDuo/i) !== null;
    const startPoint = $('.start-point').position();
    // if (!isMobile || !isiPad) basicClouds.forEach(basicCloud => basicCloud.css('display', 'none'))
    if (isiPad) {
        // let offsetTop = screenHeight * .1;
        // let offsetLeft = screenWidth * .35;
        // cloudCircle.offset({top: -offsetTop, left: -offsetLeft});
        // cloudText.offset({top: screenHeight * .36});
        // console.log(cloudCircle.position());
        // console.log(screenHeight * .45)
        socialList.every(icon => icon.css('fontSize', 50));
        console.log("iPad")
        flightPath = {
            //curviness of 0 is rigid motion
            curviness: 1.25,
            autoRotate: true,
            values: [
                { x: storyWidth * .185, y: -(storyHeight * .01) },
                { x: storyWidth * .7, y: -(storyHeight * 0.2) },
                { x: storyWidth * .1, y: -(storyHeight * .6) },
                { x: storyWidth * .68, y: -(storyHeight * .68) },
            ]
        };
        storySVG.offset({top: screenHeight * .08})
        storySVG.width(screenWidth * .95);
        plane.width(78).height(78);
        plane.offset({top: startPoint.top, left: startPoint.left}).width(78).height(78)
        console.log(plane.position());
        basicClouds.width(screenWidth).height(screenWidth).offset({top: screenHeight * .15, left: screenWidth * .12})
        console.log(basicClouds.height())
    }

    if (isMobile || screenWidth < 450) {
        cloudCircle.offset({top: -screenHeight * .35});
        console.log(basicClouds)
        // cloudCircle.width(300).height(300);
        socialList.every(icon => icon.css('fontSize', 30))
        console.log("isMobile");
        plane
        .width(45).height(45)
        .offset({top: startPoint.top + (screenHeight * .11), left: startPoint.left});

        flightPath = {
            //curviness of 0 is rigid motion
            curviness: 1.25,
            autoRotate: true,
            values: [
                { x: storyWidth * .185, y: -(storyHeight * .01) },
                { x: storyWidth * .7, y: -(storyHeight * 0.2) },
                { x: storyWidth * .1, y: -(storyHeight * .6) },
                { x: storyWidth * .68, y: -(storyHeight * .68) },
            ]
        };

        storySVG.offset({top: screenHeight * .2})
        storySVG.width(screenWidth * .95)
        // plane.offset({top: storySVG.height()});

        // .offset({top: (startPoint.top) + (screenHeight * .2), left: riverPos.left});
        // plane.offset({top: (storySVG.height() * .9) + storyPos.top, left: riverPos.left});
    } else if (!isMobile && !isiPad) {
        flightPath = {
            //curviness of 0 is rigid motion
            curviness: 1.25,
            autoRotate: true,
            values: [
                { x: storyWidth * .185, y: -(storyHeight * .01) },
                { x: storyWidth * .7, y: -(storyHeight * 0.2) },
                { x: storyWidth * .1, y: -(storyHeight * .6) },
                { x: storyWidth * .55, y: -(storyHeight * 0.7) },
            ]
        };
        console.log(startPoint, 'startPoint')
        // plane.offset({top: (storySVG.height() * .9) + storyPos.top, left: riverPos.left});
        plane.offset({top: startPoint.top, left: startPoint.left});
    }
    // import initWeather from './snow.js';
    
    window.addEventListener('resize', () => {
        // console.log(`H: ${window.innerHeight}`, `W: ${window.innerWidth}`)
        // console.log(height, width);
        // console.log("reload called")
        // this.location.reload();
    })
    

    
        // console.log(config.apiKey, "key");
        // console.log(isMobile ? "Mobile" : "Desktop")

    
        const controller = new ScrollMagic.Controller({
            // container: "#example-wrapper"
        });
    
        // $('.paper-plane').offset({top: storyHeight + storyPos.top * .5, left: storyPos.left * 1.3})
    
    
        
        
        // flightPath = {
        //     //curviness of 0 is rigid motion
        //     curviness: 1.25,
        //     autoRotate: true,
        //     values: [
        //         { x: storyWidth * .185, y: -(storyHeight * .01) },
        //         { x: storyWidth * .7, y: -(storyHeight * 0.2) },
        //         { x: storyWidth * .1, y: -(storyHeight * .6) },
        //         { x: storyWidth * .55, y: -(storyHeight * 0.7) },
        //     ]
        // };
        
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
            // .addIndicators()
            .setPin('.intro')
            .addTo(controller);
        
        // scene.on('update', e => {
        //     console.log(e.scrollPos)
        //     if (e.scrollPos > 4000) {
        //         $('.education').remove()
        //     }
        // })
        
        let target1 = (isMobile || isiPad)? $('.intro').find('.basic-cloud') : $('.section1').find('.cloud-circle');
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
            // .addIndicators()
            .offset(1500)
            .reverse(true)
            .addTo(controller);
        
        let target2 = (isMobile || isiPad)? $('.intro').find('.basic-cloud') : $('.section2').find('.cloud-circle');
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
        //   .addIndicators()
          .offset(5500)
          .reverse(true)
          .addTo(controller);
        
        let target3 = (isMobile || isiPad)? $('.intro').find('.basic-cloud') : $('.section3').find('.cloud-circle');
        let tl3 = new TimelineMax();
        
        tl3
        .fromTo(target3, 1, { opacity: 0 }, { opacity: 0.94 })
        .to(target3, 1, { opacity: 0 }, "+=0.5");
        
        let projects = new ScrollMagic.Scene({
        triggerElement: intro,
        triggerHook: 0,
        duration: 2200
        })
            .on("enter", () =>  $('.projects-grid a').css('pointer-events', 'auto'))
            // .on("enter", () =>  $('.paper-plane').css('z-index', 0))
            .on("leave", () => $('.projects-grid a').css('pointer-events', 'none'))
            // .on("leave", () =>  $('.paper-plane').css('z-index', 1))
            .setTween(tl3)
            // .addIndicators()
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
            // .addIndicators()
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
            // .addIndicators()
            .offset(1500)
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
        //   .addIndicators()
          .offset(5500)
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
            // .addIndicators()
            .offset(8000)
            .reverse(true)
            .addTo(controller);

})

/*!
// Snow.js - v0.0.3
// kurisubrooks.com
*/

// Amount of Snowflakes
var snowMax = 150;

// Snowflake Colours
var snowColor = ["#DDD", "#EEE"];
var rainColor = ["#4b688b", "rgba(28, 99, 186, 0.77)"];

// Snow Entity
var snowEntity = "&#x2022;";
var rainEntity = "&#x7c;";
var entity;

// Falling Velocity
var snowSpeed = 0.75;
var rainSpeed = 3.75;

// Minimum Flake Size
var snowMinSize = 16;

// Maximum Flake Size
var snowMaxSize = 28;

// Refresh Rate (in milliseconds)
var snowRefresh = 50;

// Additional Styles
var snowStyles = "z-index: 5; cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

var weatherWindow = document.querySelector(".weather");

var snow = [],
	pos = [],
	coords = [],
	lefr = [],
	marginBottom,
	marginRight;

function randomise(range) {
	rand = Math.floor(range * Math.random());
	return rand;
}

function initWeather(entityColor, entitySpeed, entity) {
    entitySpeed === 0.75 ? entity = "&#x2022;" : "&#x7c;";
	var snowSize = snowMaxSize - snowMinSize;
	marginBottom = document.body.scrollHeight - 5;
	marginRight = document.body.clientWidth - 15;

	for (i = 0; i <= snowMax; i++) {
		coords[i] = 0;
		lefr[i] = Math.random() * 15;
		pos[i] = 0.03 + Math.random() / 10;
		snow[i] = document.getElementById("flake" + i);
		// snow[i].style.fontFamily = "inherit";
		snow[i].size = randomise(snowSize) + snowMinSize;
		snow[i].style.fontSize = snow[i].size + "px";
		snow[i].style.color = entityColor[randomise(entityColor.length)];
		snow[i].style.zIndex = 1000;
		snow[i].sink = entitySpeed * snow[i].size / 5;
		snow[i].posX = randomise(marginRight - snow[i].size);
		snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
		snow[i].style.left = snow[i].posX + "px";
		snow[i].style.top = snow[i].posY + "px";
	}

	moveSnow();
}

function resize() {
	marginBottom = document.body.scrollHeight - 5;
	marginRight = document.body.clientWidth - 15;
}

function moveSnow() {
	for (i = 0; i <= snowMax; i++) {
		coords[i] += pos[i];
		snow[i].posY += snow[i].sink;
		snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
		snow[i].style.top = snow[i].posY + "px";

		if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
			snow[i].posX = randomise(marginRight - snow[i].size);
			snow[i].posY = 0;
		}
	}

	setTimeout("moveSnow()", snowRefresh);
}

function getWeather() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition( function(position) { 
            // console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            $.ajax({
                type: "GET",
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
                success: function(response) {
                    const tempC = response.main.temp;
                    const tempF = (tempC * (9/5)) + 32;
                    const iconId = response.weather[0].icon;
                    weatherId = response.weather[0].id;
                    weatherDesc = response.weather[0].main;
                    const weatherImage = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
                    if (weatherDesc) {
                        // initWeather(snowColor, snowSpeed);
                        snowEntity = "&#x7c;";
                        document.querySelector(".weatherTemp").innerHTML += `<img src="${weatherImage}" alt="">`
                        + `<div>${tempF.toFixed(1)}&#8457;</div>`;
                        
                    }
                    // if (weatherId < 600 && weatherId < 700) initWeather();
                }
            })
        });
    } else {
        console.log("Browser doesn't support geolocation");
    }
}

// for (i = 0; i <= snowMax; i++) {
//     document.write("<span id='flake" + i + "' style='" + snowStyles + "position:fixed;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
// }






// window.addEventListener('resize', resize);
// window.addEventListener('load', initWeather);
window.addEventListener('load', getWeather);
// window.addEventListener('load', render);
// $(window).bind('resize', function(e) {
//     console.log("resize called")
//   if (window.RT) clearTimeout(window.RT);
//   window.RT = setTimeout(function()
//   {
//     this.location.reload(false); /* false to get page from cache */
//   }, 100);
// });