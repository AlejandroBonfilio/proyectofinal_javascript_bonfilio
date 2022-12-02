// compra venta de usd

// api valor dolar 
url="https://www.dolarsi.com/api/api.php?type=valoresprincipales"

fetch(url)
    .then((response)=> response.json())
    .then((dolarValor) => {

//compra
botoncomprarusd.onclick = (e) => {
    e.preventDefault();
    

        
    
    let inputComprausd = document.getElementById("comprarusd");
    let importeCompra = parseFloat(inputComprausd.value)
    let compra = parseFloat(dolarValor[1].casa.venta);//valor con api
    let comprardolar = parseFloat(importeCompra * compra)
    
    let resultadoCompra = document.getElementById("resultadodecomprausd");

if ((cuentas.length != 0) && (inicioSesion==true)){     
    if(comprardolar > cuentas[indiceCuenta].saldopesosarg ){
        resultadoCompra.innerHTML="Lo sentimos pero no tiene suficiente dinero"

        Swal.fire({
            title: 'Error!',
            text: 'Lo sentimos pero no tiene suficiente dinero',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
    else if(comprardolar <= cuentas[indiceCuenta].saldopesosarg && comprardolar > 0){
        
        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares + importeCompra;
        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg - comprardolar;
        resultadoCompra.innerHTML="Usted compró: U$S " + importeCompra + " por: $" + comprardolar
        localStorage.setItem("cuentas", JSON.stringify(cuentas))

        Swal.fire({
            title: 'Compra de U$S Confirmada',
            text: "Usted compró: U$S " + importeCompra + " por: $" + comprardolar,
            icon: 'success',
            showConfirmButton: false,
            timer: 1700
        })

    }
    else{
        resultadoCompra.innerHTML="El valor ingresado no es correcto"
    }
    

}
else{
    
    resultadoCompra.innerHTML = "Debe crear una cuenta primero"

    Swal.fire({
        title: 'Error!',
        text: 'Debe crear una cuenta primero',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
}

}

//venta
botonvenderusd.onclick = (e) => {
    e.preventDefault();

    let inputVentausd = document.getElementById("venderusd");
    let importeVenta = parseFloat(inputVentausd.value)
    let venta = parseFloat(dolarValor[1].casa.compra);//valor con api
    let venderdolar = parseFloat(importeVenta * venta)
    
    let resultadoVenta = document.getElementById("resultadodeventausd");

if ((cuentas.length != 0) && (inicioSesion==true)){     
    if(importeVenta > cuentas[indiceCuenta].saldodolares ){
        resultadoVenta.innerHTML="Lo sentimos pero no tiene suficiente dinero"
        Swal.fire({
            title: 'Error!',
            text: 'Lo sentimos pero no tiene suficiente dinero',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
    else if(importeVenta <= cuentas[indiceCuenta].saldodolares && importeVenta > 0){
        
        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares - importeVenta
        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg + venderdolar
        resultadoVenta.innerHTML="Usted vendió: U$D " + importeVenta + " por: $" + venderdolar
        localStorage.setItem("cuentas", JSON.stringify(cuentas))

        Swal.fire({
            title: 'Venta de U$S Confirmada',
            text: "Usted vendió: U$D " + importeVenta + " por: $" + venderdolar,
            icon: 'success',
            showConfirmButton: false,
            timer: 1700
        })
    }
    else{
        resultadoVenta.innerHTML="El valor ingresado no es correcto"
    }
    

}

else{
    
    resultadoVenta.innerHTML = "Debe crear una cuenta primero"
    Swal.fire({
        title: 'Error!',
        text: 'Debe crear una cuenta primero',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
}

}
});