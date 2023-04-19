
const btnTopo= document.querySelector(".setaTop")

window.onscroll = function() {
  mostrarBotaoTopo()
};

function mostrarBotaoTopo() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
}

window.addEventListener("scroll", function() {
    var scroll = this.document.querySelector(".setaTop")
    scroll.classList.toggle("ativo", window.scrollY > 200)
})

function backTop(){
  window.scrollTo({
    top: 0,
    behavior:"smooth"
  })
}

/*texto do banner*/

const texto = document.querySelector("#texto");
const textoDigitado = "A criatividade é a inteligência se divertindo.";
const intervalo = 200;

function showTexto (texto, textoDigitado, intervalo){
  const char = textoDigitado.split("").reverse();
  const typer = setInterval(()=>{
    if(!char.length){
      return clearInterval(typer);
    }

    const next = char.pop();

    texto.innerHTML += next;

  }, intervalo);
}

showTexto(texto, textoDigitado, intervalo);
