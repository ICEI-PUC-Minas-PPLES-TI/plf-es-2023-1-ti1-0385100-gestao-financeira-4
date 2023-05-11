function buscaGruposAPI() {
    const cardsContainer = document.getElementById("listagem-grupos");
  
    fetch("../assets/data/db_grupos.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (db) {
        var textoHtml = "";
        for (i = 0; i < db.length; i++) {
          const grupo = db[i];
          textoHtml += `<div class="col-md-3">
          <div class="card h-100">
          <div class="card-body">
            <img src="${grupo.image}" class="card-img-top" alt="...">
              <h5 class="card-title">${grupo.titulo}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
              <h6 class="card-subtitle mb-2 text-body-secondary">${grupo.evento.quantidade} Eventos</h6>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>`;
        }
  
        cardsContainer.innerHTML = textoHtml;
      });
  }
  
  window.addEventListener("load", buscaGruposAPI);
  