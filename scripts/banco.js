//Ingreso de usuario y bienvenida
let nombre = prompt("Ingrese nombre de Usuario")
alert("Hola " + nombre + " bienvenido a Bancos Canarias!")

//saldo inicial cuenta bancaria
let saldopesosarg = 60000;
let saldodolares = 0;

//funcion plazo fijo

function calculoPlazoFijo (TNM, montoplazofijo, diasplazo, meses){
    let intereses = (((TNM*montoplazofijo)/100)*meses)
    let respuesta = ("Cobrarás por intereses $" + intereses + " en un plazo de " + diasplazo + " dias")
    alert (respuesta);
}

//funcion prestamo
function calculoPrestamo (CFTMens,meses,CFTEAV){
    let cuota = (((CFTMens * prestamo) / 100) + (prestamo / meses))
    let total = cuota * meses
    let respuesta = ("Vas a pagar por cuota: $" + cuota + " en un total de " + plazo + " cuotas, el total a pagar es de $" + total + " con un CFTEAV de "+ CFTEAV +"%")
    alert(respuesta);
}

//Menu 
let opcion = 6;
do{
    opcion=parseInt(prompt("¿Que operacion desea realizar el dia de hoy "+ nombre +"? (ingrese solo numero) \n1.Ver Saldo \n2.Constituir un plazo fijo \n3.Comprar moneda extranjera \n4.Créditos \n5.Depositar \n6.Salir"))
    switch (opcion){
            //ver saldo Opcion 1 
            case 1:
                alert("Este es tu saldo en Pesos Arg $ " + saldopesosarg + " y en Dolares u$d " + saldodolares )
            break;
            //simular plazo fijo opcion 2
            case 2:
                let montoplazofijo = parseInt(prompt("Para simular un plazo fijo en pesos, ingrese un monto disponible en su cuenta: "))
                    if (montoplazofijo > saldopesosarg){
                        alert("Lo sentimos pero no tiene suficiente dinero")
                    }
                    else if(montoplazofijo <= saldopesosarg && montoplazofijo > 0) {
                        let diasplazo = parseInt(prompt("Plazos disponibles en dias 30/60/90/120 , pulse 5 para salir"))
                        switch (diasplazo){
                            case 30:
                                calculoPlazoFijo(5.4,montoplazofijo,diasplazo,1)
                            break;
                            case 60:
                                calculoPlazoFijo(5.8,montoplazofijo,diasplazo,2)
                            break;
                            case 90:
                                calculoPlazoFijo(6.25,montoplazofijo,diasplazo,3)
                            break;
                            case 120:
                                calculoPlazoFijo(6.7,montoplazofijo,diasplazo,4)
                            break;
                            case 5:
                                alert("cancelado")
                            break;
                            default:
                                alert("La opcion ingresada es incorrecta")
                            break;    
                        }
                    }
                    else{
                        alert("El valor ingresado no es correcto")
                    }                 
            break;
            //comprar-vender dolares opcion 3
            case 3:
                //menu
                let opciondolares = 1;
                opciondolares=parseInt(prompt("Ingrese opcion:\n1.Comprar \n2.Vender \nValores: Compra $300 Venta $280" ))
                let compra = 300; 
                let venta = 280;
                //compra
                if ( opciondolares == 1){
                    importe=parseInt(prompt("Ingrese valor en U$D que quiere comprar: "))
                    comprardolar = importe * compra  
                    if(comprardolar > saldopesosarg ){
                        alert("Lo sentimos pero no tiene suficiente dinero")
                    }
                    else if(comprardolar <= saldopesosarg && comprardolar > 0){
                        alert("Usted quiere comprar U$D " + importe + " por: $" + comprardolar)
                        saldodolares = saldodolares + importe
                        saldopesosarg = saldopesosarg - comprardolar
                        alert("Usted compró: U$D " + importe)
                    }
                    else{
                        alert("El valor ingresado no es correcto")
                    }

                }
                //venta
                else if (opciondolares==2){
                    importe=parseInt(prompt("Ingrese valor en U$D que quiere vender: "))
                    venderdolar = importe * venta  
                    if(importe > saldodolares ){
                        alert("Lo sentimos pero no tiene suficiente dinero")
                    }
                    else if(importe <= saldodolares && importe > 0){
                        alert("Usted quiere vender: U$D" + importe + " por: $" + venderdolar)
                        saldodolares = saldodolares - importe
                        saldopesosarg = saldopesosarg + venderdolar
                        alert("Usted vendió: U$D " + importe)
                    }
                    else{
                        alert("El valor ingresado no es correcto")
                    }
                }    
                else{
                    alert("Opcion Inválida")
                }
            break;
            //pedir un credito opcion 4
            case 4:
                alert("Bienvenido al sistema de préstamos Canarias \nPuede pedir un maximo de $2.000.000 en un plazo de hasta 72 meses!")
                prestamo=parseInt(prompt("Ingrese monto a solicitar: "))
                if(prestamo > 2000000){
                    alert("El monto solicitado es mayor al permitido")
                }
                else if(prestamo<2000000 && prestamo>0){
                    plazo=parseInt(prompt("Elija el plazo en meses a pagar el préstamo\n12 \n24 \n36 \n72 \n5.Salir"))
                    switch (plazo) {
                        case 12:
                            calculoPrestamo(2,12,25)
                        break;
                        case 24:
                            calculoPrestamo(3.6,24,44)
                        break;
                        case 36:
                            calculoPrestamo(4.4,36,53)
                        break;
                        case 72:
                            calculoPrestamo(6,72,62) 
                        break;
                        case 5:
                            alert("cancelado")
                        break;
                        default:
                            alert("La opcion ingresada es incorrecta")
                        break;    
                    }
                }
                else{
                    alert("El valor ingresado es incorrecto")
                }
            break;
            //deposito opcion 5
            case 5:
                let massaldo = parseInt(prompt("Ingrese dinero:"))
                saldopesosarg = saldopesosarg + massaldo
                alert("su nuevo saldo es : " + saldopesosarg)
            break;
            //salir opcion 6
            case 6:
                alert("Gracias, hasta pronto")
            //opcion incorrecta
            default:
                alert("La opcion ingresada es incorrecta")
            break;
            }     
}
while(opcion!=6) 



