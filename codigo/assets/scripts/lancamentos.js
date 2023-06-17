function gerarCorAleatoria() {
  const letrasHex = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += letrasHex[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function aplicarCoresAleatorias() {
  const spans = document.getElementsByClassName("cor-aleatoria");
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    const cor = gerarCorAleatoria();
    span.style.backgroundColor = cor;
  }
}

function exibeLancamentoNaTela(lancamentos) {
  const tabelaBody = document.getElementById("tabela-body");
  tabelaBody.innerHTML = "";

  const lancamentosArmazenados =
    JSON.parse(localStorage.getItem("lancamentos")) || [];

  const todosLancamentos = [...lancamentos, ...lancamentosArmazenados];

  for (let i = 0; i < todosLancamentos.length; i++) {
    const lancamento = todosLancamentos[i];
    const row = document.createElement("tr");
    const corSpan = gerarCorAleatoria();
    const corLinha = i % 2 === 1 ? "#ECECEC" : "#FFFFFF";
    row.innerHTML = `
      <td>${lancamento.descricao}</td>
      <td><span style="display: inline-block; padding: 1px 10px; background-color: ${corSpan}; border-radius: 12px; color: white;">${lancamento.categoria}</span></td>
      <td>R$${lancamento.valor}</td>
      <td>${lancamento.data}</td>
      <td>${lancamento.grupo}</td>
      <td>${lancamento.responsaveis}</td>
    `;
    row.style.backgroundColor = corLinha;

    tabelaBody.appendChild(row);
  }
}

function adicionarLancamento(event) {
  event.preventDefault();

  const descricao = document.getElementById("colunaDescricao").value;
  const categoria = document.getElementById("colunaCategoria").value;
  const valor = document.getElementById("colunaValor").value;
  const data = document.getElementById("colunaData").value;
  const grupo = document.getElementById("colunaGrupo").value;
  const responsaveis = document.getElementById("colunaResponsaveis").value;

  const lancamento = {
    descricao,
    categoria,
    valor,
    data,
    grupo,
    responsaveis,
  };

  const lancamentos = JSON.parse(localStorage.getItem("lancamentos")) || [];
  lancamentos.push(lancamento);
  localStorage.setItem("lancamentos", JSON.stringify(lancamentos));

  adicionarLancamentoNaTela(lancamento);

  document.getElementById("cardForm").reset();

  exibeLancamentoNaTela(lancamentos);
}

function buscaDadosTabela(url) {
  return fetch(url).then(function (response) {
    return response.json();
  });
}

function exibeLinhasTabela() {
  const url = "../assets/data/lancamentos.json";
  buscaDadosTabela(url).then(function (lancamentos) {
    exibeLancamentoNaTela(lancamentos);
  });
}

window.addEventListener("load", exibeLinhasTabela);

const form = document.getElementById("cardForm");
form.addEventListener("submit", function (event) {
  adicionarLancamento(event);
  exibeLancamentoNaTela(JSON.parse(localStorage.getItem("lancamentos")) || []);
});

// Redirecionar para a página de Cálculo Final quando o botão "Cálculo Final" é clicado
document
  .getElementById("calculoFinalButton")
  .addEventListener("click", function () {
    window.location.href = "relatorio.html";
  });
