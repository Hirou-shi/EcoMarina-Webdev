function verificar(){
    var emailUsuario = document.getElementById("email").value;
    var senhaUsuario = document.getElementById("senha").value;

   if (emailUsuario == "1234" && senhaUsuario == 1234){
       alert("parabéns, você está logado")
        window.location = "/src/pages/home/index.html"
    }
    else{
        alert("Login ou senha está errado!")
    }
}