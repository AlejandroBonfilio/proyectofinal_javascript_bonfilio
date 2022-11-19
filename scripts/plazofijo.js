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
     
    }

if (cuentas.length != 0){
    
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
        }
    }   
    
    else{
        resultadoPF.innerHTML = "No tiene suficiente dinero en la cuenta"
    }
}

else{
    resultadoPF.innerHTML = "Debe crear una cuenta primero"
}

}