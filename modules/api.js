const api_url = 'https://api.exchangerate-api.com/v4/latest/';

export async function exchangeRates(baseCurrency, targetCurrency) {
    const url = `${api_url}/${baseCurrency}/${targetCurrency}.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data[targetCurrency];    
}
