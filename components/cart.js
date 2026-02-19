function cart(){
    return /*HTML*/`
    <div class="items">
              <label class="closeButton" for="shopping-cart-toggle">
                <span></span>
              </label>

              <h2>Your Cart</h2>

              <section class="flex-colum align-items-center full-height gap-small">
                <input id="cart-item-1" type="checkbox" />

                <div id="item-1" class="added-items box-shadow">
                  <a class="item-img gap-small padding-right-5" href="product-male.html">
                    <img
                      src="assets/images/products/RainyDays_Jacket1transparent.png"
                      alt="Image of Rabot V2 3L Jacket - male"
                    />
                    <div class="color-circle orange-color"></div>
                  </a>

                  <div class="item-info">
                    <label class="delete-item" for="cart-item-1"></label>
                    <ul class="flex-colum gap-xsmall">
                      <li>
                        <h3 class="cart-item-fontSize remove-margin">Rabot V2 3L Jacket</h3>
                      </li>
                      <li>
                        <p class="gray-font-s ellipsis max-height-50 remove-margin">
                          Wind and waterproof. Light and durable. Long
                          ventilation zips for efficient ventilation.
                        </p>
                      </li>
                      <li>
                        <p class="cart-item-fontSize remove-margin">Size: <b>L</b></p>
                      </li>
                      <li>
                        <h3 class="cart-item-fontSize remove-margin">598,-</h3>
                      </li>
                  </ul>
                </div>
              </div>

              <input id="cart-item-2" type="checkbox" />
              <div id="item-2" class="added-items box-shadow">
                <a class="item-img gap-small padding-right-5" href="product-female.html">
                  <img
                  src="assets/images/products/RainyDays_Jacket244.png"
                    alt="Image of Cecilie Light Wind Anorak - women"
                  />
                  <div class="color-circle"></div>
                </a>

                <div class="item-info">
                  <label class="delete-item" for="cart-item-2"></label>
                  <ul class="flex-colum gap-xsmall">
                    <li>
                      <h3 class="cart-item-fontSize remove-margin">Cecilie Light Wind Anorak</h3>
                    </li>
                    <li>
                      <p class="gray-font-s ellipsis max-height-50 remove-margin">
                        Light and sporty anorak for outdoor activities.
                        Wind-resistant, water-repellent and breathable
                        material. Practical and compressible.
                      </p>
                    </li>
                    <li>
                      <p class="cart-item-fontSize remove-margin">Size: <b>S</b></p>
                    </li>
                    <li>
                      <h3 class="cart-item-fontSize remove-margin">349,-</h3>
                    </li>
                  </ul>
                </div>
              </div>

                <section class="cart-order-info line-height-seamless">
                  <div id="info-item-1">
                    <b class="medium">1 x Rabot V2 3L Jacket</b>
                    <h4>598,-</h4>
                  </div>
                  <div id="info-item-2">
                    <b class="medium">1 x Cecilie Light Wind Anorak</b>
                    <h4>349,-</h4>
                  </div>
                  <div id="info-total">
                    <b class="medium">Total</b>
                    <h4>947,-</h4>
                  </div>
                </section>

                <div class="empty-cart">
                  <h2>Oops!</h2>
                  <p>Looks like your Cart is Empty!</p>
                  <a class="white-button font-size" href="new-arrivals.html">View the New Arrivals</a>
                  <h3>OR</h3>
                  <a class="colored-button font-size" href="home.html">Continue shopping</a>
                </div>
                <a
                  class="colored-button bottom checkout-button font-size"
                  href="checkout.html">Checkout</a>
              </section>
            </div>
    `;
}