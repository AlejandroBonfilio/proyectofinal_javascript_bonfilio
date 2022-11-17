
//array de cuentas
const cuentas = [];


//variables
let indiceCuenta;


//Menu 
    //document.getElementById("bienvenida")
    //let bienvenida.innerHTML = "Bienvenido a nuestro Home Banking" + nombre
    
    //crear cuenta
    let nombre1 = document.getElementById("name");
    let mail1 = document.getElementById("email");
    let botonCrearCuenta = document.getElementById("enviar");
    
    
    botonCrearCuenta.onclick = (e) => {
    e.preventDefault();
    let nombre = nombre1.value;      
    let mail = mail1.value;
    let saldopesosarg = parseInt(0);
    let saldodolares = parseInt(0);
    
    cuentas.push( new CuentaBancaria(nombre, mail, saldopesosarg, saldodolares));
    indiceCuenta = cuentas.length - 1;    
    }
    
    //ver de saldo
    saldo.onclick = () => {
        //alert("Este es tu saldo en Pesos Arg $" + cuentas[indiceCuenta].saldopesosarg + " y en Dolares u$d " +cuentas[indiceCuenta].saldodolares )
        let sectionVerSaldo = document.getElementById("versaldo")
        sectionVerSaldo.innerHTML = "$ " + cuentas[indiceCuenta].saldopesosarg 
        let sectionVerSaldoDolares = document.getElementById("versaldodolares")
        sectionVerSaldoDolares.innerHTML = "U$s " + cuentas[indiceCuenta].saldodolares 
    }
    
    //deposito pesos 
    
    botondeposito.onclick = (e) => {    
        e.preventDefault();
        let massaldo = parseInt(document.getElementById("depositarpesos").value);
        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg + massaldo
    
    }

    //deposito dolares

    botondepositodolares.onclick = (e) => {    
        e.preventDefault();
        let massaldodolares = parseInt(document.getElementById("depositardolares").value);
        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares + massaldodolares
    
    }
    
    //cambiar de cuenta

    botondebuscarcuenta.onclick = (e) => {
        e.preventDefault();
        
        let nombrecambiocuenta = document.getElementById("nombredecuenta");
        let nombre = nombrecambiocuenta.value
        let mailcambiocuenta = document.getElementById("maildecuenta");
        let mail = mailcambiocuenta.value
        
        let cuenta = cuentas.find
                    ((elemento) => ((elemento.nombre == nombre) && (elemento.mail == mail)))
                        indiceCuenta = cuentas.indexOf(cuenta);
        
    };
        
    
    