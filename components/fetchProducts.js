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

function displayPopularChoices(type){
    const list = fetchProductsByType(type);
    let filterList;
    let idSliderName;
    let slidesButtons;
    if(type == "men") {
        filterList = list.slice(0, 3);
        idSliderName = "img-slider-1"
    }
    else if(type == "women") {
        filterList = list.slice(0, 2);
        idSliderName = "img-slider-w2"
    }
    
    const items = filterList.map((product, index) => /*HTML*/`
            <div class="img-card-item" id="slide-${index}">
                  <a class="img-container" href=${type == "men" ? "product-male.html" : "product-female.html"}>
                    <img
                      src=${product.image.src}
                      alt=${product.image.alt}
                    />
                  </a>
                  <div>
                    <h3 class="title line-height-seamless">${product.title}</h3>
                    <h4 class="title">${product.price},-</h4>
                  </div>
                  <p class="gray-font-s ellipsis remove-margin top-margin">
                  ${product.cardDescription.map(element => /*HTML*/`
                    <span>${element}</span>
                    `).join("")}
                  </p>
                  <a class="bold font-size" href=${type == "men" ? "product-male.html" : "product-female.html"}>View</a>
                </div>
        `).join("");

        for(let i = 0; i < filterList.length; i++){
            slidesButtons += /*HTML*/`
                <input type="radio" checked=${i == 0 ? "checked" : ""} name="img-slider-${type == "men" ? '1' : '2'}" id="${idSliderName}-${i}" />
                <label for="${idSliderName}-${i}"></label>
            `;
            }
        document.getElementById(type).innerHTML = /*HTML*/`
            <h2 class="medium side-margin capitalize">${type}</h2>
            <div class="slider-wrapper">
              <section class="item-slider">
                ${items}
                <div class="img-card-item centered view-more-card" id="slide-4">
                  <a href=${type == "men" ? 'allProducts-male.html' : 'allProducts-female.html'} class="centered column">
                    <div>+</div>
                    <b class="font-size">view more</b>
                  </a>
                </div>
              </section>
              <fieldset class="slider-nav">${slidesButtons}</fieldset>
            </div>
              `;
}

function initPopulatChoiceProducts(){
    displayPopularChoices("men");
    displayPopularChoices("women");
}