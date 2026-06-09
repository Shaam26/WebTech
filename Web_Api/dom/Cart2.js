let item1 = {
    id: 101,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: 4.8
};

let item2 = {
    id: 102,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 999.9,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: 4.3
};

let item3 = {
    id: 103,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 455,
    category: "Women's Clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    rating: 4.6
};

let products = [item1, item2, item3];

function displayProducts() {

    let str = "";
     for (let item of products) {

        let { title, price, category, rating, image } = products;






        str += `
        <div class="col-3">
            <div class="card">
            <div class="card-header">
                <img src="${image}"  alt="" class="img-fluid">
              </div>
                <div class="card-body text-center">
                    <h2>${category}</h2>

                    <h3>⭐ ${rating}</h3>

                    <h4>₹ ${price}.00</h4>
                    <h5>
                    <i class="bi bi-dash-circle" onclick="decQty(${id})"></i>
                    <span id="qty-ele">${qty}</span>
                    <i class="bi bi-dash-circle" onclick="incQty(${id})"></i>
                  </h5>
                </div>

            </div>
        </div>
        `
    }
    //console.log(str);
    let dataEle=document.getElementById('data-ele');
    dataEle.innerHTML=str;
  }
  displayProducts(products);

 



  

  function incQty(id){
    let newArr=[];

    for(let item of products){
      if(item.id==id){
        let newObj={...item,incQty:++item.qty};
        newArr.push(newObj);
      }
      else{
        newArr.push(item);
      }
    }


    //console.log(newArr);//[1,2,u,4]
    displayProducts();
  }

  function decQty(id){
    let newArr=products.map(test);//[]

    function test(item){
      if(item.id==id)return {...item,qty:(item.qty>1)?--item.qty:1};
      else return item;
    }
    displayProducts(newArr);
  }