
    // var cont = 0;
    // var jsonArticulo;
    // while((jsonArticulo = localStorage.getItem(cont)) != null){  
    //     cont++;
    //     let auxArticulo = JSON.parse(jsonArticulo);
    //     let categories = [];
    //     auxArticulo.categories.forEach(function(value, index, array){
    //        switch(index){
    //         case 0:
    //             if(value == true){
    //                 categories.push("Health-&-wellness");
    //             }
    //             break;
    //         case 1:
    //             if(value == true){
    //                 categories.push("Training-and-cleaning");
    //             };
    //             break;
    //         case 2:
    //             if(value == true){
    //                 categories.push("Home");
    //             };
    //             break;
    //         case 3:
    //             if(value == true){
    //                 categories.push("Sand-and-accesories");
    //             };
    //             break;
    //         case 4:
    //             if(value == true){
    //                 categories.push("transporters-and-travel");
    //             };
    //             break;
    //         case 5:
    //             if(value == true){
    //                 categories.push("Toys");
    //             };
    //             break;
    //         case 6:
    //             if(value == true){
    //                 categories.push("Grooming");
    //             };
    //             break;
    //         case 7:
    //             if(value == true){
    //                 categories.push("Dental-care");
    //             };
    //             break;
    //         case 8:
    //             if(value == true){
    //                 categories.push("Necklaces-leashes-and-clothes");
    //             };
    //             break;
    //         case 9:
    //             if(value == true){
    //                 categories.push("Dry-food");
    //             };
    //             break;
    //         case 10:
    //             if(value == true){
    //                 categories.push("Wet-food");
    //             };
    //             break;
    //        }
    //     });

    //     if(auxArticulo.cat == true){
    //         categories.push("Cat");
    //     }else{
    //         categories.push("Dog");
    //     }


    //   let object = `
    //   <li class="post" data-category="`;
    //   for(let i = 0; i<categories.length;i++){
    //     object += categories[i] + " ";
    // }
    // object += `">
    //   <article>
    //     <div class="container-card">
    //       <div class="card" style="float: left;">
    //         <div class="inner-card"> <img src="`+ auxArticulo.image +`" class="img-fluid rounded">
    //           <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                
    //             <h4>`+ auxArticulo.name +`</h4>
    //           </div>
    //           <ol class="post-categories"> `;
    //           for(let i = 0; i < categories.length; i++){
    //             object += '<li> '+
    //             '            <a href="">'+categories[i] +'</a> '+
    //             '          </li> ';
    //         };
    //          object += ` </ol>
    //           <div class="mt-2 px-2"> <small>`+ auxArticulo.description +`</small> </div>
    //           <div class="px-2">
    //             <h3>$`+ auxArticulo.price +`</h3>
    //           </div>
    //           <div class="px-2 mt-3"> <a href="#" class="btn btn-light"> <span class="text">Add to cart</span> <i
    //                 class="fa fa-shopping-cart"></i> </a> </div>
    //         </div>
    //       </div>
    //     </div>
    //   </article>
    // </li>
    //   `;
    //   const orderedList = document.getElementById("item-list");
    //   orderedList.innerHTML += object;
      
    // }

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

            function addItem(item){
                // const itemHTML ='<div class="card">' +
                //                 '<img src = "'+ item.url_image +'">' +
                //                 '<div class="card-body">' +
                //                 '<h3 class="card-body">Product Name: ' + item.product_name + '</h3>' + 
                //                 '<p class="card-text">Product Description: ' + item.product_description + '</p>' +
                //                 '<p>Product price: ' + item.product_price + '</p>' + 
                //                 '<p>Quantity Products: ' + item.product_qty + '</p>' + 
                //                 '</div>' +
                //                 '</div>';
              //   const itemHTML = `
              //   <li class="post" data-category="All ">
              //   <article>
              //       <div class="card" style="width:300px; height: 650px;">
              //         <div class="inner-card"> <img style="width:250px; height: 250px;" src="`+ item.url_image +`" class="img-fluid rounded">
              //           <div class="d-flex justify-content-between align-items-center">
                          
              //             <div style="display:flex; justify-content:center; align-items:center; height: 100px; margin: 10px 0;"><h4>`+ item.product_name +`</h4></div>
              //           </div>
          
              //           <ol class="post-categories">
          
              //           </ol>
          
              //           <div class="mt-2 px-2" style="height: 160px; <small>`+ item.product_description +`</small> </div>
              //           <div class="px-2">
              //             <h3>$`+ item.product_price +`</h3>
              //           </div>
              //           <div class="px-2 mt-3"> 

              //           <a href="#" class="btn btn-light"> 
              //             <span class="text">Add to cart</span> 
              //                 class="fa fa-shopping-cart"></i>
              //           </a>
                        
              //           </div>
              //         </div>
              //       </div>
              //   </article>
              // </li>`
              // ;

              innerHTML = `
              <li class="post" data-category="All">
        <article>
          <div class="card">
            <img src="`+ item.url_image +`" alt="Denim Jeans" style="width:100%">
            <h1>`+ item.product_name +`</h1>
            <p class="price">$`+ item.product_price +`</p>
            <p class="card-description">`+ item.product_description +`</p>
            <div class="button-wraper">
      
              <a href="#" class="btn btn-light">
                <span class="text">Add to cart</span>
                <i class="fa fa-shopping-cart"></i>
              </a>
      
            </div>
          </div>
        </article>
      </li>`;
                const itemsContainer = document.getElementById("lista-objetos");
                itemsContainer.innerHTML += itemHTML;
            }