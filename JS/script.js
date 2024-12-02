alert("Olá, seja bem-vindo!");

document.getElementById("enviar").addEventListener("click",validaf)
function validaf(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" ){
        alert("Pronto, enviado! Obrigada pela participação!")
    }else{
        alert("Por favor, preencha os campos vazios.")
    }
}