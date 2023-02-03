function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Nathanael, com camisa vermelha, fundo verde"
    )
  } else {
    // se tiver sem o light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Nathanael sorrindo, com camisa preta, fundo branco"
    )
  }
}
