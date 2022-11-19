

let cuentas = JSON.parse(localStorage.getItem("cuentas"));

if(cuentas==null){
    cuentas=[];
}


//variables
let indiceCuenta;

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
    

        let cuentaexistente = cuentas.some((elemento) => {
            return elemento.mail == mail;
        })

        if(cuentaexistente==true){
            sesioniniciada.innerHTML = "Mail existente"
        }
        else if(cuentaexistente==false){
            cuentas.push( new CuentaBancaria(nombre, mail, saldopesosarg, saldodolares));
            localStorage.setItem("cuentas", JSON.stringify(cuentas));
            indiceCuenta = cuentas.length - 1; 
            sesioniniciada.innerHTML = "Sesion iniciada"
        }
        else{
            sesioniniciada.innerHTML = "Error"
        }

}
    
    //ver de saldo
    saldo.onclick = () => {
        
        
        let sectionVerSaldo = document.getElementById("versaldo")
    
        if (cuentas.length != 0){
        
        sectionVerSaldo.innerHTML = "$ " + cuentas[indiceCuenta].saldopesosarg 
        let sectionVerSaldoDolares = document.getElementById("versaldodolares")
        sectionVerSaldoDolares.innerHTML = "U$s " + cuentas[indiceCuenta].saldodolares 
    }

    
        else{

            sectionVerSaldo.innerHTML = "Debe crear una cuenta primero"
    }
}

    
    //deposito pesos 
    
 
    botondeposito.onclick = (e) => {    
        e.preventDefault();
        
        let textoDepositoPesos = document.getElementById("textopesosdep");
        
        if (cuentas.length != 0){        
            let massaldo = parseFloat(document.getElementById("depositarpesos").value);
            
            if (isNaN(massaldo)) {
                return textoDepositoPesos.innerHTML = "Por favor, ingrese un numero válido";
              }
            else{
            
            cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg + massaldo
            textoDepositoPesos.innerHTML = "Depositó $" + massaldo
            localStorage.setItem("cuentas", JSON.stringify(cuentas))
        }
        }

        else{

            textoDepositoPesos.innerHTML = "Debe crear una cuenta primero"
        }
    }


    //deposito dolares

    botondepositodolares.onclick = (e) => {    
        e.preventDefault();
        
        let textoDepositoDolares = document.getElementById("textodolardep");
        
        
        if (cuentas.length != 0){
            let massaldodolares = parseFloat(document.getElementById("depositardolares").value);

            if (isNaN(massaldodolares)) {
                return textoDepositoDolares.innerHTML = "Por favor, ingrese un numero válido";
            }
            else{
            
                cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares + massaldodolares
                textoDepositoDolares.innerHTML = "Depositó u$d " + massaldodolares
                localStorage.setItem("cuentas", JSON.stringify(cuentas))
            }
        }
        else{

            textoDepositoDolares.innerHTML = "Debe crear una cuenta primero"
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
       
        if(cuentas.length != 0){       
            let cuenta = cuentas.find
            ((elemento) => ((elemento.nombre == nombre) && (elemento.mail == mail)))
            
            if(cuentas.includes(cuenta)){
                
                        indiceCuenta = cuentas.indexOf(cuenta);
                        sesioncambiada.innerHTML = "Sesion Iniciada"
                    }
            else{
                sesioncambiada.innerHTML = "Usuario Inexistente"
            }
        } 
        
        else{
            sesioncambiada.innerHTML = "No se encontro una cuenta"
        }            
};
        
    
    