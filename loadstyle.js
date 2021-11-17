const backgrounds = ['img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpg', 'img/bg4.jpg', 'img/bg5.jpg', 'img/bg6.jpg']
// Create a random number based on backgrounds length
const randomBackgroundDetermination = Math.floor(Math.random() * Math.floor(backgrounds.length))

// Retrieve HTML element
const classePrincipaleElement = document.body
// Apply new background
classePrincipaleElement.style.backgroundImage = `linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.4)
        ),
		url(${backgrounds[randomBackgroundDetermination]})`;

//console.log(randomBackgroundDetermination)						//afficher pour debug
//console.log(`url(${backgrounds[randomBackgroundDetermination]})`)