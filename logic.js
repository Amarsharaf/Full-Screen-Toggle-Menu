let toggle = document.querySelector(".toggle")
let closer = document.querySelector(".close")
let nav = document.querySelector("nav")

toggle.onclick = function () {
    nav.classList.add("open")
}
closer.onclick = function () {
    this.parentElement.classList.remove("open")
}
document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open")
    }
}