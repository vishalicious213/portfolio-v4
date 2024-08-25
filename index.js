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
    arr.map(proj => {
        let stack = proj.stack.map(tech => {
            switch (tech) {
                case "html": return `<img src="img/html5-color.svg" alt=""></img>`
                case "css": return `<img src="img/css3-color.svg" alt=""></img>`
                case "js": return `<img src="img/javascript-color.svg" alt=""></img>`
                default: return null
            }
        })

        apps.innerHTML += `
            <section class="project">
                <div>
                    <img class="screenshot" src=${proj.img} alt="">
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
                        <div id=${proj.id}-stack class="stack">${stack}</div>
                    </section>
                </div>
            </section>
        `
    })
}