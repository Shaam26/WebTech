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

    for (let product of products) {

        let { title, price, category, rating, image } = product;

        str += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">

                <img src="${image}" class="card-img-top">

                <div class="card-body text-center">
                    <h2 class="text-primary">${category}</h2>

                    <h6>${title}</h6>

                    <h3>⭐ ${rating}</h3>

                    <h4 class="text-center">₹ ${price}</h4>
                </div>

            </div>
        </div>
        `;
    }

    document.getElementById("data-ele").innerHTML = str;
}

displayProducts();