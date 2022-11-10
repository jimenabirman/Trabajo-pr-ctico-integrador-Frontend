const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const cant = document.getElementById("cant");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const botonEnviar = document.getElementById("enviar");


const valorTicket=200;
const descSinCategoria=0;
const descEstudiante=80;
const descTrainee=50;
const descJunior=15;

function calcTotal() {
    let cant=document.getElementById("cant").value
    
    let categoria=document.getElementById("categoria").value

    let total=0

    if (categoria==1) {
        total=cant*valorTicket 
    } else if (categoria==2) {
        total=cant*valorTicket*.2 
    } else if (categoria==3) {
        total=cant*valorTicket*.5 
    } else {
        total=cant*valorTicket*.85 
    }

    document.getElementById("total").innerHTML=`Total a Pagar: $ ${total}`
}

function resetear() {
document.getElementById("formul").reset()
return calcTotal()
}

function validarNombre(){
    if(nombre.value.length < 3){
        mensajeNombre.innerHTML = "Ingrese un nombre válido";
    }
        else {mensajeNombre.innerHTML = "Nombre correcto!";
    }

    }
    botonEnviar.addEventListener("click", validarNombre);

    function validarApellido(){
        if(apellido.value.length < 3){
            mensajeApellido.innerHTML = "Ingrese un apellido válido";
        }
            else {mensajeApellido.innerHTML = "Apellido correcto!";
        }
    
        }
        botonEnviar.addEventListener("click", validarApellido);

        function validarEmail(){
            if(!expRegular.test(email.value)){
                mensajeEmail.innerHTML ="La dirección de mail no es correcta";}
                    else {mensajeEmail.innerHTML ="Email correcto";
                    }
            }
            
            botonEnviar.addEventListener("click", validarEmail);

            function validarCant(){
                if(cant.value <= 0){
                    mensajeCant.innerHTML = "Ingrese una cantidad";
                }
                    else {mensajeCant.innerHTML = "Gracias por ingresar la cantidad!";
                }
            
                }
                botonEnviar.addEventListener("click", validarCant);

 
                