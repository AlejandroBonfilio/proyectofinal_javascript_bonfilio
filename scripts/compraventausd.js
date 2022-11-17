// compra venta de usd

 



botoncomprarusd.onclick = (e) => {
    e.preventDefault();

    let inputComprausd = document.getElementById("comprarusd");
    let importeCompra = parseInt(inputComprausd.value)
    let compra = parseInt(300);
    let comprardolar = parseInt(importeCompra * compra)
    
    let resultadoCompra = document.getElementById("resultadodecomprausd");
     
    if(comprardolar > cuentas[indiceCuenta].saldopesosarg ){
        resultadoCompra.innerHTML="Lo sentimos pero no tiene suficiente dinero"
    }
    else if(comprardolar <= cuentas[indiceCuenta].saldopesosarg && comprardolar > 0){
        
        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares + importeCompra;
        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg - comprardolar;
        resultadoCompra.innerHTML="Usted compró: U$D " + importeCompra + " por: $" + comprardolar
    }
    else{
        resultadoCompra.innerHTML="El valor ingresado no es correcto"
    }
    

}


botonvenderusd.onclick = (e) => {
    e.preventDefault();

    let inputVentausd = document.getElementById("venderusd");
    let importeVenta = parseInt(inputVentausd.value)
    let venta = parseInt(280);
    let venderdolar = parseInt(importeVenta * venta)
    
    let resultadoVenta = document.getElementById("resultadodeventausd");
     
    if(importeVenta > cuentas[indiceCuenta].saldodolares ){
        resultadoVenta.innerHTML="Lo sentimos pero no tiene suficiente dinero"
    }
    else if(importeVenta <= cuentas[indiceCuenta].saldodolares && importeVenta > 0){
        
        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares - importeVenta
        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg + venderdolar
        resultadoVenta.innerHTML="Usted vendió: U$D " + importeVenta + " por: $" + venderdolar
    }
    else{
        resultadoVenta.innerHTML="El valor ingresado no es correcto"
    }
    

}
