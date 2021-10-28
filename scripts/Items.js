/*
class Articulo {
    constructor(id, name, description, image, price, categories = [], cat, dog){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.categories = categories;
        this.cat = cat;
        this.dog = dog;
    }
}

let boton = document.getElementById("boton");
let botonMostrar = document.getElementById("boton-mostrar");

let articulosArray = [];

boton.addEventListener("click", function enviar(e){
    e.preventDefault();
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("link").value;
    let price = document.getElementById("price").value;
    let cat = document.getElementById("cat").checked;
    let dog = document.getElementById("dog").checked;

    if(name == "" || description == "" || price == "" || image == ""){
        alert("All fields are mandatory");
    }else {
        if(cat == false && dog == false){
            alert("Please, choose an option: Cat or Dog");
        } else {

    let articulo = new Articulo(id, name,description,image,price,
        [document.getElementById("HyW").checked,
         document.getElementById("TyC").checked,
         document.getElementById("Home").checked,
         document.getElementById("SandA").checked,
         document.getElementById("TandT").checked,
         document.getElementById("Toys").checked,
         document.getElementById("Grooming").checked,
         document.getElementById("Dental").checked,
         document.getElementById("NandC").checked,
         document.getElementById("DryFood").checked,
         document.getElementById("WetFood").checked,
         ], cat, dog);


    // articulosArray.push(articulo);
    // let articuloJson = JSON.stringify(articulosArray);
    // localStorage.setItem("articulos", articuloJson);

    let articuloJson = JSON.stringify(articulo);
    localStorage.setItem(articulo.id, articuloJson);
    
    console.log(localStorage.getItem(articulo.id));
        }
    }
    //localStorage.setItem("descripcion", articulo.descripcion);
    //localStorage.setItem("imagen", articulo.imagen);
/*

    //************** ESTO YA JALAAAAAAAA **************************
    // function addItem(item){
    //     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
    //         '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
    //         '    <div class="card-body">\n' +
    //         '        <h5 class="card-title">'+item.name+'</h5>\n' +
    //         '        <p class="card-text">'+item.description+'</p>\n' +
    //         '        <a href="#" class="btn btn-primary">Add</a>\n' +
    //         '    </div>\n' +
    //         '</div>\n' +
    //         '<br/>';
    //     const itemsContainer = document.getElementById("list-items");
    //     itemsContainer.innerHTML += itemHTML;
    // }

    // addItem({'name':nombre,
    // 'img': imagen,
    // 'description':descripcion});

    // console.log(articulo.nombre);
    // console.log(articulo.descripcion);
    // console.log(articuloJson);


})

botonMostrar.addEventListener("click", function mostrar(e){
    e.preventDefault();
     function addItem(item){
        const itemHTML = '<div class="card">\n' +
            '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
            '    <div class="card-body">\n' +
            '        <h5 class="card-title formato-letras">'+item.name+'</h5>\n' +
            '        <p class="card-text formato-letras">'+item.description+'</p>\n' +
            '        <p class="card-text formato-letras">'+item.prize+'</p>\n' +
            '        <a href="#" class="btn btn-primary">Add</a>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<br/>';
        const itemsContainer = document.getElementById("list-items");
        itemsContainer.innerHTML += itemHTML;
    }

    
    let articulosObjeto = JSON.parse(localStorage.getItem("articulos"));
    console.log(articulosObjeto);

    let i=0;
    
    while(articulosObjeto[i] != undefined){
        addItem({'name':articulosObjeto[i].nombre,
        'img': articulosObjeto[i].imagen,
        'description':articulosObjeto[i].descripcion,
        'prize':articulosObjeto[i].precio});

        i++
    }
})
*/

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

    let nombre = document.getElementById("name").value;
    let descripcion = document.getElementById("description").value;
    let imagen = document.getElementById("link").value;
    let precio = document.getElementById("price").value;
    let gato = document.getElementById("cat").checked;
    let perro = document.getElementById("dog").checked;
    let formulario = document.getElementById("form");
    let cantidad = 10

    if(nombre == "" || descripcion == "" || precio == "" || imagen == "" || cantidad == ""){
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

    articulosArray.push(articulo);
    let articuloJson = JSON.stringify(articulosArray);

    localStorage.setItem("articulos", articuloJson);
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

