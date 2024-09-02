const appBtn = document.getElementById("app-btn")
const webBtn = document.getElementById("web-btn")

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