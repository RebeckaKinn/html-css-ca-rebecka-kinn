function fetchProductsByType(type){
    const product = products.filter(element => element.type == type);
    return product;
}
function fetchProductsByCategory(category){
    const product = products.filter(element => element.category == category);
    return product;
}

function displayProducts(type, category){
    let filteredProducts = [];
    if(type != null && category == null) filteredProducts = fetchProductsByType(type);
    else if(type == null && category != null) filteredProducts = fetchProductsByCategory(category);
    else filteredProducts = products;

    document.getElementById('display').innerHTML =
        filteredProducts.map(product => /*HTML*/`
            <div class="img-card-item">
            <a class="img-container" href="product-female.html">
              <img
                src=${product.image.src}
                alt=${product.image.alt}
              />
            </a>
            <ul class="flex-row">
            ${product.colors.map(element => /*HTML*/`
                    <li class="color-circle bottom-shadow ${element}-color"></li>
                `).join("")}
            </ul>
            <div>
              <h3 class="title line-height-seamless">${product.title}</h3>
              <h4 class="title">${product.price},-</h4>
            </div>
            <div class="flex-grow">
              <ul class="ellipsis">
              ${product.cardDescription.map(element => /*HTML*/`
                    <li>
                        <p class="gray-font-s">${element}</p>
                    </li>
                `).join("")}
              </ul>
            </div>

            <a class="colored-button" href="product-female.html">View product</a>
          </div>
        `).join("");
}