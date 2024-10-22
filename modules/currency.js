import exchangeRates from './api.js'

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const baseCurrency = document.getElementById('base-currency').value;
    const targetCurrency = document.getElementById('target-currency').value;

    if (isNaN(amount) || !baseCurrency  || !targetCurrency) {
        alert ('Please enter a valid number amount!');
        return;
    }

    try {
        const rate = await exchangeRates( baseCurrency, targetCurrency );
        const convertedAmount = amount * rate ;
        document.querySelector('.result').textContent = `${amount} of ${baseCurrency} is equal to ${convertedAmount} of ${targetCurrency}`;
    } catch (err) {
        console.error('Error occurred during fetching exchange rate', err);
        alert('Please try again later.');
    }
}

document.getElementById('convert-button').addEventListener('click', convertCurrency);