function validar(){
    if (document.formulario.usuario.value == "") {
        alert("Es necesario el nombre del usuario");
        return false;
    }
    return true;
}