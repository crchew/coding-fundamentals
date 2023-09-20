// Create a function that takes in user's birth date in dd/mm/yyyy format, and calculate user's age.
function calculateAge(date) {
    const dateParts = date.split("/");
    const birthDay = parseInt(dateParts[0]);
    const birthMonth = parseInt(dateParts[1]);
    const birthYear = parseInt(dateParts[2]);

    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthYear;

    if (currentDate.getMonth() < birthMonth - 1 || (currentDate.getMonth() === birthMonth - 1 && currentDate.getDate() < birthDay)) {
        age--;
    }

    return age;
}

console.log(calculateAge("20/7/2002"))
console.log(calculateAge("1/1/1979"))

