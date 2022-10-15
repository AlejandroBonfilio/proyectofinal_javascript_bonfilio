//Ingreso de usuario y bienvenida
let nombre = prompt("Ingrese nombre de Usuario")
alert("Hola " + nombre + " bienvenido a Bancos Canarias!")

//variables 
let saldopesosarg = 60000;
let saldodolares = 0;

//Menu inicial
let opcion = 6;
do{
    opcion=parseInt(prompt("¿Que operacion desea realizar el dia de hoy "+ nombre +"? (ingrese solo numero) \n1.Ver Saldo \n2.Constituir un plazo fijo \n3.Comprar moneda extranjera \n4.Créditos \n5.Auto-Transferirme (dinero infinito :D ) \n6.Salir"))
    switch (opcion){
            case 1:
                alert("Este es tu saldo en Pesos Arg $ " + saldopesosarg + " y en Dolares u$d " + saldodolares )
            break;
            case 2:
                let montoplazofijo = parseInt(prompt("Para crear un plazo fijo en pesos, ingrese un monto disponible en su cuenta: "))
                    if (montoplazofijo > saldopesosarg){
                        alert("Lo sentimos pero no tiene suficiente dinero")
                    }
                    else if(montoplazofijo <= saldopesosarg && montoplazofijo > 0) {
                        do{
                        let diasplazo = parseInt(prompt("Plazos disponibles en dias 30/60/90/120 , pulse 5 para salir"))
                        switch (diasplazo){
                            case 30:
                                intereses = ((5.4 * montoplazofijo) / 100);
                                confirm("Cobrarás por intereses $" + intereses + " en un plazo de 30 dias") 
                            break;
                            case 60:
                                intereses = (((5.8 * montoplazofijo) / 100)*2);
                                confirm("Cobrarás por intereses $" + intereses + " en un plazo de 60 dias")
                            break;
                            case 90:
                                intereses = (((6.25 * montoplazofijo) / 100)*3);
                                confirm("Cobrarás por intereses $" + intereses + " en un plazo de 90 dias")
                            break;
                            case 120:
                                intereses = (((6.7 * montoplazofijo) / 100)*4);
                                confirm("Cobrarás por intereses $" + intereses + " en un plazo de 90 dias")
                            break;
                            case 5:
                                alert("cancelado")
                            break;
                            default:
                                alert("La opcion ingresada es incorrecta")
                            break;    
                        }
                        }
                        while(diasplazo!=5)
                    }
                    else{
                        alert("El valor ingresado no es correcto")
                    }
                    
            break;
            case 3:
                console.log(registros)
            break;
            case 4:
                var nuevo = prompt("Ingresa un elemento para los registros")
                registros.push(nuevo)
            break;
            case 5:
                var nuevo = prompt("Ingresa un elemento para los registros")
                registros.push(nuevo)
            break;
            case 6:
                alert("Gracias, hasta pronto")
            }
}
while(opcion!=6) 

//Opcion 1 ... Ver Saldo ....

