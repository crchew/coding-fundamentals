const palette = document.querySelector('.palette')

document.addEventListener('keydown',(event) => {
  const pressedKey = event.key

  if (pressedKey === "k" && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    // Perform an action when Command (or Ctrl) + K is pressed
    palette.classList.toggle('fade-out')
    palette.classList.toggle('fade-in')
}
}
)