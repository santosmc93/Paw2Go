class Articulo {
    constructor(nombre, descripcion, imagen, precio, categorias = [], gato, perro){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.categorias = categorias;
        this.gato = gato;
        this.perro = perro;
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

    if(nombre == "" || descripcion == "" || precio == "" || imagen == ""){
        alert("All fields are mandatory");
    }else {
        if(gato == false && perro == false){
            alert("Please, choose an option: Cat or Dog");
        } else {

    let articulo = new Articulo(nombre,descripcion,imagen,precio,
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
         ], gato, perro);

    articulosArray.push(articulo);
    let articuloJson = JSON.stringify(articulosArray);

    localStorage.setItem("articulos", articuloJson);
        }
    }
    //localStorage.setItem("descripcion", articulo.descripcion);
    //localStorage.setItem("imagen", articulo.imagen);

    //************** ESTO YA JALAAAAAAAA ***************************/
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
    
    alert("New item created succesfully");
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