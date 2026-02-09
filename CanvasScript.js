const cnv = document.getElementById("canvas")
const ctx = cnv.getContext("2d")
cnv.width = 1.5 * cnv.offsetWidth
cnv.height = 1.5 *cnv.offsetHeight
const hamsterImage_happy = document.getElementById("happy")
const hamsterImage_excited = document.getElementById("excited")
const hamsterImage_confused = document.getElementById("confused")
let confused = true
let mouseX = 0
let mouseY = 0
let run = false

cnv.addEventListener("mouseenter", function() {
    confused = false
})

cnv.addEventListener("mouseleave", function() {
    confused = true
})

cnv.addEventListener("mousemove", function(event) {
    const rect = cnv.getBoundingClientRect();
    mouseX = event.offsetX * 1.5
    mouseY = event.offsetY * 1.5
})

let amount = 20

function drawHamsters() {
    obj = {
        x: Math.random() * (cnv.width - 75 ),
        y: Math.random() * (cnv.height - 75),
        speedX: Math.random() * 5 - 2.5,
        speedY: Math.random() * 10 - 5,
    }
    return obj
}
let hhamsters = []

for (let i = 0; i < amount; i++) {
hhamsters.push(drawHamsters())
}

function getDistance(x1, y1, x2, y2) {
    const xDiff = x2 - x1;
    const yDiff = y2 - y1;
    const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    return distance;
}


function drawCanvas() {
    if (mouseX >= cnv.width) {
        mouseX = cnv.width
    } else if (mouseX < 0) {
        mouseX = 0
    }

    if (mouseY >= cnv.height) {
        mouseY = cnv.height
    } else if (mouseY < 0) {
        mouseY = 0
    }

   

    ctx.clearRect(0, 0, cnv.width, cnv.height)
    for (let i = 0; i < amount; i++) {
        if (confused) {
            ctx.drawImage(hamsterImage_confused, hhamsters[i].x , hhamsters[i].y, 75, 75)
        } else {
            ctx.drawImage(hamsterImage_happy, hhamsters[i].x, hhamsters[i].y, 75, 75)
        }
    }

    for (let i = 0; i < amount; i++) {
        if (hhamsters[i].x + 75 > cnv.width) {
            hhamsters[i].speedX *= -1
         } else if (hhamsters[i].x < 0) {
            hhamsters[i].speedX *= -1
         }

         if (hhamsters[i].y + 75 > cnv.height) {
            hhamsters[i].speedY *= -1
         } else if (hhamsters[i].y < 0) {
            hhamsters[i].speedY *= -1
         }
       
         hhamsters[i].x += hhamsters[i].speedX
         hhamsters[i].y += hhamsters[i].speedY

        let distance = getDistance(hhamsters[i].x + 75 / 2, hhamsters[i].y + 75 /2 , mouseX, mouseY)

        if (distance < 75) {
            ctx.drawImage(hamsterImage_excited, hhamsters[i].x , hhamsters[i].y, 75, 75)
        }
    }

    requestAnimationFrame(drawCanvas)
}

    drawCanvas()


