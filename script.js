
function exercicio1() {
	var nota = parseInt(prompt("Digite um numero"));

	while (nota < 0 || nota > 10) {
		nota = parseInt(prompt("Digite novamente a nota"));
	}
	document.getElementById("root").style.display = "block"
	document.getElementById("root").innerHTML = `<p>A sua nota: ${nota}</p>`;
}

function exercicio2() {
	var numero = 11;

	const intervalo = setInterval(() => {
		numero--
		document.getElementById("root").style.display = "block"
		document.getElementById("root").innerHTML = `<p>Natal em: ${numero}</p>`;

		if (numero === 0) {
			fecharintervalo();
			document.getElementById("root").innerHTML = `<p>Feliz Natal!!!!!!</p>`;
		}
	}, 1000)

	function fecharintervalo() {
		clearInterval(intervalo)
	}
}

function exercicio3() {
	var OI = prompt("Nome");
	var BOM = prompt("Senha");

	if (OI === "" & BOM === "") {
	} else {
		while (OI === BOM) {
			alert("Os campos estão iguais")
				OI = prompt("Nome");
				BOM = prompt("Senha");
		}
		if(OI != BOM) {
			document.getElementById("root").style.display = "block"
			document.getElementById("root").innerHTML = `<p>${OI} ${BOM}</p>`;
		}
	}
}

function showExercicio4() {
	var exercicio4 = document.getElementById("Exercicio4").style.display = "flex"
}

function somaExercio4() {
	var num1 = document.getElementById("num1").value
	var num2 = document.getElementById("num2").value

	var resultado = parseInt(num1) + parseInt(num2);

	document.getElementById("root").style.display = "block"
	document.getElementById("root").innerHTML = resultado;
}

function limpar() {

}

