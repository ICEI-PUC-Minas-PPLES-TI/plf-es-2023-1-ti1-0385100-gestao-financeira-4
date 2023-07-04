function login(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    var loggedInUser = users.find(function(user) {
      return user.username === username && user.password === password;
    });
  
    if (loggedInUser) {
      alert("Login bem-sucedido!");
      window.location.href = "index.html";
    } else {
      alert("Usuário ou senha incorretos. Por favor, tente novamente.");
    }
  }
  
  document.querySelector("form").addEventListener("submit", login);
  