import { fetchCurrencyData } from "./modules/api.js";
import {displayResults } from "./modules/currency.js";

document.getElementById('search').addEventListener('click' , async () => {
    const currencyCode = document.getElementById('currency-input').value;
    const data = await fetchCurrencyData (currencyCode);
    displayResults(data);    
})