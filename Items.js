class Articulo {
    constructor(product_name, product_description, url_image, product_price, for_cat, for_dog, product_qty){
        this.product_name = product_name;
        this.product_description = product_description;
        this.url_image = url_image;
        this.product_price = product_price;    
        this.for_cat = for_cat;
        this.for_dog = for_dog;
        this.product_qty = product_qty;
    }
}

let boton = document.getElementById("boton");
let botonMostrar = document.getElementById("boton-mostrar");

let articulosArray = [];

boton.addEventListener("click", function enviar(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("link").value;
    let precio = document.getElementById("precio").value;
    let gato = document.getElementById("gato").checked;
    let perro = document.getElementById("perro").checked;
    let formulario = document.getElementById("form");
    let cantidad = 10;

    if(nombre == "" || descripcion == "" || precio == "" || imagen == ""){
        alert("All fields are mandatory");
    }else {
        if(gato == false && perro == false){
            alert("Please, choose an option: Cat or Dog");
        } else {

    let articulo = new Articulo(nombre,descripcion,imagen,precio,
        // [document.getElementById("HyW").checked,
        //  document.getElementById("TyC").checked,
        //  document.getElementById("Home").checked,
        //  document.getElementById("SandA").checked,
        //  document.getElementById("TandT").checked,
        //  document.getElementById("Toys").checked,
        //  document.getElementById("Grooming").checked,
        //  document.getElementById("Dental").checked,
        //  document.getElementById("NandC").checked,
        //  document.getElementById("DryFood").checked,
        //  document.getElementById("WetFood").checked,
        //  ],
        gato, perro, cantidad);

         let productJson = JSON.stringify(articulo);

         fetch('http://localhost:8080/products/newProduct', {  
            method: 'POST',
            body: productJson,
            headers: {
                'Content-Type': 'application/json'
            }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
            })
            .catch((error) => {
                console.error("error",error);
            });

    // articulosArray.push(articulo);
    // let articuloJson = JSON.stringify(articulosArray);

    // localStorage.setItem("articulos", articuloJson);
    alert("New item created succesfully");
    formulario.reset();
        }
    }
})

botonMostrar.addEventListener("click", function mostrar(e){
    e.preventDefault();

    fetch('http://localhost:8080/products/display', {  
            method: 'GET',
            })
                .then(res => res.json())
                .then(data => { 
                    console.log(data);
                    
            })
            .catch((error) => {
                console.error("error",error);
                console.log("fallo :(");
            });
    //  function addItem(item){
    //     const itemHTML = '<div class="card">\n' +
    //         '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
    //         '    <div class="card-body">\n' +
    //         '        <h5 class="card-title formato-letras">'+item.name+'</h5>\n' +
    //         '        <p class="card-text formato-letras">'+item.description+'</p>\n' +
    //         '        <p class="card-text formato-letras">'+item.prize+'</p>\n' +
    //         '        <a href="#" class="btn btn-primary">Add</a>\n' +
    //         '    </div>\n' +
    //         '</div>\n' +
    //         '<br/>';
    //     const itemsContainer = document.getElementById("list-items");
    //     itemsContainer.innerHTML += itemHTML;
    // }

    // let articulosObjeto = JSON.parse(localStorage.getItem("articulos"));
    // console.log(articulosObjeto);

    // let i=0;
    
    // while(articulosObjeto[i] != undefined){
    //     addItem({'name':articulosObjeto[i].nombre,
    //     'img': articulosObjeto[i].imagen,
    //     'description':articulosObjeto[i].descripcion,
    //     'prize':articulosObjeto[i].precio});

    //     i++
    // }
})