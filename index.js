const appBtn = document.getElementById("app-btn")
const webBtn = document.getElementById("web-btn")
const carouselImg = document.getElementById("carousel-images")

// ⬇️ EVENT LISTENERS ⬇️

appBtn.addEventListener("click", appClick)
webBtn.addEventListener("click", webClick)

// ⬇️ EVENT HANDLERS ⬇️

function appClick() {
    console.log("app-btn clicked")
    // dataSet = appsArray
    // renderCarousel(dataSet, slideIndex)
}

function webClick() {
    console.log("web-btn clicked")
    // dataSet = siteArray
    // renderCarousel(dataSet, slideIndex)
}

function changeSlide(n) {
    console.log("changeSlide", n)
}

// ⬇️ RENDER FUNCTIONS ⬇️

// render carousel
function renderCarousel(arr, slideNum = 0) {
    carouselImg.innerHTML = ""

    const critters = arr.map(item => `
        <section class="carousel-critter hidden">
            <img src="img/${item}" alt="">
        </section>
    `).join("")

    carouselImg.innerHTML += critters

    let critterToShow = document.getElementsByClassName("carousel-critter")[slideNum]
    critterToShow.className = "carousel-critter"
    
    carouselImg.innerHTML = ""
    carouselImg.appendChild(critterToShow)

    // renderDots(arr.length)
}