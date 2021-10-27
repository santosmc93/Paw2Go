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
  alert("Objet created successfully")
  console.log(localStorage.getItem(articulo.id));
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