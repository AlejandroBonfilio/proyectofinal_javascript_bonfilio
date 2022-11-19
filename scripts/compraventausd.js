// compra venta de usd

 


//compra
botoncomprarusd.onclick = (e) => {
    e.preventDefault();

    let inputComprausd = document.getElementById("comprarusd");
    let importeCompra = parseFloat(inputComprausd.value)
    let compra = parseInt(300);
    let comprardolar = parseFloat(importeCompra * compra)
    
    let resultadoCompra = document.getElementById("resultadodecomprausd");

if (cuentas.length != 0){     
    if(comprardolar > cuentas[indiceCuenta].saldopesosarg ){
        resultadoCompra.innerHTML="Lo sentimos pero no tiene suficiente dinero"
    }
    else if(comprardolar <= cuentas[indiceCuenta].saldopesosarg && comprardolar > 0){
        
        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares + importeCompra;
        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg - comprardolar;
        resultadoCompra.innerHTML="Usted compró: U$D " + importeCompra + " por: $" + comprardolar
        localStorage.setItem("cuentas", JSON.stringify(cuentas))
    }
    else{
        resultadoCompra.innerHTML="El valor ingresado no es correcto"
    }
    

}
else{
    
    resultadoCompra.innerHTML = "Debe crear una cuenta primero"
}

}

//venta
botonvenderusd.onclick = (e) => {
    e.preventDefault();

    let inputVentausd = document.getElementById("venderusd");
    let importeVenta = parseFloat(inputVentausd.value)
    let venta = parseInt(280);
    let venderdolar = parseFloat(importeVenta * venta)
    
    let resultadoVenta = document.getElementById("resultadodeventausd");

if (cuentas.length != 0){     
    if(importeVenta > cuentas[indiceCuenta].saldodolares ){
        resultadoVenta.innerHTML="Lo sentimos pero no tiene suficiente dinero"
    }
    else if(importeVenta <= cuentas[indiceCuenta].saldodolares && importeVenta > 0){
        
        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares - importeVenta
        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg + venderdolar
        resultadoVenta.innerHTML="Usted vendió: U$D " + importeVenta + " por: $" + venderdolar
        localStorage.setItem("cuentas", JSON.stringify(cuentas))
    }
    else{
        resultadoVenta.innerHTML="El valor ingresado no es correcto"
    }
    

}

else{
    
    resultadoVenta.innerHTML = "Debe crear una cuenta primero"
}

}