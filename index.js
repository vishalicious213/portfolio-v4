const appBtn = document.getElementById("app-btn")
const webBtn = document.getElementById("web-btn")
const apps = document.getElementById("applications")
const sites = document.getElementById("websites")

appBtn.addEventListener("click", () => {    
    apps.classList.remove("hidden")
    apps.classList.add("gallery")
    sites.classList.add("hidden")
    sites.classList.remove("gallery")
    renderApps()
})

webBtn.addEventListener("click", () => {    
    sites.classList.remove("hidden")
    sites.classList.add("gallery")
    apps.classList.add("hidden")
    apps.classList.remove("gallery")
})

function renderApps() {
    apps.innerHTML = `
        <section class="project">
            <div>
                <img class="screenshot" src="img/projects/movies.jpg" alt="">
            </div>
            <div class="inner-project-container">
                <h4>Movies Watchlist</h4>
                <div class="project-buttons">
                    <div class="visit-site">
                        <span class="visit-icon">&#x2BC8;</span>
                        Visit site
                    </div>
                    <div class="view-code">
                        <i class="fab fa-github"></i>
                        View code
                    </div>
                </div>
                <section class="project-info">
                    <p class="project-desc">Uses the OMDB (Online Movie Database) API to get movie info from user searches. Users can add movies to or remove movies from a personal watchlist. Includes pagination for more results.</p>
                    <div class="stack">
                        <img src="img/html5-color.svg" alt="">
                        <img src="img/css3-color.svg" alt="">
                        <img src="img/javascript-color.svg" alt="">
                    </div>
                </section>
            </div>
        </section>
    `
}