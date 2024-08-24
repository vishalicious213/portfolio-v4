const appBtn = document.getElementById("app-btn")
const webBtn = document.getElementById("web-btn")
const apps = document.getElementById("applications")
const sites = document.getElementById("websites")

appBtn.addEventListener("click", () => {    
    apps.classList.remove("hidden")
    apps.classList.add("gallery")
    sites.classList.add("hidden")
    sites.classList.remove("gallery")
})

webBtn.addEventListener("click", () => {    
    sites.classList.remove("hidden")
    sites.classList.add("gallery")
    apps.classList.add("hidden")
    apps.classList.remove("gallery")
})