const api_url = 'https://api.exchangerate-api.com/v4/latest/';

export const fetchCurrencyData = async function (currency) {
    try {
    const response = await fetch(`${api_url}${currency}`);
    const data = await response.json();
    return data;  
    } catch (error) {
        console.error ("Error occured while fetching data");
    }
        
};
