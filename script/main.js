
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



/*<button id="btn-topo">Voltar ao Topo</button>


#btn-topo {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #555;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
  }

  // Obtenha o botão
var btnTopo = document.getElementById("btn-topo");

// Quando o usuário rolar a página para baixo 20px do topo do documento, mostre o botão
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

// Quando o usuário clicar no botão, role de volta ao topo do documento
function voltarAoTopo() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
  }
  btnTopo.onclick = function() {
    voltarAoTopo();
  }
  como fazer um botão que com um click ele me retorna para o top 0 do site utilizando html, css e javascript*/  