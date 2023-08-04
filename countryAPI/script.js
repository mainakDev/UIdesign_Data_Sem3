const displayDiv = document.querySelector('div');
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
        const countryName = document.createElement('h1');
        const flagImage = document.createElement('img');
        flagImage.setAttribute('src', obj.flags.png);
        flagEmoji.textContent = obj.flag;
        countryName.textContent = obj.name.common;
        displayDiv.appendChild(flagImage);
        displayDiv.appendChild(countryName);
    }
}