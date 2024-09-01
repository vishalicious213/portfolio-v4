const appBtn = document.getElementById("app-btn") // kittyBtn
const webBtn = document.getElementById("web-btn") // puppyBtn
// const apps = document.getElementById("applications")
// const sites = document.getElementById("websites")
// const carousel = document.getElementById("carousel")
// const carouselContainer = document.getElementById("carousel-container")
const carousel = document.getElementById("carousel-container") // carousel
const carouselImg = document.getElementById("carousel-images") // carouselImg
const dotsContainer = document.getElementById("dot-container") // dotsContainer

const appsArray = [
    {
        id: 1,
        img: "img/projects/movies.jpg",
        title: "Movies Watchlist",
        view: "https://vish213-movies.netlify.app/",
        code: "https://github.com/vishalicious213/movies",
        desc: "Add or remove movies from your personal watchlist. Search for a movie and get information from the OMDB (Online Movie Database) API about it. Save the ones you want to see for later.",
        stack: ["html", "css", "js"]
    },
    {
        id: 2,
        img: "img/projects/jimmys-diner.jpg",
        title: "Jimmy's Diner",
        view: "https://vish213-jimmys-diner.netlify.app/",
        code: "https://github.com/vishalicious213/restaurant-ordering-app",
        desc: "Jimmy's Diner serves the best burgers and pizzas in town. This kiosk/ordering app was prepared using the finest JavaScript and seasoned with arrays, objects and a sprinkling of CSS.",
        stack: ["html", "css", "js"]
    },
    {
        id: 3,
        img: "img/projects/locator.jpg",
        title: "Locator App",
        view: "https://vish213-locator.netlify.app/",
        code: "https://github.com/vishalicious213/locator",
        desc: "I built this Progressive Web App after moving to CA and never knowing what city I was driving through. It shows the city, local map and weather using Open Weather API and the Google Maps API.",
        stack: ["html", "css", "js"]
    },
    {
        id: 4,
        img: "img/projects/task-list.jpg",
        title: "Task List",
        view: "https://vish213-task-list.netlify.app/",
        code: "https://github.com/vishalicious213/tasks-firebase",
        desc: "A combination shopping list, to-do list and notes app that I built for my family of cat girls. It uses the Firebase Realtime Database to store and update data so changes are visible to everyone immediately.",
        stack: ["html", "css", "js", "fb"]
    }
]

const siteArray = [
    {
        id: 1,
        img: "img/projects/salon.jpg",
        title: "Ayesha Salon",
        view: "https://vish213-salon.netlify.app/",
        desc: "Welcome to Ayesha Salon, where style meets comfort! Our cozy salon is your go-to destination for the latest hair trends, with a team of skilled stylists passionate about crafting the perfect look for you. Explore our website for a glimpse of our work, customer reviews, and easy booking options.",
    },
    {
        id: 2,
        img: "img/projects/grill.jpg",
        title: "Vish's Grillicious Grill",
        view: "https://vish213-grill.netlify.app/",
        desc: "At Vish's Grillicious Grill, culinary dreams take flight - and crash in a box of Chicken McNuggets! We aspire to serve home-cooked meals that delight the senses, but every parent knows how that ends. Order a meal and we'll bring out what your kids really want, too.",
    },
    {
        id: 3,
        img: "img/projects/bcc.jpg",
        title: "BCC Foundation",
        view: "https://vish213-bcc-shop.netlify.app/",
        desc: "The Breast Cancer Comfort Foundation aims to offer encouragement, support and laughter to individuals whose lives have been forever changed by curative or preventative breast cancer treatment through the delivery of unique “Comfort Baskets” and “Chemo Comfort Bags”.",
    }
]

// let showArr = "web"
let dataSet = siteArray // dataSet
let slideIndex = 1

// ⬇️ EVENT LISTENERS ⬇️

appBtn.addEventListener("click", () => {  
    showArr = "app"  
    apps.classList.remove("hidden")
    apps.classList.add("gallery")
    sites.classList.add("hidden")
    sites.classList.remove("gallery")
    renderApps(appsArray)
    console.log(window.innerWidth)
})

webBtn.addEventListener("click", () => {    
    showArr = "web"
    sites.classList.remove("hidden")
    sites.classList.add("gallery")
    apps.classList.add("hidden")
    apps.classList.remove("gallery")
    renderSites(siteArray)
})

// ⬇️ RENDER FUNCTIONS ⬇️

function renderApps(arr) {
    apps.innerHTML = ""

    arr.map(proj => {
        let stack = proj.stack.map(tech => {
            switch (tech) {
                case "html": return `<img src="img/html5.svg" title="HTML5" alt="HTML5"></img>`
                case "css": return `<img src="img/css3.svg" title="CSS3" alt="CSS3"></img>`
                case "js": return `<img src="img/javascript.svg" title="JavaScript" alt="JavaScript"></img>`
                case "fb": return `<img src="img/firebase.svg" title="Firebase" alt="Firebase"></img>`
                default: return null
            }
        }).join("")

        apps.innerHTML += `
            <section class="project">
                <div>
                    <a target="_blank" rel="noopener noreferrer" href=${proj.view}>
                        <img class="screenshot" src=${proj.img} alt="">
                    </a>
                </div>
                <div class="inner-project-container">
                    <h4>${proj.title}</h4>
                    <div class="project-buttons">
                        <a target="_blank" rel="noopener noreferrer" href=${proj.view}>
                            <div class="visit-site">
                                <span class="visit-icon">&#x2BC8;</span>
                                Visit site
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href=${proj.code}>
                            <div class="view-code">
                                <i class="fab fa-github"></i>
                                View code
                            </div>
                        </a>
                    </div>
                    <section class="project-info">
                        <p class="project-desc">${proj.desc}</p>
                        <div class="stack">${stack}</div>
                    </section>
                </div>
            </section>
        `
    })
}

function renderSites(arr) {
    sites.innerHTML = ""

    arr.map(proj => {
        sites.innerHTML += `
            <section class="project">
                <div>
                    <a target="_blank" rel="noopener noreferrer" href=${proj.view}>
                        <img class="screenshot" src=${proj.img} alt="">
                    </a>
                </div>
                <div class="inner-project-container">
                    <h4 class="site-title">${proj.title}</h4>
                    <section class="project-info">
                        <p class="project-desc">${proj.desc}</p>
                    </section>
                </div>
            </section>
        `
    })
}

function renderCarousel(arr) {
    carouselContainer.innerHTML = ``

    arr.map(proj => {
        carouselContainer.innerHTML += `
            <section class="project slide">
                <div>
                    <a target="_blank" rel="noopener noreferrer" href=${proj.view}>
                        <img class="screenshot" src=${proj.img} alt="">
                    </a>
                </div>
                <div class="inner-project-container">
                    <h4 class="site-title">${proj.title}</h4>
                    <section class="project-info">
                        <p class="project-desc">${proj.desc}</p>
                    </section>
                </div>
            </section>
        `
    })

    renderDots(arr.length)
}

function renderDots(num) {
    dotsContainer.innerHTML = ""
    
    for (i = 0; i < num; i++) {
        dotsContainer.innerHTML += `
            <span class="dot" onclick="showSlideFromDot(${i+1})"></span>
        `
    }
}

function changeSlide(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide")
    let dots = document.getElementsByClassName("dot")

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"
}

function showSlideFromDot(n) {
    let slides = document.getElementsByClassName("slide")
    let dots = document.getElementsByClassName("dot")
    slideIndex = n

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[n-1].style.display = "block"
    dots[n-1].className += " active"
}

// renderSites(siteArray)
renderCarousel(siteArray)
showSlides(slideIndex)