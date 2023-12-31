'use strict'

// SLIDER MENÚ HAMBURGUESA

// Al hacer CLICK en headerButton, le TOGGLE la clase active a header y a headerNav

const header = document.querySelector(".header")
const headerButton = document.querySelector(".header__button")
const headerNav = document.querySelector(".header__nav")

    console.log(header)
    console.log(headerButton)
    console.log(headerNav)

    headerButton.addEventListener("click" , ()=>{
        header.classList.toggle("active")
        headerNav.classList.toggle("active")
    })


// SLIDER HEADER

// Al hacer CLICK en headerDots, le ADD la clase active a slider
// All hacer CLICK en sliderButton, le REMOVE la clase active a slider

const headerDots = document.querySelector(".header__dots")
const slider = document.querySelector(".slider")
const sliderButton = document.querySelector(".slider__button")

    console.log(headerDots)
    console.log(slider)
    console.log(sliderButton)

    headerDots.addEventListener("click" , ()=> slider.classList.add("active"))
    
    sliderButton.addEventListener("click" , ()=> slider.classList.remove("active"))

    
// BOTÓN DEL VIDEO
// Al hacer MOUSEOVER a videoImg,
    // le ADD la clase inactive a videoImg,
        // y le ADD la clase active a videoImg2
// Al hacer MOUSEOUT a videoImg2,
    // le REMOVE la clase active a videoImg2,
        // y le REMOVE la clase inactive a videoImg2
// Al hacer CLICK a videoImg2,
    // le ADD la clase active a lightbox
// Al hacer CLICK a lightbox,
    // le REMOVE la clase active a lightbox

        const videoImg = document.querySelector(".video__img")
        const videoImg2 = document.querySelector(".switch")
        const lightbox = document.querySelector(".lightbox")
        
            console.log(videoImg)
            console.log(videoImg2)
            console.log(lightbox)
        
            videoImg.addEventListener("mouseover" , ()=>{
                videoImg.classList.add("inactive")
                videoImg2.classList.add("active")
            })
            
            videoImg2.addEventListener("mouseout" , ()=>{
                videoImg2.classList.remove("active")
                videoImg.classList.remove("inactive")
            })

            videoImg2.addEventListener("click" , ()=> lightbox.classList.add("active"))

            lightbox.addEventListener("click" , ()=> lightbox.classList.remove("active"))


// SLIDER TESTIMONIALS

// Al hacer CLICK en testDots,
    // a todos los testPeople le REMOVE la clase active,
        // y al testPeople del mismo index le add la clase active

const testDots = document.querySelectorAll(".test__dot")
const testPeople = document.querySelectorAll(".test__people")

    console.log(testDots)
    console.log(testPeople)

testDots.forEach((eachDot , index)=>{
    testDots[index].addEventListener("click" , ()=>{

        testPeople.forEach((eachPeople , index)=> testPeople[index].classList.remove("active"))

        testPeople[index].classList.add("active")
    })
})