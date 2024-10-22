const API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

export async function exchangeRates(baseCurrency, targetCurrency) {
    const url = `${API_URL}/${baseCurrency()}/${targetCurrency}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[targetCurrency];    
}