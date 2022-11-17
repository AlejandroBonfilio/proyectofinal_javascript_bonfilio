//funcion prestamo


botonsimularprestamo.onclick = (e) => {
    e.preventDefault();

    let plazodeprestamo = document.getElementById("plazoprestamo");
    let plazo = plazodeprestamo.value
    let montoPrestamo = document.getElementById("montoprestamo");
    let prestamo = montoPrestamo.value 

    let resultadodePrestamo = document.getElementById("resultadoprestamo");
    let errorresultadodePrestamo = document.getElementById("errorprestamo");

    function calculoPrestamo (CFTMens,meses,CFTEAV){
        let cuota = (((CFTMens * prestamo) / 100) + (prestamo / meses))
        let total = cuota * meses
        resultadodePrestamo.innerHTML = "Vas a pagar por cuota: $" + cuota + " en un total de " + plazo + " cuotas, el total a pagar es de $" + total + " con un CFTEAV de "+ CFTEAV +"%"
    }

    if(prestamo > 2000000){
        errorresultadodePrestamo.innerHTML = "No se permite un valor mayor a $2.000.00"
        
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
            errorresultadodePrestamo.innerHTML ="El valor ingresado es incorrecto"
        }

    }
    else{
        errorresultadodePrestamo.innerHTML ="El valor ingresado es incorrecto"
    }
};