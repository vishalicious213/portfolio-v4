const appBtn = document.getElementById("app-btn")
const webBtn = document.getElementById("web-btn")

// ⬇️ EVENT LISTENERS ⬇️

appBtn.addEventListener("click", appClick)
webBtn.addEventListener("click", webClick)

// ⬇️ EVENT HANDLERS ⬇️

function changeSlide(n) {
    console.log("changeSlide", n)
}

// ⬇️ RENDER FUNCTIONS ⬇️