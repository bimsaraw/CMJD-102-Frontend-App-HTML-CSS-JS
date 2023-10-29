document.addEventListener("DOMContentLoaded", function () {
    getCategories();
});

const getCategories = () => {
    fetch("http://localhost:8080/categories").then((response) => {
        return response.json();
    }).then((data) => {
        const categorySelect = document.getElementById('categoryId');

        data.map((category) => { //for each loop
            const option = document.createElement('option');
            option.value = category.id;
            option.text = category.name;
            categorySelect.appendChild(option);
        });

    }).catch((error) => {
        console.log(error);
    });
}

const createProduct = (event) => {
    event.preventDefault();

    let productName = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let qty = document.getElementById('qty').value;
    let categoryId = document.getElementById('categoryId').value;

    //validations if needed

    const data = {
        "name": productName,
        "price": price,
        "qty": qty,
        "categoryId": categoryId
    }

    fetch("http://localhost:8080/products", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}