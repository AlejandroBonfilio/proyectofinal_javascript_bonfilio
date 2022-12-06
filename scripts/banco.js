

let cuentas = JSON.parse(localStorage.getItem("cuentas"));

if(cuentas==null){
    cuentas=[];
}


//variables
let indiceCuenta;
let inicioSesion = false;

    //crear cuenta
    let nombre1 = document.getElementById("name");
    let mail1 = document.getElementById("email");
    let botonCrearCuenta = document.getElementById("enviar");
    let sesioniniciada = document.getElementById("iniciodesesion");
    
    botonCrearCuenta.onclick = (e) => {
    e.preventDefault();
    let nombre = nombre1.value;      
    let mail = mail1.value;
    let saldopesosarg = parseInt(0);
    let saldodolares = parseInt(0);
    
        
        let formatoDeMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        let cuentaexistente = cuentas.some((elemento) => {
            return elemento.mail == mail;
        })
        
        
        if ((nombre!="")||(mail!="")){
        if((formatoDeMail.test(mail))==true){
        //si intentas iniciar sesion con un mail existente
        if(cuentaexistente==true){
            sesioniniciada.innerHTML = "Mail existente"
            Swal.fire({
                title: 'Mail en uso',
                text: 'El mail con el que ha intentado registrarse ya tiene una cuenta asociada',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
        }
        
        
        //registro exitoso
        else if(cuentaexistente==false){
            cuentas.push( new CuentaBancaria(nombre, mail, saldopesosarg, saldodolares));
            localStorage.setItem("cuentas", JSON.stringify(cuentas));
            indiceCuenta = cuentas.length - 1; 
            sesioniniciada.innerHTML = "Sesion iniciada"
            Swal.fire({
                title: 'Exito',
                text: 'Se ha registrado correctamente',
                icon: 'success',
                showConfirmButton: false,
                timer: 1700
            })
            inicioSesion = true;
        }
        
        else{
            sesioniniciada.innerHTML = "Error"
        }
    }
    else{
        sesioniniciada.innerHTML = "No es un formato de mail"
        Swal.fire({
            title: 'Mail Invalido',
            text: 'No es un formato de mail',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })
    }
}
    else{
        sesioniniciada.innerHTML = "Debe ingresar un valor"
            Swal.fire({
                title: 'Valor Invalido',
                text: 'Debe ingresar un valor',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
    }
}
  
    //ver saldo
    saldo.onclick = () => {
        
        
        let sectionVerSaldo = document.getElementById("versaldo")
        
        //validacion si hay cuenta existente
        if (cuentas.length != 0){
            //si ademas de cuenta existente hay inicio de sesion valido o true
            if(inicioSesion==true){
                sectionVerSaldo.innerHTML = "$ " + cuentas[indiceCuenta].saldopesosarg 
                let sectionVerSaldoDolares = document.getElementById("versaldodolares")
                sectionVerSaldoDolares.innerHTML = "U$S " + cuentas[indiceCuenta].saldodolares
            } 
            //si no hay inicio de sesion valido o true
            else{
                sectionVerSaldo.innerHTML = "Debe registrarse o iniciar sesion"  
                //sweet alert
                Swal.fire({
                    title: 'Error!',
                    text: 'Debe registrarse o iniciar sesion',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
                }
        }
        else{

            sectionVerSaldo.innerHTML = "Debe registrarse o iniciar sesion"
            //sweet alert
            Swal.fire({
                title: 'Error!',
                text: 'Debe registrarse o iniciar sesion',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })

    }
}

    
    //deposito pesos 
    
 
    botondeposito.onclick = (e) => {    
        e.preventDefault();
        
        let textoDepositoPesos = document.getElementById("textopesosdep");
        //inicio de sesion valido
        if ((cuentas.length != 0) && (inicioSesion==true)){        
            
            let massaldo = parseFloat(document.getElementById("depositarpesos").value);
            //validacion a prueba de NaN
            if (isNaN(massaldo)) {
                return textoDepositoPesos.innerHTML = "Por favor, ingrese un numero válido";
              }
            // deposito exitoso
            else{
            
            cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg + massaldo
            textoDepositoPesos.innerHTML = "Depositó $" + massaldo
            localStorage.setItem("cuentas", JSON.stringify(cuentas))

            Swal.fire({
                title: 'Exito',
                text: "Depositó $" + massaldo,
                icon: 'success',
                showConfirmButton: false,
                timer: 1700
            })
        }
        }
        //si no hay cuenta iniciada , sale esto
        else{

            textoDepositoPesos.innerHTML = "Debe crear una cuenta primero"
            Swal.fire({
                title: 'Error!',
                text: 'Debe crear una cuenta primero',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            
        }
    }


    //deposito dolares

    botondepositodolares.onclick = (e) => {    
        e.preventDefault();
        
        let textoDepositoDolares = document.getElementById("textodolardep");
        
        //inicio de sesion valido
        if ((cuentas.length != 0) && (inicioSesion==true)){
            let massaldodolares = parseFloat(document.getElementById("depositardolares").value);
            //validacion a prueba de NaN
            if (isNaN(massaldodolares)) {
                return textoDepositoDolares.innerHTML = "Por favor, ingrese un numero válido";
            }
            // deposito exitoso
            else{
            
                cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares + massaldodolares
                textoDepositoDolares.innerHTML = "Depositó U$S " + massaldodolares
                localStorage.setItem("cuentas", JSON.stringify(cuentas))

                Swal.fire({
                    title: 'Exito',
                    text: "Depositó U$S " + massaldodolares,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1700
                })
            }
        }
        //no hay iniciio de sesion
        else{

            textoDepositoDolares.innerHTML = "Debe crear una cuenta primero"
            Swal.fire({
                title: 'Error!',
                text: 'Debe crear una cuenta primero',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
    }
    
    //cambiar de cuenta
     let sesioncambiada = document.getElementById("cambiosesion");

    botondebuscarcuenta.onclick = (e) => {
        e.preventDefault();
        
        let nombrecambiocuenta = document.getElementById("nombredecuenta");
        let nombre = nombrecambiocuenta.value
        let mailcambiocuenta = document.getElementById("maildecuenta");
        let mail = mailcambiocuenta.value
        //cambio de cuenta exitoso
        if(cuentas.length != 0){       
            let cuenta = cuentas.find
            ((elemento) => ((elemento.nombre == nombre) && (elemento.mail == mail)))
            
            if(cuentas.includes(cuenta)){
                
                        indiceCuenta = cuentas.indexOf(cuenta);
                        sesioncambiada.innerHTML = "Sesion Iniciada"
                        Swal.fire({
                            title: 'Exito',
                            text: 'Se ha iniciado sesion correctamente',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1700
                        })

                        inicioSesion = true;
                    }
            //cambio de cuenta fallido - mail no registrado        
            else{
                sesioncambiada.innerHTML = "Usuario Inexistente"
                Swal.fire({
                    title: 'Oh no!',
                    text: 'El usuario no existe, debe registrarse primero',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                })
            }
        } 
        
        else{
            sesioncambiada.innerHTML = "No se encontro una cuenta"
            Swal.fire({
                title: 'Error',
                text: 'No se encontro una cuenta',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }            
};
        
