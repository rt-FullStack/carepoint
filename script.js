

/* Drop-down meny */
document.addEventListener("DOMContentLoaded", function() { 
//DOMContentLoaded är en händelse (event) som utlöses när HTML har laddats och tolkats

    const menuItems = document.querySelectorAll('#main-menu li'); 
    //document.querySelectorAll('#main-menu li') letar upp alla <li>-element inom ett element med ID 'main-menu' (huvudmenyn).

    menuItems.forEach(item => {//.forEach(item => {...}) används för att loopa igenom alla hittade <li>-element. */

        item.addEventListener('mouseenter', function() { // mouseenter är en event som triggas när muspekaren går över ett menyobjekt.
            const dropdown = this.querySelector('.dropdown'); //this.querySelector('.dropdown') letar efter ett underliggande element med klassen .dropdown 
            if (dropdown) {
                dropdown.style.display = 'block'; //'block' vilket gör den synlig.
            }
        });

        item.addEventListener('mouseleave', function() { // mouseleave utlöses när muspekaren lämnar menyobjektet.
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'none'; // 'none' gör att den dold.
            }
        });
    });
});



/* pictures gallery */
// Skapar en lista över bilder som ska visas i galleriet.
function openFolder() {
   
    const images = [ /* En array images innehåller sökvägar till sex bilder. */
        './images/image1.jpg',
        './images/image2.jpg',
        './images/image3.jpg',
        './images/image4.jpg',
        './images/image5.jpg',
        './images/image6.jpeg',
    ];

    const thumbnailsContainer = document.getElementById('thumbnails');// hämtar <div>-elementet där miniatyrbilderna ska placeras.
    
    thumbnailsContainer.innerHTML = ''; // Rensar innehållet i thumbnailsContainer.

    images.forEach((image) => { // Loopar igenom varje bild i images-arrayen.
        const thumbnailDiv = document.createElement('div'); //Skapar ett nytt <div>-element (thumbnailDiv) som håller en enskild miniatyr.
        thumbnailDiv.classList.add('thumbnail'); // Lägger till klassen 'thumbnail' till thumbnailDiv.
        
        const img = document.createElement('img'); // Skapar ett nytt <img>-element (img) som representerar bilden.
        img.src = image; // Sätter src-attributet till sökvägen till bilden.
        img.alt = image; // Sätter alt-attributet till sökvägen till bilden.
        img.onclick = () => openModal(image); // När bilden klickas på, öppnas en modal med bilden.
        
        thumbnailDiv.appendChild(img);// Lägger till img-elementet som barn till thumbnailDiv.
        thumbnailsContainer.appendChild(thumbnailDiv);// Lägger till thumbnailDiv som barn till thumbnailsContainer.
    });
}

function openModal(imageSrc) { // Öppnar en modal med en stor bild.
    const modal = document.getElementById('imageModal');// Hämtar modal-elementet.
    const largeImage = document.getElementById('largeImage');// Hämtar elementet för den stora bilden.
    
    largeImage.src = imageSrc;// Sätter src-attributet till sökvägen till den valda bilden.
    modal.style.display = "block";// Visar modalen.
}

function closeModal() { // Stänger modalen.
    const modal = document.getElementById('imageModal');// Hämtar modal-elementet.
    modal.style.display = "none";// Stänger modalen.
}



/* Formulärvalidering */
document.getElementById('contact-form').addEventListener('submit', function(event) { 
    // Lyssna på submit-händelsen(event) för formuläret.
    event.preventDefault();// Förhindra standardåtgärden för att skicka formuläret.
    const name = document.getElementById('name').value;// Hämtar värdet från fältet med id 'name'.
    const email = document.getElementById('email').value;// Hämtar värdet från fältet med id 'email'.
    const message = document.getElementById('message').value;// Hämtar värdet från fältet med id 'message'.

    if (name && email && message) {// Kontrollerar om alla fält är ifyllda.
        alert('Tack för ditt meddelande!');// Visar en meddelandebox med ett tackmeddelande.
        this.reset();// Rensar formuläret.
    } else {
        alert('Vänligen fyll i alla fält.');// Visar en meddelandebox med ett felmeddelande.
    }
});