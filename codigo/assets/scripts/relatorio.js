function buscaDadosGrupos() {
    return fetch("../assets/data/lancamentos.json").then(function (response) {
      return response.json();
    });
}