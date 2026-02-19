function header(){
    return /*HTML*/`
    
        <a class="header-logo" href="home.html">
          <img
            src="assets/images/RainyDays_Logo.png"
            alt="RainyDays - Pushing the Comfort Zone - Logo"
          />
        </a>

        <a href="home.html" class="hidden-on-desktop back-button">
          <div class="circle-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>

        <nav id="menu" role="navigation" aria-label="Main navigation">
          <input id="burgerMenu" type="checkbox" />
          <label for="burgerMenu" class="circle-button">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <ul class="menu-items menu-layout">
            <li>
              <img
                class="hidden-on-desktop"
                src="assets/images/RainyDays_Logo.png"
                alt="RainyDays-logo"
              />
            </li>
            <li><a href="home.html">Home</a></li>
            <li class="hidden-on-desktop"><p>Products ></p></li>
            <li><a href="new-arrivals.html">New Arrivals</a></li>
            <li><a href="allProducts-male.html">Men</a></li>
            <li><a href="allProducts-female.html">Women</a></li>
            <li><a href="allProducts.html">All</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
            <li>
              <label
                for="shopping-cart-toggle"
                class="shoppingCart-button hidden-on-desktop"
              >
                <img src="assets/icons/shoppingcart.svg" alt="shopping-cart" />
              </label>
            </li>
          </ul>
        </nav>

        <div class="hidden-on-mobile search">${searchBar()}</div>

        <div class="shopping-cart">
          <input
            class="hidden-on-mobile"
            type="checkbox"
            id="shopping-cart-toggle"
          />
          <label
            class="shoppingCart-button hidden-on-mobile"
            for="shopping-cart-toggle"
          >
            <img src="assets/icons/shoppingcart.svg" alt="shopping-cart" />
          </label>

          <section id="shopping-cart" class="left-shadow">${cart()}</section>
        </div>
      
    `;
}
