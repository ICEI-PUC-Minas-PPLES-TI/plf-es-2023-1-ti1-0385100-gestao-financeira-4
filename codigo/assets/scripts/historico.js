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
            <td>${historico.descricao}</td>
            <td><span style="display: inline-block; padding: 1px 10px; background-color: ${corSpan}; border-radius: 12px; color: white;">${historico.categoria}</span></td>
            <td>R$${historico.valor}</td>
            <td>${historico.data}</td>
            <td>${historico.grupo}</td>
            <td>${historico.responsaveis}</td>
          `;
    row.style.backgroundColor = corLinha; // Define a cor da linha

    tabelaBody.appendChild(row);
  }
}

// Busca os dados do JSON
function buscaDadosGrupos() {
  return fetch("../assets/data/historico.json").then(function (response) {
    return response.json();
  });
}

function exibeLinhasTabela() {
  buscaDadosGrupos().then(function (historicos) {
    exibeHistoricoNaTela(historicos);
  });
}

window.addEventListener("load", exibeLinhasTabela);
