// Function to open the popup
function openPopup() {
    const popupMsg = document.querySelector('.notification');
    popupMsg.classList.remove('hidden');
    popupMsg.classList.add('show');
  }
  
// Function to close the popup
function closePopup() {
const popupMsg = document.querySelector('.notification');
popupMsg.classList.remove('show');
popupMsg.classList.add('hidden');
}

// Add event listeners to specific elements
const openButton = document.querySelector('.add__button');
openButton.addEventListener("click", openPopup);

const closeButton = document.querySelector('.cta__button');
closeButton.addEventListener("click", closePopup);




