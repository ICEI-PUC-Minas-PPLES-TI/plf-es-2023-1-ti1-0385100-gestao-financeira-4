function buscaDadosLocalStorage() {
  const cardsLocalStorage = localStorage.getItem("db_cards_eventos");
  return cardsLocalStorage ? JSON.parse(cardsLocalStorage) : [];
}

function salvaDadosLocalStorage(cards) {
  localStorage.setItem("db_cards_eventos", JSON.stringify(cards));
}

function exibeEventosNaTela(eventos) {
  const cardsContainer = document.getElementById("listagem-eventos");
  var textoHtml = "";

  for (i = 0; i < eventos.length; i++) {
    const evento = eventos[i];
    textoHtml += `<div class="col-md-3 mb-3">
      <div class="card h-100">
          <img src="${evento.image}" class="card-img-top" alt="..." style="height: 150px; object-fit: cover;" onclick="redirecionarEvento('${evento.id}')">
          <div class="card-body">
              <div class="botoes d-flex justify-content-between align-items-center">
              <h5 class="card-title" style="color: #2ed47a">${evento.titulo}</h5>
              <div>
                  <button class="btn btn-primary btn-sm botaoEditar" data-card-id="${evento.id}" onclick="abreModalEdicao('${evento.id}')"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm botaoExcluir" data-card-id="${evento.id}"><i class="bi bi-trash"></i></button>
              </div>
              </div>
              <h6 class="card-subtitle mb-2 text-body-secondary mt-1">${evento.grupo}</h6>
          </div>
      </div>
  </div>`;
  }

  cardsContainer.innerHTML = textoHtml;
}

function redirecionarEvento(cardId) {
  window.location.href = `/../codigo/modulos/lancamentos.html?id=${cardId}`;
}

function adicionarOuvintesExcluir() {
  const botaoExcluirArray = document.getElementsByClassName("botaoExcluir");
  for (let i = 0; i < botaoExcluirArray.length; i++) {
    const botaoExcluir = botaoExcluirArray[i];
    botaoExcluir.addEventListener("click", handleExcluirCard);
  }
}

function handleExcluirCard(event) {
  const cardId = event.target.getAttribute("data-card-id");
  excluirCard(cardId);
}

function excluirCard(cardId) {
  const cardsLocalStorage = buscaDadosLocalStorage();
  const updatedCards = cardsLocalStorage.filter((card) => card.id !== cardId);
  salvaDadosLocalStorage(updatedCards);

  const cardElement = document.querySelector(`[data-card-id="${cardId}"]`);
  if (cardElement) {
    cardElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
}

function buscaDadosEventos() {
  return fetch("../assets/data/eventos.json").then(function (response) {
    return response.json();
  });
}

function exibeTodosEventos() {
  buscaDadosEventos().then(function (grupos) {
    const cardsLocalStorage = buscaDadosLocalStorage();
    const todosGrupos = [...grupos, ...cardsLocalStorage];
    exibeEventosNaTela(todosGrupos);
    adicionarOuvintesExcluir();
  });
}

const cardForm = document.getElementById("cardForm");
cardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardTitle = document.getElementById("cardTitle").value;
  const cardGrupos = document.getElementById("cardGrupos").value;
  const cardImage = document.getElementById("cardImage").value;

  const cardId = document.getElementById("cardId").value;

  if (cardId) {
    const cardsLocalStorage = buscaDadosLocalStorage();
    const cardIndex = cardsLocalStorage.findIndex((card) => card.id === cardId);
    if (cardIndex !== -1) {
      cardsLocalStorage[cardIndex].titulo = cardTitle;
      cardsLocalStorage[cardIndex].grupo = cardGrupos;
      cardsLocalStorage[cardIndex].image = cardImage;
      salvaDadosLocalStorage(cardsLocalStorage);

      document.getElementById("cardId").value = "";
    }
  } else {
    const newCard = {
      id: Math.random().toString(36).substr(2, 9),
      titulo: cardTitle,
      grupo: cardGrupos,
      image: cardImage,
    };

    const cardsLocalStorage = buscaDadosLocalStorage();
    cardsLocalStorage.push(newCard);
    salvaDadosLocalStorage(cardsLocalStorage);

    cardForm.reset();
  }

  exibeTodosEventos();
});

function abreModalEdicao(cardId) {
  const cardsLocalStorage = buscaDadosLocalStorage();

  const card = cardsLocalStorage.find((card) => card.id === cardId);

  document.getElementById("cardTitle").value = card.titulo;
  document.getElementById("cardGrupos").value = card.grupo;
  document.getElementById("cardImage").value = card.image;

  document.getElementById("cardId").value = cardId;

  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}

const BloqueiaNumero = document.getElementById("cardImage");
BloqueiaNumero.addEventListener("keydown", function (event) {
  if (event.key >= 0 && event.key <= 9) {
    event.preventDefault();
    alert("Esse não é um campo para números. Adicione a URL da imagem");
  }
});

window.addEventListener("load", exibeTodosEventos);
