const button = document.querySelector('button')
const inputText = document.querySelector('input')
const displayUserName = document.querySelector('#user-name')
const displayUserDesc = document.querySelector('#user-desc')
const avatarImg = document.querySelector('#avatar')
const joinDate = document.querySelector('#join-date')
const profileCard = document.querySelector('.profile-card')

button.addEventListener('click', async(e) => {
    const username = inputText.value; 
    e.preventDefault()

    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();

            displayUserName.textContent = data.name;
            displayUserDesc.textContent = data.bio;
            avatarImg.src = data.avatar_url;

            //convert date data into dd month yyyy format
            const datestring = data.created_at;
            const date = new Date(datestring);

            const year = date.getFullYear();
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'
              ];
            const month = monthNames[date.getMonth()];
            const day = String(date.getDate()).padStart(2, '0');

            const formattedDate = `${day} ${month} ${year}`;

            joinDate.textContent = `Joined at: ${formattedDate}`;

            profileCard.classList.remove('hidden');

        } catch (error) {
            console.error("An error occurred:", error);
        }
    } else {
        console.error("Please enter a username.");
    }
});