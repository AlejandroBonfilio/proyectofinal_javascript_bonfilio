//funcion prestamo


botonsimularprestamo.onclick = (e) => {
    e.preventDefault();

    let plazodeprestamo = document.getElementById("plazoprestamo");
    let plazo = plazodeprestamo.value
    let montoPrestamo = document.getElementById("montoprestamo");
    let prestamo = montoPrestamo.value 

    let resultadodePrestamo = document.getElementById("resultadoprestamo");
    

    function calculoPrestamo (CFTMens,meses,CFTEAV){
        let cuota = (((CFTMens * prestamo) / 100) + (prestamo / meses)).toFixed(2);
        let total = cuota * meses
        resultadodePrestamo.innerHTML = "Vas a pagar por cuota: $" + cuota + " en un total de " + plazo + " cuotas, el total a pagar es de $" + total + " con un CFTEAV de "+ CFTEAV +"%"
        Swal.fire({
            title: 'Su prestamo',
            text: "Vas a pagar por cuota: $" + cuota + " en un total de " + plazo + " cuotas, el total a pagar es de $" + total + " con un CFTEAV de "+ CFTEAV +"%",
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }

if ((cuentas.length != 0) && (inicioSesion==true)){    
    if(prestamo > 2000000){
        resultadodePrestamo.innerHTML = "No se permite un valor mayor a $2.000.00"
        
    }
    else if(prestamo<2000000 && prestamo>0){
        if(plazo==12){
            calculoPrestamo(2,12,25)
            
        }
        else if(plazo==24){
            calculoPrestamo(3.6,24,44)
            
        }
        else if(plazo==36){
            calculoPrestamo(4.4,36,53)
            
        }
        else if(plazo==72){
            calculoPrestamo(6,72,62)
            
        }
        else{
            resultadodePrestamo.innerHTML ="El valor ingresado es incorrecto"
            Swal.fire({
                title: 'Error!',
                text: 'El valor ingresado es incorrecto',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            
        }

    }
    else{
        resultadodePrestamo.innerHTML ="El valor ingresado es incorrecto"
        Swal.fire({
            title: 'Error!',
            text: 'El valor ingresado es incorrecto',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }


}

else{
    
    resultadodePrestamo.innerHTML = "Debe crear una cuenta primero"
    Swal.fire({
        title: 'Error!',
        text: 'Debe crear una cuenta primero',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
}

}