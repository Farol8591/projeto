function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  // substitur a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/fabiolopes2.png")
  } else {
    // se nao tiver light mode, mander a imagem normal
    img.setAttribute("src", "./assets/fabiolopes.png")
  }
}
