

document.addEventListener('DOMContentLoaded', () => {

    //console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    let listofValues = [];

    //fetches data from server 
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        listofValues = Object.values(data)[0] 
        addDogPictures();
    })
        
    //selects the dog image container and adds images of each dog from the list
    function addDogPictures() {
        listofValues.forEach(element => {
            const imageContainer = document.querySelector('#dog-image-container');
            const dogImage = document.createElement('img');
            dogImage.src = element;
            imageContainer.appendChild(dogImage);
        })
    }

})