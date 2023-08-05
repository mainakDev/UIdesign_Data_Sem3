const displayDiv = document.querySelector('div');
const innerDiv = document.querySelector('innerDiv');
const mapFrame = document.querySelector('iframe');
async function getData () {
    const reqUrl = 'https://restcountries.com/v3.1/all';
    const request = new Request(reqUrl);
    const response = await fetch(request);
    const allData = await response.json()
    console.log(allData);
    displayData(allData);
}

getData()

function displayData(allData){
    for(obj of allData){
        const flagEmoji = document.createElement('p');
        const countryName = document.createElement('h4');
        const flagImage = document.createElement('img');
        const innerDiv = document.createElement('div');
        const capital = document.createElement('h6');
        const currency = document.createElement('p');
        capital.textContent = obj.hasOwnProperty('capital') ? 'Capital: '+obj.capital[0]: 'Capital: No data available';
        innerDiv.setAttribute('class','innerDiv');
        flagImage.setAttribute('src', obj.flags.png);
        flagEmoji.textContent = obj.flag;
        countryName.textContent = obj.name.common+' '+obj.flag;
        countryName.setAttribute('class','countryName');
        capital.setAttribute('class','capital');
        currency.setAttribute('class','currency');
        const currencyName = obj.hasOwnProperty('currencies') ? Object.values(obj.currencies)[0].name: 'No data available';
        const currencySymbol = obj.hasOwnProperty('currencies') ? Object.values(obj.currencies)[0].symbol: 'No data available';
        currency.textContent = 'Currency name: '+currencyName+' | ('+currencySymbol+')';
        console.log(obj.maps.googleMaps);
        displayDiv.appendChild(innerDiv);
        // innerDiv.appendChild(flagImage);
        innerDiv.appendChild(countryName);
        innerDiv.appendChild(capital); 
        innerDiv.appendChild(currency); 
    }
}
