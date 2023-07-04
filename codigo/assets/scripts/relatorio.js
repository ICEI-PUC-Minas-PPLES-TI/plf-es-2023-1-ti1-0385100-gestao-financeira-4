function ExibirLancamentos() {
  var totalHTML = "";

  var Lancamentos = JSON.parse(localStorage.getItem("lancamentos"));
  console.log(Lancamentos);

  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("id");

  const lancamentosFiltrados = Lancamentos.filter(
    (lancamento) => lancamento.id === eventId
  );

  const somaResponsaveis = {};

  //Percorrer o Array de Lançamentos
  for (let i = 0; i < Lancamentos.length; i++) {
    const responsaveis = Lancamentos[i].responsaveis.split(','); //Separar responsáveis nome dos responsáveis por ,
    const quantidadeResponsaveis = responsaveis.length; // Pega a quantidade de responsáveis
    const PegaValor = parseInt(Lancamentos[i].valor, 10); //Convertendo string para inteiro
    //Calcula o valor individual a pagar por evento
    const ValorEvento = PegaValor / quantidadeResponsaveis;

    for (let j = 0; j < responsaveis.length; j++) {
      const responsavel = responsaveis[j];

      if (somaResponsaveis[responsavel]) {
        somaResponsaveis[responsavel] += valorPorResponsavel;
      } else {
        somaResponsaveis[responsavel] = valorPorResponsavel;
      }
    }
  }

  var total = document.getElementById("tela");
  total.innerHTML = "";

  for (const responsavel in somaResponsaveis) {
    console.log(`${responsavel}: ${somaResponsaveis[responsavel]}`);
    total.innerHTML += `<div class="resultado"><p>${responsavel}</p><span>R$${somaResponsaveis[responsavel]}</span></div>`;
  }
}

window.addEventListener("load", function () {
  ExibirLancamentos();
});

var aValue = localStorage.getItem("lancamentos");
