const appBtn = document.getElementById("app-btn")
const webBtn = document.getElementById("web-btn")
const apps = document.getElementById("applications")
const sites = document.getElementById("websites")

const appsArray = [
    {
        id: 1,
        img: "img/projects/movies.jpg",
        title: "Movies Watchlist",
        view: "https://vish213-movies.netlify.app/",
        code: "https://github.com/vishalicious213/movies",
        desc: "Uses the OMDB (Online Movie Database) API to get movie info from user searches. Users can add movies to or remove movies from a personal watchlist. Includes pagination for more results.",
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

appBtn.addEventListener("click", () => {    
    apps.classList.remove("hidden")
    apps.classList.add("gallery")
    sites.classList.add("hidden")
    sites.classList.remove("gallery")
    renderApps(appsArray)
})

webBtn.addEventListener("click", () => {    
    sites.classList.remove("hidden")
    sites.classList.add("gallery")
    apps.classList.add("hidden")
    apps.classList.remove("gallery")
})

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