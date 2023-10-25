const quoteDisplay = document.querySelector('#quote-display')
const buttonSubmit = document.querySelector('button')

const endpoint = "https://api.quotable.io/random"

async function getQuotes(){
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)
    return data.content;
}

buttonSubmit.addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        const quote = await getQuotes();
        quoteDisplay.textContent = quote;
    } catch (error) {
        console.error("An error occurred:", error);
    }
})

