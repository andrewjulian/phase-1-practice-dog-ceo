

document.addEventListener('DOMContentLoaded', () => {

    //console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    let listofValues = [];
    let listOfBreeds = [];

    //-----------------------------------------------------------------------------------
    // Fetches and Displays Dog Images
    //-----------------------------------------------------------------------------------

    //fetches data from server 
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        listofValues = Object.values(data)[0] 
        console.log('List of values', listofValues)
        addDogPictures();
    })
        
    //selects the dog image container and adds images of each dog from the list
    function addDogPictures() {
        listofValues.forEach(element => {
            const dogImage = document.createElement('img');
            dogImage.src = element;
            dogImage.classList.add("dog-images")
            document.querySelector('#dog-image-container').appendChild(dogImage);
        })
    }

    //-----------------------------------------------------------------------------------
    // Fetches and Displays Dog Breed Names
    //-----------------------------------------------------------------------------------

    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        console.log('breeds data', data.message)
        listOfBreeds = Object.keys(data.message)
        console.log("List of breeds?", listOfBreeds)
        addDogNames();
    })
      
    function addDogNames() {
        listOfBreeds.forEach(element => {
            const breedText = document.createElement('li')
            breedText.textContent = element
            document.querySelector('#dog-breeds').appendChild(breedText)
            console.log("add dog names running")
        })
    }

})