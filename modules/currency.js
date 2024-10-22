import {exchangeRates} from './api.js'

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const baseCurrency = document.getElementById('base-currency').value;
    const tagetCurrency = document.getElementById('target-currency').value;

    if (isNaN(amount) || !baseCurrency  || !tagetCurrency) {
        alert ('Please enter a valid number amount!');
        return;
    }

    try {
        const rate = await exchangeRates( baseCurrency, tagetCurrency );
        const convertedAmount = amount * rate ;
        document.querySelector('.result').textContent = `${amount} of ${baseCurrency} is equal to ${convertedAmount} of ${tagetCurrency}`;
    } catch (err) {
        console.error('Error accurred during fetching exchange rate', err);
        alert('Please try again later.');
    }
}

document.getElementById('convert-button').addEventListener('click', convertCurrency);