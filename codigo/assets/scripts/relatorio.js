function ExibirLancamentos() {
  var totalHTML = "";

  var Lancamentos = JSON.parse(localStorage.getItem("lancamentos"));
  console.log(Lancamentos);

  // Objeto para armazenar as somas individuais de cada responsável
  const somaResponsaveis = {};

  //Percorrer o Array de Lançamentos
  for (let i = 0; i < Lancamentos.length; i++) {
    const responsaveis = Lancamentos[i].responsaveis.split(','); //Separar responsáveis nome dos responsáveis por ,
    const quantidadeResponsaveis = responsaveis.length; // Pega a quantidade de responsáveis
    const PegaValor = parseInt(Lancamentos[i].valor, 10); //Convertendo string para inteiro
    //Calcula o valor individual a pagar por evento
    const ValorEvento = PegaValor / quantidadeResponsaveis;

    //Percorrer o Array de responsáveis
    for (let j = 0; j < responsaveis.length; j++) {
      const responsavel = responsaveis[j];

      // Incrementar o ValorEvento para o responsável atual
      if (somaResponsaveis[responsavel]) {
        somaResponsaveis[responsavel] += ValorEvento;
      } else {
        somaResponsaveis[responsavel] = ValorEvento;
      }
    }
  }

  // Exibir a soma total para cada responsável
  for (const responsavel in somaResponsaveis) {
    console.log(`${responsavel}: ${somaResponsaveis[responsavel]}`);
    var total = document.getElementById("tela");
    total.innerHTML += `<div class="resultado"><p>${responsavel}</p><span>R$${somaResponsaveis[responsavel]}</span></div>`;
  }
}

var aValue = localStorage.getItem("lancamentos");

