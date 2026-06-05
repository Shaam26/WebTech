let item = {
  id:101,
  imgURL:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
  category:"Electronics",
  price:114,
  qty:1,
};

//object destructuring: means unpacking an  object into separate variables(introduced in ES-6)
let{id,imgURL,category,price,qty}=item;


let htmlCode = `<tr>
              <td>${item.id}</td>
              <td>
                <img src="${item.imgURL}" alt="" class="img-fluid" width="20px" height="20px">

              </td>
              <td>${item.category}</td>
              <td>&dollar; ${item.price}.00</td>
              <td>
                <i class="bi bi-dash-circle" id="minus-btn"></i>
                <span id="qty-ele">${item.qty}</span>
                <i class="bi bi-plus-circle" id="plus-btn"></i>
              </td>             
                <td>&dollar;<span id="total-ele"> ${item.price*item.qty}</span>.00</td> 
            </tr>`

let dataEle=document.getElementById('data-ele');
dataEle.innerHTML=htmlCode;

  let plusBtn=document.getElementById('plus-btn');
  let minusBtn=document.getElementById('minus-btn');
  let qtyEle=document.getElementById('qty-ele');
  let qtyEle=document.getElementById('total-ele');

  plusBtn.addEventListener('click',function(){
    qtyEle.textContent=++item.qty;
   totalEle.textContent=item.price*item.qty;
  })

  minusBtn.addEventListener('click',function(){
    if(item.qty>1) qtyEle.textContent=--item.qty;
    totalEle.textContent=item.price*item.qty;
  })
