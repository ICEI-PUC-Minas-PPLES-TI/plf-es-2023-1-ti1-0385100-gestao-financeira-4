function createAccount(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var user = {
      username: username,
      email: email,
      password: password
    };
  
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    var existingUser = users.find(function(user) {
      return user.username === username;
    });
  
    if (existingUser) {
      alert("Usuário já existe. Por favor, escolha outro nome de usuário.");
    } else {
      users.push(user);
  
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Conta criada com sucesso!");
      window.location.href = "login.html"; 
    }
  }
  
  document.querySelector("form").addEventListener("submit", createAccount);
  