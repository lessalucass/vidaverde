const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
botaoAlterarTema.addEventListener("click", () => {    
    const darkModeOn = body.classList.contains("dark-Mode");  
    if(darkModeOn) {
        body.classList.remove("dark-Mode")
        imagemBotaoTrocaDeTema.setAttribute("src", "img/lua.png.png");
    }
       else{
            body.classList.add("dark-Mode");
            imagemBotaoTrocaDeTema.setAttribute("src", "img/sol.png.png");
        }
} );