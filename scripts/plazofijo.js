//plazo fijo


botonsimularplazofijo.onclick = (e) => {
    e.preventDefault();
    
    let diasplazofijo = document.getElementById("diasPF");
    let diasplazo = diasplazofijo.value
    let montoPF = document.getElementById("valorplazofijo");
    let montoplazofijo = montoPF.value 


    let resultadoPF = document.getElementById("resultadoplazofijo");
   
    //funcion plazo fijo

    function calculoPlazoFijo (TNM, montoplazofijo, diasplazo, meses){
        let intereses = (((TNM*montoplazofijo)/100)*meses).toFixed(2);
        resultadoPF.innerHTML  = "Cobrarás por intereses $" + intereses + " en un plazo de " + diasplazo + " dias"
        Swal.fire({
            title: 'Su plazo fijo',
            text: "Cobrarás por intereses $" + intereses + " en un plazo de " + diasplazo + " dias",
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }

if ((cuentas.length != 0) && (inicioSesion==true)){
    
    if((montoplazofijo <= cuentas[indiceCuenta].saldopesosarg) && (montoplazofijo > 0)){
        
        if (diasplazo==30){
            calculoPlazoFijo(5.4,montoplazofijo,diasplazo,1)
        }
        else if (diasplazo==60){
            calculoPlazoFijo(6,montoplazofijo,diasplazo,2)
        }
        else if (diasplazo==90){
            calculoPlazoFijo(7,montoplazofijo,diasplazo,3)
        }
        else if (diasplazo==120){
            calculoPlazoFijo(8,montoplazofijo,diasplazo,4)
        }
        
        else{
            resultadoPF.innerHTML = "No ingresó una opción válida"
            Swal.fire({
                title: 'Error!',
                text: 'No ingresó una opción válida',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
    }   
    else if ((diasplazo=="")||(montoplazofijo=="")){
        
            resultadoPF.innerHTML = "No ingresó una opción válida"
            Swal.fire({
                title: 'Error!',
                text: 'No ingresó una opción válida',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        
    }
    else{
        resultadoPF.innerHTML = "No tiene suficiente dinero en la cuenta"
        Swal.fire({
            title: 'Error!',
            text: 'No tiene suficiente dinero en la cuenta',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
}

else{
    resultadoPF.innerHTML = "Debe crear una cuenta primero"
    Swal.fire({
        title: 'Error!',
        text: 'Debe crear una cuenta primero',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
}

}