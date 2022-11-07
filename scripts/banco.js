//array de cuentas
const cuentas = [];

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

//variables
let indiceCuenta;


//Menu 
let opcion = 6;
do{
    opcion=parseInt(prompt("¿Que operacion desea realizar el dia de hoy ? (ingrese solo numero) \n1.Ver Saldo \n2.Constituir un plazo fijo \n3.Comprar moneda extranjera \n4.Créditos \n5.Depositar \n6.Crear cuenta \n7.salir \n8.seleccionar cuenta  "))
    switch (opcion){
            //ver saldo Opcion 1 
            case 1:
                if (cuentas.length != 0){
                    alert("Este es tu saldo en Pesos Arg $" + cuentas[indiceCuenta].saldopesosarg + "y en Dolares u$d " +cuentas[indiceCuenta].saldodolares )
                
                }
                else{
                    alert("debes crear una cuenta primero")
                }    
            break;
            //simular plazo fijo opcion 2
            case 2:
                if (cuentas.length != 0){
                let montoplazofijo = parseInt(prompt("Para simular un plazo fijo en pesos, ingrese un monto disponible en su cuenta: "))
                    if (montoplazofijo > cuentas[indiceCuenta].saldopesosarg){
                        alert("Lo sentimos pero no tiene suficiente dinero")
                    }
                    else if(montoplazofijo <= cuentas[indiceCuenta].saldopesosarg && montoplazofijo > 0) {
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
                }
                    else{
                        alert("Debe crear una cuenta primero")
                    }                 
            break;
            //comprar-vender dolares opcion 3
            case 3:
                //menu
            if (cuentas.length != 0){
                let opciondolares = 1;
                opciondolares=parseInt(prompt("Ingrese opcion:\n1.Comprar \n2.Vender \nValores: Compra $300 Venta $280" ))
                let compra = 300; 
                let venta = 280;
                //compra
                if ( opciondolares == 1){
                    importe=parseInt(prompt("Ingrese valor en U$D que quiere comprar: "))
                    comprardolar = importe * compra  
                    if(comprardolar > cuentas[indiceCuenta].saldopesosarg ){
                        alert("Lo sentimos pero no tiene suficiente dinero")
                    }
                    else if(comprardolar <= cuentas[indiceCuenta].saldopesosarg && comprardolar > 0){
                        alert("Usted quiere comprar U$D " + importe + " por: $" + comprardolar)
                        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares + importe;
                        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg - comprardolar;
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
                    if(importe > cuentas[indiceCuenta].saldodolares ){
                        alert("Lo sentimos pero no tiene suficiente dinero")
                    }
                    else if(importe <= cuentas[indiceCuenta].saldodolares && importe > 0){
                        alert("Usted quiere vender: U$D" + importe + " por: $" + venderdolar)
                        cuentas[indiceCuenta].saldodolares = cuentas[indiceCuenta].saldodolares - importe
                        cuentas[indiceCuenta].saldopesosarg = cuentas[indiceCuenta].saldopesosarg + venderdolar
                        alert("Usted vendió: U$D " + importe)
                    }
                    else{
                        alert("El valor ingresado no es correcto")
                    }
                }    
                else{
                    alert("Opcion Inválida")
                }
            }
            else{
                alert("Debe crear una cuenta primero")
            }
            break;
            //pedir un credito opcion 4
            
            case 4:
            if (cuentas.length != 0){    
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
            }
            else{
                alert("Debe crear una cuenta primero")
            }
            break;
            
            //deposito opcion 5
            case 5:
            if (cuentas.length != 0){    
                let massaldo = parseInt(prompt("Ingrese dinero:"))
                saldopesosarg = saldopesosarg + massaldo
                alert("su nuevo saldo es : " + saldopesosarg)
            }
            else{
                alert("Debe crear una cuenta primero")
            }
            break;
            
            //sesiones
            case 6:
                let nombre = prompt("ingrese su nombre");
                let mail = prompt("ingrese su mail");
                let saldopesosarg = parseInt(prompt("Deposito en pesos"));
                let saldodolares = parseInt(prompt("Deposito en dolares"));
                cuenta = new CuentaBancaria(nombre, mail, saldopesosarg, saldodolares);
                cuentas.push(cuenta);
                indiceCuenta = cuentas.length - 1;    
            break;
            
            //salir opcion 6
            case 7:
                alert("Gracias, hasta pronto")
            
            //seleccionar cuenta 
            case 8:
                if (cuentas.length != 0) {
                    let nombre = prompt("Ingrese un nombre a buscar");
                    let cuenta = cuentas.find(
                        (elemento) => elemento.nombre == nombre
                    );
                    indiceCuenta = cuentas.indexOf(cuenta);
                } else {
                    alert("No hay ninguna cuenta agregada");
                }
                break;

            //opcion incorrecta
            default:
                alert("La opcion ingresada es incorrecta")
            break;
            }     
}
while(opcion!=7) 



