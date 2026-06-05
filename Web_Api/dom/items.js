let item1={id:101,title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",price:64,category:"Electronics",image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",rating:4.8

};



let item2={id:102,title:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) Super Ultrawide Screen QLED ",price:999.9,category:"Electronics",image:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",rating:4.3};

let item3={id:103,title:"MBJ Women's Solid Short Sleeve Boat Neck V",price:455,category:"women's clothing",image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",rating:4.6};

let products=[item1,item2,item3];
function displayProducts(){
  let str="";
  for(let product of products){
    let{title,price,category,rating,image}=product;
    str=str+`<div class="row mb-3">
    <div class="col-10 m-auto">
      <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-4 text-center">
            <img src="${image}"></img>
          </div>
          <div class="col-8">
            <h2>${category}</h2>
            <h5>${title}</h5>
            <h3>⭐${rating}</h3>
            <h4>💰${price}</h4>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div> 
    `
  }

  console.log(str);
  let dataEle=document.getElementById('data-ele');
  dataEle.innerHTML=str;
}
displayProducts();