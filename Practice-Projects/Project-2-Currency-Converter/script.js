import {APIkey} from "./config.js"

const options = {
	method: 'GET',
	headers: {
        'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': APIkey,
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
};

async function convertCurrency(inputCurrency, outputCurrency, amount){
    try {
        const response = await fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${inputCurrency}&want=${outputCurrency}&amount=${amount}`, options)
        const result = await response.json()
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

convertCurrency('USD', 'MYR', 10)

const currency1 = document.querySelector('#currency1')
const currency2 = document.querySelector('#currency2')
const amount1 = document.querySelector('#amount1')
const amount2 = document.querySelector('#amount2')
const swap = document.querySelector('#swap')
const rate = document.querySelector('#rate')

async function calculate(){
    let firstCurrency = currency1.value
    let secondCurrency = currency2.value
    let amount = amount1.value

    console.log(firstCurrency, secondCurrency, amount)

    let data = await convertCurrency(firstCurrency, secondCurrency, amount)
    console.log("DATA", data)

    let rates = (data.new_amount/data.old_amount)
    console.log(rates)
    let convertedValue = data.new_amount

    rate.innerText = `1${firstCurrency}:${rates.toFixed(4)}${secondCurrency}`
    amount2.value = convertedValue
    console.log('Amount 2 is updated.')
}

amount1.addEventListener('input', calculate)
currency1.addEventListener('change', calculate)
currency2.addEventListener('change', calculate)

swap.addEventListener('click', (e) =>{
    let temporaryVar = currency1.value
    currency1.value = currency2.value
    currency2.value = temporaryVar
    calculate()
})