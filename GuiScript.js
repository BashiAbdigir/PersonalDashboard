let favoriteArray = ["movies", "artists", "games", "shows", "animes"]
const favSpan = document.getElementById("favoriteSpan")
const leftButton = document.getElementById("spanTwo")
const rightButton = document.getElementById("spanThree")
const runnerButton = document.getElementById("runner")
let imagesArray = document.getElementsByClassName("favorites")
const moviesArray = ["Ready Player One", "Wreck-It Ralph", "Us", "Flipped", "Scream", "Saw", "Smile 2", "The Hate You Give"]
const gamesArray = ["Fall Guys", "Brawl Stars", "Brawlhalla", "Roblox", "Among Us", "Shadow of Mordor", "Spellbreak", "Minesweeper"]
const artistsArray = ["Drake", "Eyedress", "Tame Impala", "NewJeans", "King Von", "Pinkpantheress", "Mitski", "Lil Uzi Vert"]
const showsArray = ["Arcane", "Gen V", "The Boys", "The Walking Dead", "Umbrella Academy", "Stranger Things", "Invincible", "Euphoria"]
const animeArray = ["Another", "Attack on Titan", "Black Clover", "Chainsawman", "Jujutsu Kaisen", "Tokyo Ghoul", "The Promised Neverland", "Deathnote"]
// imagesArray[0].src = "movies/flipped.png"

let position = 0

function changesImages(category, array) {
    if (favoriteArray[position] == category) {
        for (let i = 0; i < array.length; i++) {
            imagesArray[i].src = `${category}/${array[i]}.png`
            imagesArray[i].alt = array[i]
        }
    }
}

leftButton.addEventListener("click", function(){
    if (position == 0) {
        position = favoriteArray.length - 1
    } else {
        position--
    }
    favSpan.textContent = `Favorite ${favoriteArray[position]}`

    changesImages("movies", moviesArray)
    changesImages("games", gamesArray)
    changesImages("artists", artistsArray)
    changesImages("shows", showsArray)
    changesImages("animes", animeArray)
})

rightButton.addEventListener("click", function(){
    if (position == favoriteArray.length - 1) {
        position = 0
    } else {
        position++
    }
    favSpan.textContent = `Favorite ${favoriteArray[position]}`

    changesImages("movies", moviesArray)
    changesImages("games", gamesArray)
    changesImages("artists", artistsArray)
    changesImages("shows", showsArray)
    changesImages("animes", animeArray)
})

for (let i = 0; i< 8; i++) {
    imagesArray[i].addEventListener("mouseover", function() {
        favSpan.textContent = imagesArray[i].alt
    })

    imagesArray[i].addEventListener("mouseleave", function() {
        favSpan.textContent = favSpan.textContent = `Favorite ${favoriteArray[position]}`
    })
}
let mW = document.getElementById("halfTwo").clientWidth
let mH = document.getElementById("halfTwo").clientHeight

runnerButton.addEventListener("mouseenter", function() {
runnerButton.style.left = `${(Math.random() * mW + 100) - 100}px`
runnerButton.style.top = `${(Math.random() * mH + 100) - 100}px`
})
