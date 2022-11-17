//plazo fijo


botonsimularplazofijo.onclick = (e) => {
    e.preventDefault();
    
    let diasplazofijo = document.getElementById("diasPF");
    let diasplazo = diasplazofijo.value
    let montoPF = document.getElementById("valorplazofijo");
    let montoplazofijo = montoPF.value 


    let resultadoPF = document.getElementById("resultadoplazofijo");
    let erroresultadoPF = document.getElementById("errorplazofijo");
    
    
    if ((diasplazo==30) && (montoplazofijo <= cuentas[indiceCuenta].saldopesosarg) && (montoplazofijo > 0)){
        intereses = (((5.4*montoplazofijo)/100)*1)
        
        resultadoPF.innerHTML = "Cobrarás por intereses $" + intereses + " en un plazo de " + diasplazo + " dias" 
    
    }
    
    else if ((diasplazo==60) && (montoplazofijo <= cuentas[indiceCuenta].saldopesosarg) && (montoplazofijo > 0)){
        intereses = (((6*montoplazofijo)/100)*2)
        
        resultadoPF.innerHTML = "Cobrarás por intereses $" + intereses + " en un plazo de " + diasplazo + " dias" 
    
    }
    else if ((diasplazo==90) && (montoplazofijo <= cuentas[indiceCuenta].saldopesosarg) && (montoplazofijo > 0)){
        intereses = (((6.5*montoplazofijo)/100)*3)
        
        resultadoPF.innerHTML = "Cobrarás por intereses $" + intereses + " en un plazo de " + diasplazo + " dias" 
    
    }
    else if ((diasplazo==120) && (montoplazofijo <= cuentas[indiceCuenta].saldopesosarg) && (montoplazofijo > 0)){
        intereses = (((7*montoplazofijo)/100)*4)
        
        resultadoPF.innerHTML = "Cobrarás por intereses $" + intereses + " en un plazo de " + diasplazo + " dias" 
    
    }
    
    else{
        erroresultadoPF.innerHTML = "No ingresó una opción válida"
    }
        
        
        
};


