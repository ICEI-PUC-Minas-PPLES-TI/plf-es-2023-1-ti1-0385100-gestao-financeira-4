// Função para salvar os dados no JSON e atualizar a tabela e o gráfico
function salvarDados() {
    // Função para adicionar um lançamento à tabela
function adicionarLancamentoATabela(lancamento) {
  var tabela = document.getElementById("tabela-lancamentos");
  var linha = document.createElement("tr");

  var colunaDescricao = document.createElement("td");
  colunaDescricao.textContent = lancamento.descricao;
  linha.appendChild(colunaDescricao);

  var colunaCategoria = document.createElement("td");
  colunaCategoria.textContent = lancamento.categoria;
  linha.appendChild(colunaCategoria);

  var colunaValor = document.createElement("td");
  colunaValor.textContent = lancamento.valor;
  linha.appendChild(colunaValor);

  var colunaData = document.createElement("td");
  colunaData.textContent = lancamento.data;
  linha.appendChild(colunaData);

  var colunaGrupo = document.createElement("td");
  colunaGrupo.textContent = lancamento.grupo;
  linha.appendChild(colunaGrupo);

  var colunaResponsaveis = document.createElement("td");
  colunaResponsaveis.textContent = lancamento.responsaveis;
  linha.appendChild(colunaResponsaveis);

  tabela.appendChild(linha);
}

    // Obter os valores inseridos pelo usuário
    var descricao = document.getElementById("Descrição").value;
    var categoria = document.getElementById("Categoria").value;
    var valor = document.getElementById("Valor").value;
    var data = document.getElementById("Data").value;
    var grupo = document.getElementById("Grupo").value;
    var responsaveis = document.getElementById("Responsaveis").value;
  
    // Criar um objeto com os dados
    var novoLancamento = {
      "descricao": descricao,
      "categoria": categoria,
      "valor": valor,
      "data": data,
      "grupo": grupo,
      "responsaveis": responsaveis
    };
  
    // Adicionar o novo lançamento à tabela
    adicionarLancamentoATabela(novoLancamento);
  
    // Adicionar o novo lançamento ao gráfico
    adicionarLancamentoAoGrafico(novoLancamento);
  
    // Limpar os campos de entrada
    limparCamposDeEntrada();
  }
  
  // Função para adicionar um lançamento à tabela
  function adicionarLancamentoATabela(lancamento) {
    var tabela = document.querySelector("table tbody");
    var linha = document.createElement("tr");
  
    linha.innerHTML = `
      <td>${lancamento.descricao}</td>
      <td>${lancamento.categoria}</td>
      <td>${lancamento.valor}</td>
      <td>${lancamento.data}</td>
      <td>${lancamento.grupo}</td>
      <td>${lancamento.responsaveis}</td>
    `;
  
    tabela.appendChild(linha);
  }
  
  // Função para adicionar um lançamento ao gráfico
  function adicionarLancamentoAoGrafico(lancamento) {
    // Seu código para atualizar o gráfico com o novo lançamento
  }
  
  // Função para limpar os campos de entrada após salvar os dados
  function limparCamposDeEntrada() {
    document.getElementById("Descrição").value = "";
    document.getElementById("Categoria").value = "";
    document.getElementById("Valor").value = "";
    document.getElementById("Data").value = "";
    document.getElementById("Grupo").value = "";
    document.getElementById("Responsaveis").value = "";
  }
  