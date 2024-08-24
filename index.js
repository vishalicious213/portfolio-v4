const appBtn = document.getElementById("app-btn")
const webBtn = document.getElementById("web-btn")
const apps = document.getElementById("applications")
const sites = document.getElementById("websites")

appBtn.addEventListener("click", () => {    
    apps.classList.remove("hidden")
    sites.classList.add("hidden")
})

webBtn.addEventListener("click", () => {    
    sites.classList.remove("hidden")
    apps.classList.add("hidden")
})