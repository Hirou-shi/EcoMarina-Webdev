const emailLogin ="email"
const senhaLogin =123

function verificar() {
    var emailUsuario = document.getElementById('email1')
    var senhaUsuario = document.getElementById('senha1')

    if (emailUsuario == emailLogin & senhaUsuario == senhaLogin){
       alert("parabéns, você está logado")
    }
    else{
        alert("Login ou senha está errado!")
    }
}