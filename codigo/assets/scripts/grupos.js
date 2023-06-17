function buscaDadosLocalStorage() {
  const cardsLocalStorage = localStorage.getItem("db_cards");
  return cardsLocalStorage ? JSON.parse(cardsLocalStorage) : [];
}

function salvaDadosLocalStorage(cards) {
  localStorage.setItem("db_cards", JSON.stringify(cards));
}

function exibeGruposNaTela(grupos) {
  const cardsContainer = document.getElementById("listagem-grupos");
  cardsContainer.innerHTML = ""; // Limpa o container de cards

  for (let i = 0; i < grupos.length; i++) {
    const grupo = grupos[i];
    const cardElement = document.createElement("div");
    cardElement.classList.add("col-md-3", "mb-3");
    cardElement.innerHTML = `
      <div class="card h-100">
        <img src="${grupo.image}" class="card-img-top" alt="..." style="height: 150px; object-fit: cover;" onclick="redirecionarEvento('${grupo.id}')">
        <div class="card-body">
          <div class="botoes d-flex justify-content-between align-items-center">
            <h5 class="card-title" style="color: #2ed47a">${grupo.titulo}</h5>
            <div>
              <button class="btn btn-primary btn-sm botaoEditar" data-card-id="${grupo.id}" onclick="abreModalEdicao('${grupo.id}')"><i class="bi bi-pencil-square"></i></button>
              <button class="btn btn-danger btn-sm botaoExcluir" data-card-id="${grupo.id}"><i class="bi bi-trash"></i></button>
            </div>
          </div>
          <h6 class="card-subtitle mb-2 text-body-secondary mt-1">${grupo.quantidade} Eventos</h6>
        </div>
      </div>
    `;

    cardsContainer.appendChild(cardElement);
  }
}

function redirecionarEvento(cardId) {
  window.location.href = `/../codigo/modulos/eventos.html/${cardId}`;
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

function buscaDadosGrupos() {
  return fetch("../assets/data/db_grupos.json").then(function (response) {
    return response.json();
  });
}

function exibeTodosGrupos() {
  buscaDadosGrupos().then(function (grupos) {
    const cardsLocalStorage = buscaDadosLocalStorage();
    const todosGrupos = [...grupos, ...cardsLocalStorage];
    exibeGruposNaTela(todosGrupos);
    adicionarOuvintesExcluir();
  });
}

const cardForm = document.getElementById("cardForm");
cardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardTitle = document.getElementById("cardTitle").value;
  const cardDescription = document.getElementById("cardEventos").value;
  const cardImage = document.getElementById("cardImage").value;

  const cardId = document.getElementById("cardId").value;

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
    const newCard = {
      id: Math.random().toString(36).substr(2, 9),
      titulo: cardTitle,
      quantidade: cardDescription,
      image: cardImage,
    };

    const cardsLocalStorage = buscaDadosLocalStorage();
    cardsLocalStorage.push(newCard);
    salvaDadosLocalStorage(cardsLocalStorage);

    cardForm.reset();
  }

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

const BloqueiaNumero = document.getElementById("cardImage");
BloqueiaNumero.addEventListener("keydown", function (event) {
  if (event.key >= 0 && event.key <= 9) {
    event.preventDefault();
    alert("Esse não é um campo para números. Adicione a URL da imagem");
  }
});

window.addEventListener("load", exibeTodosGrupos);
