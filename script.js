 var numero = 11;
 var intervalo;

function exercicio1() {
  var nota = parseInt(prompt("Digite um numero"));

  while (nota < 0 || nota > 10) {
    nota = parseInt(prompt("Digite novamente a nota"));
  }
  document.getElementById("root1").style.display = "block"
  document.getElementById("root1").innerHTML = `<p>A sua nota: ${nota}</p>`;
}

function exercicio2() {
  numero = 11;
  intervalo = setInterval(() => {
    numero--
    document.getElementById("root2").style.display = "block"
    document.getElementById("root2").innerHTML = `<p>Natal em: ${numero}</p>`;

    if (numero === 0) {
      fecharintervalo();
      document.getElementById("root2").innerHTML = `<p>Feliz Ano Novo!!!!!!</p>`;
    }
  }, 1000)
}

 function fecharintervalo() {
    clearInterval(intervalo)
  }

function exercicio3() {
  var OI = prompt("Nome");
  var BOM = prompt("Senha");

  while (OI === BOM) {
    alert("Os campos estão iguais")
    OI = prompt("Nome");
    BOM = prompt("Senha");
  }

  document.getElementById("root3").style.display = "block"
  document.getElementById("root3").innerHTML = `${OI}${BOM}`;

}

var exercicio4 = document.getElementById("Exercicio4")

function showExercicio4() {
  exercicio4.style.display = "flex"
}

function somaExercio4() {
  var num1 = document.getElementById("num1").value
  var num2 = document.getElementById("num2").value

  var resultado = parseInt(num1) + parseInt(num2);

  document.getElementById("root4").style.display = "block"
  document.getElementById("root4").innerHTML = resultado;
}

function limpar() {
  document.getElementById("root1").style.display = "none"
  document.getElementById("root2").style.display = "none"
  document.getElementById("root3").style.display = "none"
  document.getElementById("root4").style.display = "none"
  exercicio4 = document.getElementById("Exercicio4").style.display = "none"
  fecharintervalo()
}
