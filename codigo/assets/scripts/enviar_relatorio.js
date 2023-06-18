// Definir as configurações da API
const CLIENT_ID =
  "82470380031-htog19vb0j5s2bc60o9vogc3i0d06n02.apps.googleusercontent.com";
const API_KEY = "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";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
];
const SCOPES = "https://www.googleapis.com/auth/gmail.send";

// Função para carregar a API do Gmail
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

// Inicializar o cliente da API
function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(function () {
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(function () {
          enviarRelatorioPorEmail();
        });
    });
}

// Função para enviar o relatório por email usando a API do Gmail
function enviarRelatorioPorEmail() {
  const body = `
    <h1>Total a pagar</h1>
    <div id="tela">
      ${document.getElementById("tela").innerHTML}
    </div>
  `;

  const raw = window.btoa(
    `From: "divideuai@gmail.com"\r\nTo: "erica.asnt@hotmail.com\r\nSubject: Relatório de lançamentos\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n${body}`
  );

  const request = gapi.client.gmail.users.messages.send({
    userId: "me",
    resource: {
      raw: raw,
    },
  });

  request.execute(function (response) {
    console.log("Email enviado:", response);
  });
}

// Adicionar um ouvinte de eventos para o botão de envio
document
  .getElementById("sendEmail")
  .addEventListener("click", handleClientLoad);
