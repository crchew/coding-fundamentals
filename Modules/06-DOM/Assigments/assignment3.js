const regButton = document.createElement('button');
const regText = document.createTextNode('Register');
const popupPanel = document.querySelector('.slide-over-container')
const closeButton = document.querySelector('.close-button')
const bgBackdrop = document.querySelector('.bg-backdrop')

document.body.appendChild(regButton)
regButton.appendChild(regText)
regButton.classList.add('reg-button')

// hide backdrop and side panel
bgBackdrop.classList.add('hidden')
popupPanel.classList.add('slide-out')

regButton.addEventListener('click',(event) => {
    event.preventDefault;
    // side panel slides in
    popupPanel.classList.toggle('slide-in')
    popupPanel.classList.toggle('slide-out')
    // backdrop color change without sliding effect
    bgBackdrop.classList.toggle('hidden')
    bgBackdrop.classList.toggle('visible')
})


closeButton.addEventListener('click', (event) => {
    // side panel collapses
    popupPanel.classList.toggle('slide-in')
    popupPanel.classList.toggle('slide-out')
    // backdrop color change without sliding effect
    bgBackdrop.classList.toggle('hidden')
    bgBackdrop.classList.toggle('visible')
})
