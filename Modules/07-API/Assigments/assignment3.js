const endpoint = "https://gist.githubusercontent.com/crchew/fe3cfe241258fd4638894c4f1384d3de/raw/253c078293fea3918fa4e0384351cf8f7d40c9b2/gistfile1.txt"

const button = document.querySelector('button')
const userName = document.querySelector('#name')
const userAge = document.querySelector('#age')
const userHobbies = document.querySelector('#hobbies')
const userProfile = document.querySelector('.user-profile')

async function getData(){
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)
    return data
}

button.addEventListener('click', async(e) => {
    e.preventDefault()
    try{
        const userData = await getData()

        userName.textContent = `Name: ${userData.name}`
        userAge.textContent = `Age: ${userData.age}`
        const hobbiesArray = userData.hobbies

        const hobbiesList = hobbiesArray.map(hobby => `<li>${hobby}</li>`).join('');
        userHobbies.innerHTML = `Hobbies:<li>${hobbiesList}</li>`;

        userProfile.classList.remove('hidden')

    } catch{
        return "An error has occurred"
    }
})