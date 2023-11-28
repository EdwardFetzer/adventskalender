document.addEventListener("DOMContentLoaded", function () {
    const kalender = document.getElementById("kalender")

    // for (let tagNummer = 1; tag <= 24; tagNummer++) {
    //     const tuer = document.createElement("div")
    //     tuer.textContent = "Türchen " + tagNummer
    //     tuer.classList.add("tuer", "geschlossen")
    //     tuer.dataset.day = tagNummer
    //     kalender.appendChild(tuer)
    // }
    function kaertchenKlick(event) {
        const kaertchenInhalt = event.currentTarget.textContent
        alert("Türchen nummer:\n " + kaertchenInhalt)
    }
    
    const kaertchenElement = document.querySelectorAll(".Kaertchen")
    kaertchenElement.forEach((kaertchen) => {
        kaertchen.addEventListener("click", kaertchenKlick)
    })
})