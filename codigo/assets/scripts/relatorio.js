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

  for (let i = 0; i < lancamentosFiltrados.length; i++) {
    const responsaveis = lancamentosFiltrados[i].responsaveis
      .split(",")
      .map((responsavel) => responsavel.trim());
    const quantidadeResponsaveis = responsaveis.length;
    const valor = parseInt(lancamentosFiltrados[i].valor, 10);
    const valorPorResponsavel = valor / quantidadeResponsaveis;

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
    total.innerHTML += `<div class="resultado"><p>${responsavel}</p><span>R$${somaResponsaveis[responsavel].toFixed(2)}</span></div>`;
  }
}

window.addEventListener("load", function () {
  ExibirLancamentos();
});

var aValue = localStorage.getItem("lancamentos");
