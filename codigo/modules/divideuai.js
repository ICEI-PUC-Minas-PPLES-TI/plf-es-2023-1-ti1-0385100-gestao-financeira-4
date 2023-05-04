fetch('./componentes/eventos.html')
  .then(response => response.text())
  .then(html => {
    console.log(html);
  })
  .catch(error => console.error(error));