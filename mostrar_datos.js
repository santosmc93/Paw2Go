let boton_mostrar = document.getElementById("button-show");
let boton_limpiar = document.getElementById("button-clear");
let boton_productoEspecifico = document.getElementById("button-specific-item");

boton_mostrar.addEventListener("click", function (e) {
    e.preventDefault();

    fetch('http://localhost:8080/products/display', {  
            method: 'GET',
            })
                .then(res => res.json())
                .then(data => { 
                    console.log(data);
                    for(let i = 0; i < data.length; i++){
                        addItem(data[i]);
                    }
            })
            .catch((error) => {
                console.error("error",error);
                console.log("fallo :(");
            });

            document.getElementById("lista-objetos").classList.add("lista-grid");

        function addItem(item){
        const itemHTML ='<div class="card">' +
                        '<img src = "'+ item.url_image +'">' +
                        '<div class="card-body">' +
                        '<h3 class="card-body">Product Name: ' + item.product_name + '</h3>' + 
                        '<p class="card-text">Product Description: ' + item.product_description + '</p>' +
                        '<p>Product price: ' + item.product_price + '</p>' + 
                        '<p>Quantity Products: ' + item.product_qty + '</p>' + 
                        '</div>' +
                        '</div>';
        const itemsContainer = document.getElementById("lista-objetos");
        itemsContainer.innerHTML += itemHTML;
    }
})

boton_limpiar.addEventListener("click", function (e){
    e.preventDefault();
    document.getElementById("lista-objetos").innerHTML= '';
})

boton_productoEspecifico.addEventListener("click", function (e){
    e.preventDefault();
    
    let idProducto = prompt("wich item do you want to see?");

    document.getElementById("lista-objetos").innerHTML= '';

    fetch(`http://localhost:8080/products/display/${idProducto}`, {  
            method: 'GET',
            })
                .then(res => res.json())
                .then(data => { 
                    console.log(data);
                    addItem(data);
            })
            .catch((error) => {
                console.error("error",error);
                console.log("fallo :(");
            });

            function addItem(item){
                const itemHTML ='<div class="card">' +
                                '<img src = "'+ item.url_image +'">' +
                                '<div class="card-body">' +
                                '<h3 class="card-body">Product Name: ' + item.product_name + '</h3>' + 
                                '<p class="card-text">Product Description: ' + item.product_description + '</p>' +
                                '<p>Product price: ' + item.product_price + '</p>' + 
                                '<p>Quantity Products: ' + item.product_qty + '</p>' + 
                                '</div>' +
                                '</div>';
                const itemsContainer = document.getElementById("lista-objetos");
                itemsContainer.innerHTML += itemHTML;
            }
            document.getElementById("lista-objetos").classList.remove("lista-grid");

})

