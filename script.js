
function exercicio1() {
    var nota = parseInt(prompt("Digite um numero"));

    while (nota < 0 || nota > 10) {
        nota = parseInt(prompt("Digite novamente a nota"));
    }
    document.getElementById("root").style.display = "block"
    document.getElementById("root").innerHTML = `<p>A sua nota: ${nota}</p>`;
}

function exercicio2() {
    var numero = 10;

    const intervalo = setInterval(() => {
        numero = numero - 1
        document.getElementById("root").style.display = "block"
        document.getElementById("root").innerHTML = `<p>A sua nota: ${numero}</p>`;

        if (numero === 0) {
            fecharintervalo();
        }
    }, 1000)


    function fecharintervalo(){
        clearInterval(intervalo)
        
    }
}


function limpar() {
    document.getElementById("root").innerHTML = `
        <p></p>
    `
}

