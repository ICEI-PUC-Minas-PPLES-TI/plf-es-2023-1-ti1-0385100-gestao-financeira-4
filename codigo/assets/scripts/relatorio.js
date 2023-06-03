/*
fetch('../assets/data/lancamentos.json')
  .then(response => response.json()) // Converte a resposta em JSON
  .then(data => {
    // O JSON foi obtido com sucesso, e agora você pode percorrer o array de objetos
    data.forEach(Valor => {

      console.log(Valor);
      
    });
  })
  
  .catch(error => {
    // Ocorreu um erro na requisição
    console.error('Erro:', error);
  });
*/


var Lancamentos = [
  {
    "Descricao": "Rolê",
    "Categoria": "bebida",
    "Valor": 30.00,
    "Data": "12/05/2023",
    "Grupo": "amigos",
    "Responsaveis": [
      "renan", 
      "julio",
      "maria"]
  },
  {
    "Descricao": "Balada",
    "Categoria": "role",
    "Valor": 100.00,
    "Data": "12/05/2023",
    "Grupo": "amigos",
    "Responsaveis": [
      "renan",
      "julio"
    ]
  },
  {
    "Descricao": "Futebol",
    "Categoria": "lazer",
    "Valor": 20.00,
    "Data": "12/05/2023",
    "Grupo": "amigos",
    "Responsaveis": [
      "renan"
    ]
  }
]

function ExibirLancamentos () {
  var textoHTML = '';
  var textoHTML2 = '';

  //Percorrer o Array de Lançamentos
  for (let i = 0; i < Lancamentos.length; i++) {

    const responsaveis = Lancamentos[i].Responsaveis;
    const PegaValor = Lancamentos[i].Valor;

    const ValorEvento = PegaValor / responsaveis.length;

    var ValorPessoal = '';

    //Percorrer o Array de responsáveis
    for (let j = 0; j < responsaveis.length; j++) {
      console.log(responsaveis[j]);

      textoHTML += `Responsáveis evento ${i+1}: ${responsaveis[j]}<br>`

      //Adicionando o preço individual em cada usuário
      Lancamentos[i].Responsaveis[j] = ValorEvento;

      textoHTML2 += `Valor a pagar: ${Lancamentos[i].Responsaveis[j]}<br>`
      console.log(ValorEvento)
    }

    //Mostrar elementos na tela
    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML + textoHTML2;

  }

}