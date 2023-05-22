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

function exibeHistoricoNaTela(historicos) {
  const tabelaBody = document.getElementById("tabela-body");
  tabelaBody.innerHTML = ""; // Limpa o container da tabela

  for (let i = 0; i < historicos.length; i++) {
    const historico = historicos[i];
    const row = document.createElement("tr");
    const corSpan = gerarCorAleatoria(); // Gerar cor aleatória
    const corLinha = historico.id % 2 === 1 ? "#ECECEC" : "#FFFFFF"; // Verifica se o ID é ímpar e define a cor da linha
      row.innerHTML = `
            <tr>
            <td>${historico.descricao}</td>
            <td><span style="display: inline-block; padding: 1px 10px; background-color: ${corSpan}; border-radius: 12px; color: white;">${historico.categoria}</span></td>
            <td>R$${historico.valor}</td>
            <td>${historico.data}</td>
            <td>${historico.grupo}</td>
            <td>${historico.responsaveis}</td>
            </tr>
          `;
    row.style.backgroundColor = corLinha; // Define a cor da linha

    tabelaBody.appendChild(row);
  }
}

// Define os elementos do menu dropdown
const dropdownItemIndividual = document.getElementById("tabela-individual");
const dropdownItemCompartilhado = document.getElementById("tabela-compartilhado");

dropdownItemIndividual.addEventListener("click", function () {
    buscaDadosTabela("../assets/data/historico_individual.json").then(function (historicos) {
    exibeHistoricoNaTela(historicos);
  });
});

dropdownItemCompartilhado.addEventListener("click", function () {
    buscaDadosTabela("../assets/data/historico_compartilhado.json").then(function (historicos) {
    exibeHistoricoNaTela(historicos);
  });
});

function buscaDadosTabela(url) {
  return fetch(url).then(function (response) {
    return response.json();
  });
}

function exibeLinhasTabela() {
    buscaDadosTabela().then(function (historicos) {
    exibeHistoricoNaTela(historicos);
  });
}

window.addEventListener("load", exibeLinhasTabela);
