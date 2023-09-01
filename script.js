
function exercicio1(){
    var nota = parseInt(prompt("Digite um numero"));

    while(nota < 0 || nota > 10){
        nota = parseInt(prompt("Digite novamente a nota"));
    }

    document.getElementById("root").style.display = "block"
    document.getElementById("root").innerHTML = `
        <p>A sua nota: ${nota}</p>
    `
}
function exercicio2() {
    var numero = 10;

    while (numero > 1) {
        numero--;
        document.getElementById("root").style.display = "block";
        document.getElementById("root").innerHTML = `
            <p>Time: ${numero}</p>
        `;
    }
}

function limpar(){
    document.getElementById("root").innerHTML = `
        <p></p>
    `
}