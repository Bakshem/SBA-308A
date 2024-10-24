export const displayResults = (data) =>{
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (data) {
        resultDiv.innerHTML = `
            <h2>Exchange Rates for ${data.base}</h2>
            <ul>
                ${Object.entries(data.rates).map(([currency, rate]) => `
                    <li>${currency}: ${rate}</li>
                `).join('')}
            </ul>
        `;
    } else {
        resultDiv.innerHTML = `<p> No data available. </p>`;
    }
};