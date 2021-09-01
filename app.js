//General Event Listener for Displaying Menus
let menu1 = document.querySelector(".menu1");
let menu2 = document.querySelector(".menu2");
let menu3 = document.querySelector(".menu3");
let menu4 = document.querySelector(".menu4");

let menusContainer = document.querySelector(".display-menus-container");
let deliveryMenu = document.querySelector(".display-menu1");
let diningMenu = document.querySelector(".display-menu2");
let drinkMenu = document.querySelector(".display-menu3");
let sushiMenu = document.querySelector(".display-menu4");

let closeMenu1 = document.querySelector(".close-delivery-menu");
let closeMenu2 = document.querySelector(".close-dining-menu");
let closeMenu3 = document.querySelector(".close-drink-menu");
let closeMenu4 = document.querySelector(".close-sushi-menu");

menu1.addEventListener("click", ()=>{
    showAllMenus(); 
    deliveryMenu.style.display = "block";
    diningMenu.style.display = "none";
    drinkMenu.style.display = "none";
    sushiMenu.style.display = "none";
    
});
menu2.addEventListener("click", ()=>{
    showAllMenus(); 
    diningMenu.style.display = "block";
    deliveryMenu.style.display = "none";
    drinkMenu.style.display = "none";
    sushiMenu.style.display = "none";
});
menu3.addEventListener("click", ()=>{
    showAllMenus(); 
    drinkMenu.style.display = "block";
    diningMenu.style.display = "none";
    deliveryMenu.style.display = "none";
    sushiMenu.style.display = "none";
});
menu4.addEventListener("click", ()=>{
    showAllMenus(); 
    sushiMenu.style.display = "block";
    diningMenu.style.display = "none";
    drinkMenu.style.display = "none";
    deliveryMenu.style.display = "none";
});

function showAllMenus (){
    menusContainer.style.display = "flex";
    mobileHeader.style.display = "none";
}
function hideAllMenus (){
    menusContainer.style.display = "none";
    if(window.innerWidth < 840){
        mobileHeader.style.display = "flex";
    }
    else if(window.innerWidth >= 840){
        mobileHeader.style.display = "none";
    }
}

closeMenu1.addEventListener("click", ()=>{hideAllMenus()});
closeMenu2.addEventListener("click", ()=>{hideAllMenus()});
closeMenu3.addEventListener("click", ()=>{hideAllMenus()});
closeMenu4.addEventListener("click", ()=>{hideAllMenus()});



//Mobile Menu Event Listener 
let mobileHeader = document.querySelector(".header");
let exitMobileMenuBtn = document.querySelector(".exit-mobile");
let mobileMenu = document.querySelector(".mobile-menu");


exitMobileMenuBtn.addEventListener("click", ()=>
{
    mobileMenu.style.left = -5000 + "px"; 
    mobileHeader.style.display = "flex";
});

let bars = document.querySelector(".bars");

bars.addEventListener("click", ()=>{
    mobileMenu.style.left = 0 + "px";
    mobileHeader.style.display = "none";

});

//Control Display of Mobile Menu
mobileHome = document.querySelector(".mobile-home");
mobileHome.addEventListener("click", ()=>{
    mobileMenu.style.left = -5000 + "px";
    mobileHeader.style.display = "flex";
    
});
mobileAbout = document.querySelector(".mobile-about");
mobileAbout.addEventListener("click", ()=>{
    mobileMenu.style.left = -5000 + "px";
    mobileHeader.style.display = "flex";
});
mobileMenuLink = document.querySelector(".mobile-menuop");
mobileMenuLink.addEventListener("click", ()=>{
    mobileMenu.style.left = -5000 + "px";
    mobileHeader.style.display = "flex";
});
mobileReserve = document.querySelector(".mobile-reserve");
mobileReserve.addEventListener("click", ()=>{
    mobileMenu.style.left = -5000 + "px";
    mobileHeader.style.display = "flex";
});
//This function animates the menus on the tablet/laptop view ***
const checkScreenResize = (windowSize) =>{

    
    let durr = 5;
    let menuFloat = gsap.timeline(); //startHere
    
    if(windowSize){

        //Animate the floating menus if the screen size changes from mobile to tablet/desktop ***
        function reportWindowSize() {

            if(window.innerWidth >= 840){
                checkScreenResize(true);
            } else if (window.innerWidth < 840){
                menuFloat.pause();
            }
        }

        window.addEventListener('resize', reportWindowSize);

        menuFloat.fromTo('.menu1', {y: 0}, {
            y: 20,
            duration: durr,
            yoyo: true,
            repeat: -1
        }).fromTo('.menu3', {y: 0}, {
            y: 20,
            duration: durr,
            yoyo: true,
            repeat: -1,
        }, 0).fromTo('.menu2', {y: 0}, {
            y: -20,
            duration: durr,
            yoyo: true,
            repeat: -1
        }, 0).fromTo('.menu4', {y: 0}, {
            y: -20,
            duration: durr,
            yoyo: true,
            repeat: -1
        },0);


    } else {
        menuFloat.pause();
    }
    
}

//Animate the floating menus if the screen size changes from mobile to tablet/desktop ***
function reportWindowSize() {
    if(window.innerWidth >= 840){
        mobileMenu.style.left = -5000 + "px";
        mobileHeader.style.display = "none";
        checkScreenResize(true);
    } else if (window.innerWidth < 840){
        mobileHeader.style.display = "flex";
        checkScreenResize(false);
    }
  }

window.addEventListener('resize', reportWindowSize);

//Animate the floating menus if the screen size isn't mobile ***
function checkScreen(){
    if(window.innerWidth >= 840){
        checkScreenResize(true);
    } else if (window.innerWidth < 840){
        mobileMenu.style.left = -5000 + "px";
        checkScreenResize(false);
    }
}
window.addEventListener("load", checkScreen);

//Individual Element Animations ***
//gsap.fromTo(".midline", {x: -1000, opacity: 0}, {x: 0, duration: 1.4, opacity: 1}); //Fly in text
gsap.fromTo(".banner-text", {opacity: 0}, {opacity: 1, duration: 6}); //Fade in hero banner
gsap.fromTo('.logo', {x: -10}, {x: 0, duration: 5, yoyo: true, repeat: -1}); //Animate Logo(HEADER, mobile)

//Setup Scroll Change for the Description Section ***
var controller = new ScrollMagic.Controller();
var tl1 = new TimelineMax();
tl1.fromTo('.desc-wrapper', {y: 800, opacity: -5}, {y: 0, opacity: 1, duration: 2})

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0
})
//   .addIndicators({
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white",
//     indent: 5
//   })
  .setTween(tl1)
  .addTo(controller);

//Setup Scroll Change for the Description Section ***
var controller = new ScrollMagic.Controller();
tl2 = new TimelineMax();
tl2.fromTo('.midline', {x: -5000, opacity: 0}, {x: 0, duration: 1.4, opacity: 1});

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  triggerHook: 0
})
//   .addIndicators({
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white",
//     indent: 5
//   })
  .setTween(tl2)
  .addTo(controller);


/*Setup Page Transitions
const loadingEnter = () =>{
    let startHere = gsap.timeline();
    startHere.fromTo('.view-menu', {
        y: 0
    }, {y: "100%"
        ,
        duration: 2
    })
}
const loadingLeave = () =>{
    let startHere = gsap.timeline();
    startHere.fromTo('.banner', {
        x: "100%"
    }, {x: 0
        ,
        duration: 1
    })
}


const delay = (n)=>{
    return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            }, n)
        })
};

barba.init({
    sync: true,
    transitions: [
        {   //start - object inside of transition array
            name: 'page-wipe',
            async leave(data){
                const done = this.async();
                
                await delay(2000);
                done();
                let startHere = gsap.timeline();
                startHere.to('.view-menu', {
                    y: "100%"
                });
            },
            async enter(data){
                let startHere = gsap.timeline();
                startHere.to('.view-menu', {
                    y: "100%"
                });
                console.log('entering Page Animation');
            }
        }//End - object inside of transition array
    ]//End Transitions Key



})
/*
Use a website link to get information

if the info comes back the way you want, run a function that says it was completed
if the infor comes back NOT the way you want, run a function that says there was an error and it was not completed. 

after we know whehter it was completed or rejected, save the info in an object.

use the object to do something if it was completed or to do something if it was rejected

let myName = 'John';

let myPromiseObject = new Promise(
    (resolve, reject) =>{
            if(myName == 'roger')
                resolve(myName);
            else
                reject(myName)
    }
);

myPromiseObject
.then(
        ()=>{console.log("it worked - hi roger")}
)
.catch(
        ()=>{console.log("it failed - who are you???")}
    )


async function hello(){
    this will automatically return a promise.
}
const sing = async (songGuess)=>{
    this will automatically return a promise. (you don't have to say "return a promise");
    if you type "RETURN " + SOME VALUE, the promise will be considered resoved. 
    if you THROW AN ERROR, the promise will be considered rejected.

    example:
    if songGuess == true
    return "its working! :) "
    else 
    throw "it broke! :( "
}

sing("a whole new world")
    .then(
        (correct) => {
            console.log("that's the right song!" + correct)
        }
    )
    .catch(
        (incorrect) => {
            console.log("that's the wrong song!" + incorrect)
        }
    )


    AWAIT
    Waits for the promise to be resolved before moving onto the next thing.
*/