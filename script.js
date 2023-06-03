    let boton = document.querySelector(".reproductor")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "tilin.mp3")
      etiquetaAudio.play()
    })