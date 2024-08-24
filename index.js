const toggleBtn = document.getElementById("work-btn")
const apps = document.getElementById("applications")
const sites = document.getElementById("websites")

toggleBtn.addEventListener("click", () => {
    let btnText = toggleBtn.innerText
    
    if (btnText === "SEE APPLICATIONS") {
        toggleBtn.innerText = "SEE WEBSITES"
    } else if (btnText === "SEE WEBSITES") {
        toggleBtn.innerText = "SEE APPLICATIONS"
    }
})