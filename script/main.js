
window.addEventListener("scroll", function() {
    var scroll = this.document.querySelector(".setaTop")
    scroll.classList.toggle("ativo", window.scrollY > 450)
})

function backTop(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}


/*texto do banner*/

const texto = document.querySelector("#texto");
const textoDigitado = "Olá me chamo Neomar. Precisa de um programador! Como posso lhe ajudar?";
const intervalo = 300;

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
