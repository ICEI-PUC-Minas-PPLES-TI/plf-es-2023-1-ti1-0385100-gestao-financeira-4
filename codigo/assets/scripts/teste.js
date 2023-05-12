// Busca os dados no Local Storage
function buscaDadosLocalStorage() {
    const cardsLocalStorage = localStorage.getItem("db_cards");
    return cardsLocalStorage ? JSON.parse(cardsLocalStorage) : [];
  }
  
  // Salva os dados no Local Storage
  function salvaDadosLocalStorage(cards) {
    localStorage.setItem("db_cards", JSON.stringify(cards));
  }
  
  // Monta os cards com os dados dos grupos
  function exibeGruposNaTela(grupos) {
    const cardsContainer = document.getElementById("listagem-grupos");
    var textoHtml = "";
  
    for (i = 0; i < grupos.length; i++) {
      const grupo = grupos[i];
      textoHtml += `<div class="col-md-3 mb-3">
      <div class="card h-100">
          <img src="${grupo.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <div class="botoes headline">
              <h5 class="card-title">${grupo.titulo}</h5>
                  <button class="btn btn-primary btn-sm botaoEditar" data-card-id="${grupo.id}" onclick="abreModalEdicao('${grupo.id}')"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm" id="botaoExcluir"><i class="bi bi-trash"></i></button>
              </div>
              <h6 class="card-subtitle mb-2 text-body-secondary mt-1">${grupo.quantidade} Eventos</h6>
          </div>
      </div>
  </div>`;
    }
  
    // Adiciona os cards ao container na tela
    cardsContainer.innerHTML = textoHtml;
  }
  
  // Busca os dados do JSON
  function buscaDadosGrupos() {
    return fetch("../assets/data/db_grupos.json").then(function (response) {
      return response.json();
    });
  }
  
  /// Exibe os cards do Local Storage e do JSON na tela
  function exibeTodosGrupos() {
    buscaDadosGrupos().then(function (grupos) {
      const cardsLocalStorage = buscaDadosLocalStorage();
      const todosGrupos = [...grupos, ...cardsLocalStorage];
      exibeGruposNaTela(todosGrupos);
    });
  }
  
  // Seleciona o formulário e adiciona um evento de envio
  const cardForm = document.getElementById("cardForm");
  cardForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const cardTitle = document.getElementById("cardTitle").value;
    const cardDescription = document.getElementById("cardEventos").value;
    const cardImage = document.getElementById("cardImage").value;
  
    const cardId = document.getElementById("cardId").value;
    let newCard;
    if (cardId) {
      const cardsLocalStorage = buscaDadosLocalStorage();
      const cardIndex = cardsLocalStorage.findIndex((card) => card.id === cardId);
      if (cardIndex !== -1) {
        cardsLocalStorage[cardIndex].titulo = cardTitle;
        cardsLocalStorage[cardIndex].quantidade = cardDescription;
        cardsLocalStorage[cardIndex].image = cardImage;
        salvaDadosLocalStorage(cardsLocalStorage);
  
        document.getElementById("cardId").value = "";
      }
    } else {
       newCard = {
        id: Math.random().toString(36).substr(2, 9),
        titulo: cardTitle,
        quantidade: cardDescription,
        image: cardImage,
      }
    }
    const cardsLocalStorage = buscaDadosLocalStorage();
    cardsLocalStorage.push(newCard);
    salvaDadosLocalStorage(cardsLocalStorage);
  
    cardForm.reset(newCard);
  
    exibeTodosGrupos();
  });
  
  function abreModalEdicao(cardId) {
    const cardsLocalStorage = buscaDadosLocalStorage();
  
    const card = cardsLocalStorage.find((card) => card.id === cardId);
  
    document.getElementById("cardTitle").value = card.titulo;
    document.getElementById("cardEventos").value = card.quantidade;
    document.getElementById("cardImage").value = card.image;
  
    document.getElementById("cardId").value = cardId;
  
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  }
  
  window.addEventListener("load", exibeTodosGrupos);
  