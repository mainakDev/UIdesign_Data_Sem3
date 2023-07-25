const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternativeName = {'pic1.jpg': 'eye', 'pic2.jpg': 'coral shell', 'pic3.jpg': 'purple flower', 'pic4.jpg': 'pharao', 'pic5.jpg': 'butterfly'};

/* Looping through images */

for(let img of imageArray){
    const imageSource = 'images/'+img;
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageSource);
    newImage.setAttribute('alt', alternativeName[img]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src',imageSource);
        displayedImage.setAttribute('alt',alternativeName[img]);
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentAttribute = btn.getAttribute('class');
    console.log(currentAttribute);
    if(currentAttribute === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});