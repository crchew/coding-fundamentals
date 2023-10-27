const API = "https://api.thecatapi.com/v1/breeds"
const body = document.querySelector('body')
const profileCard = document.querySelector(".card-container")

async function getCatData(){
    try{
        const response = await fetch(API)
        const data = await response.json()
        
        return catData = data.map((cat) => 
            `<div class="card">
            <img src="https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg" alt="breed-picture" onerror="this.onerror=null; this.src='./missingcat.png'">
            <h3>${cat.name}</h3>
            <p>${cat.description}</p>
            <button type="button">Profile</button>
            </div>`).join('');

    } catch (error){
        console.error('An error occured', error)
        return 'An error occured'
}
}

window.addEventListener('load', async (e) =>{
    e.preventDefault()
    const data = await getCatData();

    profileCard.innerHTML = data;
})

