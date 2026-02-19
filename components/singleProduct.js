function fetchSingleProductData(id){
    const product = products.filter(element => element.id == id);
    return product[0];
}

function displaySingleProduct(id){
    const product = fetchSingleProductData(id);
    console.log(product || "error getting product")
    document.getElementById('productDisplay').innerHTML = /*HTML*/`
    <section class="side-margin flex-colum product-container">
          <div class="img-container">
            <img
              src=${product.image.src}
              alt=${product.image.alt}
            />
          </div>

          <fieldset class="slideshowButtons centered flex-row">
            <input class="remove-input" type="radio" checked="checked" name="img-slider-1" id="img-slider-1-1" />
            <label for="img-slider-1-1" class="color-circle bottom-shadow gray-color"></label>

            <input class="remove-input" type="radio" name="img-slider-1" id="img-slider-1-2" />
            <label for="img-slider-1-2" class="color-circle bottom-shadow gray-color"></label>

            <input class="remove-input" type="radio" name="img-slider-1" id="img-slider-1-3" />
            <label for="img-slider-1-3" class="color-circle bottom-shadow gray-color"></label>

            <input class="remove-input" type="radio" name="img-slider-1" id="img-slider-1-4" />
            <label for="img-slider-1-4" class="color-circle bottom-shadow gray-color"></label>

            <input class="remove-input" type="radio" name="img-slider-1" id="img-slider-1-5" />
            <label for="img-slider-1-5" class="color-circle bottom-shadow gray-color"></label>
          </fieldset>

          <div class="productInfo flex-colum">
            <i class="gray-font-s hidden-on-desktop">${product.collection}</i>
            <div class="flex-row space-between">
              <h1 class="title remove-margin">${product.title}</h1>
              <h2 class="title remove-margin hidden-on-desktop">${product.price},-</h2>
            </div>
            <i class="gray-font-s hidden-on-mobile">${product.collection}</i>

            <p>${product.itemDescription}</p>

            <a href="#description-section">
              <h3>➤ Read More</h3>
            </a>

              <fieldset class="flex-row">
                <legend class="medium top padding-top-bottom-small">Select Color</legend>
                ${product.colors.map((element, index) => /*HTML*/`
                    <input class="remove-input color-chooser-input" type="radio" checked="checked" name="color-picker" id="color-picker-${index}" />
                    <label class="color-circle product-page-color ${element}-color" for="color-picker-${index}"></label>
                `).join("")}
              </fieldset>
              <fieldset class="flex-row">
                <legend class="medium padding-top-bottom-small">Select Size</legend>
                ${product.sizes.map((element, index) => /*HTML*/`
                    <input class="remove-input size-chooser-input" type="radio" checked="checked" name="size-picker" id="size-picker-${index}" />
                    <label class="centered color-circle product-page-size gray-color" for="size-picker-${index}">${element}</label>
                `).join("")}
                
              </fieldset>

            <div class="centered space-between-desktop">
              <input
                type="checkbox"
                id="addToCart-toggle"
              />
              <label for="addToCart-toggle" class="colored-button font-size" >
                Add To Cart
                <img
                  src="assets/icons/add-shopping-cart.svg"
                  alt="add-to-card-logo"
                />
              </label>
              <h2 class="title remove-margin hidden-on-mobile">${product.price},-</h2>
              <section class="addToCart-message bottom-shadow">${addToCartMessage()}</section>
            </div>
          </div>

        </section>

        <section class="side-margin flex-colum top-line">
          <h3 id="description-section">Description</h3>
          <p>${product.description}</p>

          <h3>Key Features</h3>
          <ul class="bullet">
          ${product.keyFeatures.map(element => /*HTML*/`
            <li>
                <p>
                    <b>${element.title}: </b>
                    ${element.description}
                </p>
            </li>
            `).join("")}
          </ul>
        </section>

        <section class="grid-section">
          <div class="side-margin">
            <h3>Material & Build</h3>
            <p>${product.materialAndBuild.description}</p>
            <ul>
                ${product.materialAndBuild.information.map(element => /*HTML*/`
                <li>
                    <b>${element.title}</b>
                    <p class="remove-margin bottom-margin">${element.description}</p>
                </li>
                `).join("")}
            </ul>
          </div>

          <div class="card-img background-img-product-page">${questionAddon()}</div>
        </section>

        <section class="side-margin flex-colum">
          <h3>${product.footerText.title}</h3>
          <p>${product.footerText.description}</p>
        </section>
        ${backToTopButton()}
    `;
}

function addToCartMessage(){
    return /*HTML*/`
            <div class="flex-colum gap">
                  <div class="flex-row">
                      <label class="closeButton margin-left-small" for="addToCart-toggle">
                        <span></span>
                      </label>
                      <img class="top-margin" src="assets/icons/added-to-cart.svg" alt="Added to cart icon">
                        <div class="top-margin">
                          <h3 class="remove-margin">Item added to your cart</h3>
                          <p class="remove-margin gray-font-s">2 items total in cart</p>

                        </div>
                    </div>
                    
                    <div class="flex-row align-items-center justify-content-center">
                      <a class="white-button remove-text-wrap" href="new-arrivals.html">Continue Shopping</a>
                      <label for="shopping-cart-toggle" class="colored-button remove-text-wrap">Open cart</label>
                    </div>
                  </div>
    `;
}

function questionAddon(){
    return /*HTML*/`
            <div class="col1 coli-flex grid-placement-end">
              <b class="img-font">Have any questions?</b>
              <p class="img-font">Contact us for alternatives, sizing or usage. We are happy to
                help and out customer support is always here to help and guide
                you.
              </p>
              <a
                href="contact.html"
                class="white-button square-button bottom-shadow font-size">Contact Us</a>
            </div>
            <img
              class="col2 img-icon img-logo-right"
              src="assets/images/RainyDays_Logo_inverted.png"
              alt="RaindyDays Watermark"
            />
    `;
}