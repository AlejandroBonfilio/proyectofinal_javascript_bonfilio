//valor de dolar mediante una api

let valorCompra = document.getElementById("valorcompra");
let valorVenta = document.getElementById("valorventa");
url="https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    
    fetch(url)
    .then((response)=> response.json())
    .then((dolarValor) => {
    
        
       //texto en compra-venta usd
        valorCompra.innerHTML = "Precio de compra $" + JSON.stringify(dolarValor[1].casa.venta);
        valorVenta.innerHTML = "Precio de venta $" + JSON.stringify(dolarValor[1].casa.compra);

        
    });

