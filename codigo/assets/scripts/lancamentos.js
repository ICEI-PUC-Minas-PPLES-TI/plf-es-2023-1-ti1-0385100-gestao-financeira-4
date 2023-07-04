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

  for (let i = 0; i < lancamentos.length; i++) {
    const lancamento = lancamentos[i];
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

function obterIdDaUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function adicionarLancamento(event) {
  event.preventDefault();

  const descricao = document.getElementById("colunaDescricao").value;
  const categoria = document.getElementById("colunaCategoria").value;
  const valor = document.getElementById("colunaValor").value;
  const data = document.getElementById("colunaData").value;
  const grupo = document.getElementById("colunaGrupo").value;
  const responsaveis = document.getElementById("colunaResponsaveis").value;
  const id = obterIdDaUrl();
  const lancamento = {
    descricao,
    categoria,
    valor,
    data,
    grupo,
    responsaveis,
    id,
  };

  const lancamentos = JSON.parse(localStorage.getItem("lancamentos")) || [];
  lancamentos.push(lancamento);
  localStorage.setItem("lancamentos", JSON.stringify(lancamentos));

  adicionarLancamentoNaTela(lancamento);

  document.getElementById("cardForm").reset();

  exibeLinhasTabela();

  fecharConta(id);
}

function fecharConta(eventId) {
  window.location.href = `relatorio.html?id=${eventId}`;
}

function exibeLinhasTabela() {
  const cardId = obterIdDaUrl();
  const lancamentosArmazenados =
    JSON.parse(localStorage.getItem("lancamentos")) || [];
  const lancamentosFiltrados = lancamentosArmazenados.filter(
    (lancamento) => lancamento.id === cardId
  );
  exibeLancamentoNaTela(lancamentosFiltrados);
}

window.addEventListener("load", function () {
  const cardId = obterIdDaUrl();
  exibeLinhasTabela(cardId);
});

const form = document.getElementById("cardForm");
form.addEventListener("submit", function (event) {
  const id = obterIdDaUrl(); // Obtém o ID do evento da URL
  adicionarLancamento(event, id);
});

document
  .getElementById("calculoFinalButton")
  .addEventListener("click", function () {
    const id = obterIdDaUrl(); // Obtém o ID do evento da URL
    fecharConta(id);
  });
