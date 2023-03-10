
function phraseChange() { 
    const phraseRandom = Math.round(Math.random() * 4)
    const flash = document.querySelector(".content h1")
    const phrase = [
        "Tente de novo. Fracasse de novo. Mas fracasse melhor",
        "Não importa que você vá devagar, contanto que você não pare.",
        "A felicidade não é algo pronto. Ela é feita das suas próprias ações",
        "Trabalhe para expressar o melhor de você, não para impressionar.",
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    ]

    flash.innerHTML = phrase[phraseRandom]
}

function handleClick(event) {
    event.preventDefault()
    phraseChange()
    setTimeout(() => {

        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
    }, 2000)
        
}

function handleClickTwo(event) {
    event.preventDefault()

    document.querySelector(".screen2").classList.add("hide")
    document.querySelector(".screen1").classList.remove("hide")

}



    

