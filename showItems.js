
    var cont = 0;
    var jsonArticulo;
    while((jsonArticulo = localStorage.getItem(cont)) != null){  
        cont++;
        let auxArticulo = JSON.parse(jsonArticulo);
        let categories = [];
        auxArticulo.categories.forEach(function(value, index, array){
           switch(index){
            case 0:
                if(value == true){
                    categories.push("Health-&-wellness");
                }
                break;
            case 1:
                if(value == true){
                    categories.push("Training-and-cleaning");
                };
                break;
            case 2:
                if(value == true){
                    categories.push("Home");
                };
                break;
            case 3:
                if(value == true){
                    categories.push("Sand-and-accesories");
                };
                break;
            case 4:
                if(value == true){
                    categories.push("transporters-and-travel");
                };
                break;
            case 5:
                if(value == true){
                    categories.push("Toys");
                };
                break;
            case 6:
                if(value == true){
                    categories.push("Grooming");
                };
                break;
            case 7:
                if(value == true){
                    categories.push("Dental-care");
                };
                break;
            case 8:
                if(value == true){
                    categories.push("Necklaces-leashes-and-clothes");
                };
                break;
            case 9:
                if(value == true){
                    categories.push("Dry-food");
                };
                break;
            case 10:
                if(value == true){
                    categories.push("Wet-food");
                };
                break;
           }
        });

        if(auxArticulo.cat == true){
            categories.push("Cat");
        }else{
            categories.push("Dog");
        }
            

        let object ='  <li class="post" data-category="';
        for(let i = 0; i<categories.length;i++){
            object += categories[i] + " ";
        }
        object += ' ">  ' +
      ' <article> ' +
      '  <figure> ' +
      ' <a href="" target="_blank"> ' +
      '        <img src="'+ auxArticulo.image +'" alt="" style="display: block; ' +
      '                margin-left: auto; ' +
      '                margin-right: auto; ' +
      '                width: 50%;"> ' +
      '                </a> ' +
      '      <figcaption> ' +
      '        <ol class="post-categories"> ';
        for(let i = 0; i < categories.length; i++){
            object += '<li> '+
            '            <a href="">'+categories[i] +'</a> '+
            '          </li> ';
        };
      object += '        </ol> '+
      '        <h2 class="post-title"> '+
      '          <a href="" target="_blank"> '+
      '          </a> '+
      '          '+ auxArticulo.description +'  '+
      '        </h2> '+
      '         <div class="price mt-2">$'+ auxArticulo.price +'</div>'+
      '        <a href="#" class="btn btn-light"> <span class="text">Add to cart</span> <i '+
      '            class="fa fa-shopping-cart"></i> </a> '+
      '      </figcaption> '+
      '    </figure> '+
      '  </article> '+
      '</li> ';
      const orderedList = document.getElementById("item-list");
      orderedList.innerHTML += object;
      
    }
