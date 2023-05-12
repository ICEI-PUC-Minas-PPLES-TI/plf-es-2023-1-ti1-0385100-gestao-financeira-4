// Array de cards
let cards = [];

// Seleciona o formulário e adiciona um evento de envio
const cardForm = document.getElementById("cardForm");
cardForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne o comportamento padrão de enviar o formulário

  // Obtém os valores dos campos do formulário
  const cardTitle = document.getElementById("cardTitle").value;
  const cardDescription = document.getElementById("cardDescription").value;
  const cardImage = document.getElementById("cardImage").value;

  // Cria um novo objeto card
  const newCard = {
    id: cards.length + 1,
    title: cardTitle,
    description: cardDescription,
    image: cardImage,
  };

  // Adiciona o novo card ao array de cards
  cards.push(newCard);

  // Limpa os campos do formulário
  cardForm.reset();

  // Atualiza a lista de cards
  displayCards();
});

// Função para exibir os cards
function displayCards() {
  // Seleciona o container dos cards
  const cardContainer = document.querySelector(".card-container");

  // Limpa o container
  cardContainer.innerHTML = "";

  // Cria um card para cada objeto no array de cards
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <img src="${card.image}" class="card-img-top" alt="${card.title}">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.description}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary" onclick="editCard(${card.id})">Editar</button>
        <button class="btn btn-danger" onclick="deleteCard(${card.id})">Excluir</button>
      </div>
    `;
    cardContainer.appendChild(cardElement);
  });
}