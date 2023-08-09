const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text object for each image file */
const altTextObject = {
                        'pic1.jpg': 'human eye',
                        'pic2.jpg': 'coral',
                        'pic3.jpg': 'purple flower',
                        'pic4.jpg': 'pharao',
                        'pic5.jpg': 'butterfly'
                    }

/* Looping through images */
for(let img of imageArray){
    const imageUrl = 'images/'+img;
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageUrl);
    newImage.setAttribute('alt', altTextObject[img]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', imageUrl);
    });
}



/* Wiring up the Darken/Lighten button */
