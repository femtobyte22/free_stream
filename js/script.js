
window.addEventListener("load", function () {
    document.getElementById('preloader').style.display = "none";
    stratStream();
})

// Channel href
const cards = document.querySelectorAll(".card")
for (let ci = 0; ci < cards.length; ci++) {
    cards[ci].addEventListener('click', function () {
        let id = this.getAttribute("id")
       window.location.href = `../pages/channels/${id}.html`
    })

}

// Main
