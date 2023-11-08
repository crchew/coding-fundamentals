// Select the header element
const navbar = document.querySelector('.topnav')

let previousScroll = window.scrollY;

// Hide the navbar when user scrolls past a page height
window.addEventListener('scroll', function(){ 
    let currentScroll = window.scrollY;

    if (previousScroll > currentScroll){
        navbar.classList.remove('scroll'); // Show the navigation
        isNavbarHidden = false 
    } else {
        navbar.classList.add('scroll');  //  Hide the navigation
        isNavbarHidden = true
    } 

    previousScroll = currentScroll
})

// Redisplay navbar when user hovers around the top area

window.addEventListener('mousemove', (e) => {
    let topAreaHeight = 10;

    e.clientY <= topAreaHeight
    ? navbar.classList.remove('scroll') // Show the navigation
    : navbar.classList.add('scroll') // Hide the navigation again after mouse moves away from top area
})