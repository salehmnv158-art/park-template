let navbarlink = document.querySelector('.nav-bar-link');
navbarlink.addEventListener('mouseenter',()=>{
    navbarlink.classList.add('nav-bar-link-active')
    navbarlink.classList.remove('nav-bar-link-passive')
})
navbarlink.addEventListener('mouseleave',()=>{
    navbarlink.classList.remove('nav-bar-link-active')
    navbarlink.classList.add('nav-bar-link-passive')
})

let navtextlink = document.querySelector('.nav-text-link');
navtextlink.addEventListener('mouseenter',()=>{
    navtextlink.classList.add('nav-text-link-active')
    navtextlink.classList.remove('nav-text-link-passive')
})
navtextlink.addEventListener('mouseleave',()=>{
    navtextlink.classList.remove('nav-text-link-active')
    navtextlink.classList.add('nav-text-link-passive')
})

let bodyaboutlink = document.querySelector('.body-about-us-link');
bodyaboutlink.addEventListener('mouseenter',()=>{
    bodyaboutlink.classList.add('body-about-us-link-active')
    bodyaboutlink.classList.remove('body-about-us-link-passive')
})
bodyaboutlink.addEventListener('mouseleave',()=>{
    bodyaboutlink.classList.remove('body-about-us-link-active')
    bodyaboutlink.classList.add('body-about-us-link-passive')
})

let bodyprojectlink = document.querySelector('.body-projects-foot-link');
bodyprojectlink.addEventListener('mouseenter',()=>{
    bodyprojectlink.classList.add('body-projects-foot-link-active')
    bodyprojectlink.classList.remove('body-projects-foot-link-passive')
})
bodyprojectlink.addEventListener('mouseleave',()=>{
    bodyprojectlink.classList.remove('body-projects-foot-link-active')
    bodyprojectlink.classList.add('body-projects-foot-link-passive')
})

let footerlink1 = document.querySelector('.footer-top-services-link-1');
footerlink1.addEventListener('mouseenter',()=>{
    footerlink1.classList.add('footer-top-services-link-1-active')
    footerlink1.classList.remove('footer-top-services-link-1-passive')
})
footerlink1.addEventListener('mouseleave',()=>{
    footerlink1.classList.remove('footer-top-services-link-1-active')
    footerlink1.classList.add('footer-top-services-link-1-passive')
})

let footerlink2 = document.querySelector('.footer-top-services-link-2');
footerlink2.addEventListener('mouseenter',()=>{
    footerlink2.classList.add('footer-top-services-link-2-active')
    footerlink2.classList.remove('footer-top-services-link-2-passive')
})
footerlink2.addEventListener('mouseleave',()=>{
    footerlink2.classList.remove('footer-top-services-link-2-active')
    footerlink2.classList.add('footer-top-services-link-2-passive')
})

let footerlink3 = document.querySelector('.footer-top-services-link-3');
footerlink3.addEventListener('mouseenter',()=>{
    footerlink3.classList.add('footer-top-services-link-3-active')
    footerlink3.classList.remove('footer-top-services-link-3-passive')
})
footerlink3.addEventListener('mouseleave',()=>{
    footerlink3.classList.remove('footer-top-services-link-3-active')
    footerlink3.classList.add('footer-top-services-link-3-passive')
})

let footerlink4 = document.querySelector('.footer-top-services-link-4');
footerlink4.addEventListener('mouseenter',()=>{
    footerlink4.classList.add('footer-top-services-link-4-active')
    footerlink4.classList.remove('footer-top-services-link-4-passive')
})
footerlink4.addEventListener('mouseleave',()=>{
    footerlink4.classList.remove('footer-top-services-link-4-active')
    footerlink4.classList.add('footer-top-services-link-4-passive')
})

let footerlink5 = document.querySelector('.footer-top-services-link-5');
footerlink5.addEventListener('mouseenter',()=>{
    footerlink5.classList.add('footer-top-services-link-5-active')
    footerlink5.classList.remove('footer-top-services-link-5-passive')
})
footerlink5.addEventListener('mouseleave',()=>{
    footerlink5.classList.remove('footer-top-services-link-5-active')
    footerlink5.classList.add('footer-top-services-link-5-passive')
})

let footerlocation = document.querySelector('.footer-top-contact-location');
footerlocation.addEventListener('mouseenter',()=>{
    footerlocation.classList.add('footer-top-contact-location-active')
    footerlocation.classList.remove('footer-top-contact-location-passive')
})
footerlocation.addEventListener('mouseleave',()=>{
    footerlocation.classList.remove('footer-top-contact-location-active')
    footerlocation.classList.add('footer-top-contact-location-passive')
})

let footernumber = document.querySelector('.footer-top-contact-number');
footernumber.addEventListener('mouseenter',()=>{
    footernumber.classList.add('footer-top-contact-number-active')
    footernumber.classList.remove('footer-top-contact-number-passive')
})
footernumber.addEventListener('mouseleave',()=>{
    footernumber.classList.remove('footer-top-contact-number-active')
    footernumber.classList.add('footer-top-contact-number-passive')
})

let footeremail = document.querySelector('.footer-top-contact-email');
footeremail.addEventListener('mouseenter',()=>{
    footeremail.classList.add('footer-top-contact-email-active')
    footeremail.classList.remove('footer-top-contact-email-passive')
})
footeremail.addEventListener('mouseleave',()=>{
    footeremail.classList.remove('footer-top-contact-email-active')
    footeremail.classList.add('footer-top-contact-email-passive')
})

let altbarsame = document.querySelectorAll('.alt-bar-same');

for (let i = 0; i < altbarsame.length; i++) {
    altbarsame[i].addEventListener('mouseenter',()=>{
        altbarsame[i].classList.add('alt-bar-active')
        altbarsame[i].classList.remove('alt-bar-passive')
    })
    altbarsame[i].addEventListener('mouseleave',()=>{
        altbarsame[i].classList.remove('alt-bar-active')
        altbarsame[i].classList.add('alt-bar-passive')
    })
}

let altbarright = document.querySelector('.alt-bar-right')
let navactbtn = document.querySelector('.altbar-activate-button')
let navdeactbtn = document.querySelector('.altbar-deactivate-button')

navactbtn.addEventListener('click', ()=>{
    navactbtn.classList.add('display-none');
    navdeactbtn.classList.remove('display-none');
    altbarright.classList.remove('display-none');
})

navdeactbtn.addEventListener('click', ()=>{
    navdeactbtn.classList.add('display-none');
    navactbtn.classList.remove('display-none');
    altbarright.classList.add('display-none');
})