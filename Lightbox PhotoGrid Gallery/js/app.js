//Create accessible lightbox photo gallery and data 'search and match' filter

// Create caption library with indexed array
// Note - captionArray is key to image search, therefore every image added must have caption data
let captionArray = new Array(
    `<h2>Hay Bales</h2><h3>I love hay bales. Took this snap on a drive through the countryside past some straw fields.
    </h3>`,
    `<h2>Lake</h2><h3>The lake was so calm today. We had a great view of the snow on the mountains from here.
    </h3>`,
    `<h2>Canyon</h2><h3>I hiked to the top of the mountain and got this picture of the canyon and trees below.
    </h3>`,
    `<h2>Iceberg</h2><h3>It was amazing to see an iceberg up close, it was so cold but didn’t snow today. 
    </h3>`,
    `<h2>Desert</h2><h3>The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.
    </h3>`,
    `<h2>Autumn</h2><h3>Autumn is coming, I love when the leaves on the trees start to change color.
    </h3>`,
    `<h2>Plantation</h2><h3>I drove past this plantation yesterday, everything is so green!
    </h3>`,
    `<h2>Dunes</h2><h3>My summer vacation to the Oregon Coast. I love the sandy dunes!
    </h3>`,
    `<h2>Countryside Lane</h2><h3>We enjoyed a quiet stroll down this countryside lane. 
    </h3>`,
    `<h2>Sunset</h2><h3>Sunset at the coast! The sky turned a lovely shade of orange.
    </h3>`,
    `<h2>Cave</h2><h3>I did a tour of a cave today and the view of the landscape below was breathtaking.
    </h3>`,
    `<h2>Bluebells</h2><h3>I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.
    </h3>`);

//Create iteration to add images and data to gallery

function populateGallery(){
let thumbnailAdd ='';
let container = document.querySelector('.container_thumbnails');//get object

    for (let i=1; i<=(captionArray.length); i++) {
        thumbnailAdd += `<a class= 'thumbnail' href="images/photos/${i}.jpg" data-caption="${captionArray[i-1]}">
        <img class='thumbnail' id= "thumb${i}" src="images/photos/thumbnails/${i}.jpg" alt="Gallery image">
        </a>`;
    }
container.innerHTML = thumbnailAdd;
}


//Text search and match function


function searchKeywords(){
    
    // iterate through caption data text to check for user input text match
    for (let i=1; i<=(captionArray.length); i++) {
        //get live user input and remove case sensitivity
        let searchValue = document.getElementById('search').value.toLowerCase();
        //compare caption text with search input text
        let matchCheck = captionArray[i-1].toLowerCase().includes(searchValue);
        // get the images associated with text-matched caption
        let unmatchedImage = document.getElementById(`thumb${i}`);
         //display matched and ...
        if (matchCheck){                                
            unmatchedImage.style.display = "block";
            } else {
            //... hide unmatched, and remove parent (a) border style 
            unmatchedImage.parentElement.style.border = "none";           
            unmatchedImage.style.display = "none";
                }
    }
    
}

// call gallery creation function
populateGallery();

// call Lightbox library
baguetteBox.run('.container_thumbnails');
