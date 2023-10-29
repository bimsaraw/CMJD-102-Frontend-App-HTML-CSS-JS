document.addEventListener("DOMContentLoaded",function() {
    //triggering after the content is loaded

    getProducts();
});

const getProducts = () => { //function getProducts() { }
    
    fetch("http://localhost:8080/products").then((response) => {
        return response.json();
    }).then((data) => {

        let products = "";

        data.map((product) => {
            products += `<div class="col-lg-3 col-sm-6 col-12 mb-4">`;
            products += `<div class="card">`;
            products += `<div class="card-body">`;
            products += `<h5 class="card-title">${product.name}</h5>`;
            products += `<p class="card-text">${product.price}</p>`;
            products += `<a href="#" class="btn btn-primary">View Product</a>`;
            products += `</div></div></div>`;
            //products += product.name;
        });

        document.getElementById("products").innerHTML = products;

        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}