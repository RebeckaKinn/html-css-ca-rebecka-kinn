function searchBar(){
    return /*HTML*/`
        <form action="search-results.html" method="get">
            <img src="assets/icons/searchsvg.svg" alt="search-icon" />
            <input
              id="search-bar"
              type="text"
              placeholder="search"
              class="search-bar"
            />
          </form>
          <section class="search-menu-container">
            <menu class="search-menu">
                <li>
                  <a href="allProducts-forExploring.html">
                    <h3>Exploring</h3>
                    <p>
                      All jackets for exploring. Explore a diverse range of
                      outdoor jackets tailored for every adventure. From women's
                      lightweight hiking shells to men's insulated parkas, our
                      collection features versatile styles suitable for various
                      climates and activities.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="product-male.html">
                    <h3>Expedition Pro Jacket</h3>
                    <p>
                      Durable nylon with waterproof coating. Breathable Fabric.
                      Multiple external and internal pockets. Underarm zippers
                      for airflow.
                    </p>
                  </a>
                </li>
                <li class="align-self-center">
                  <a href="search-results.html"><h2>View All</h2></a>
                </li>
            </menu>
          </section>
    `;
}