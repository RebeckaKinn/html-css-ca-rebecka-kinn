function filterComponent(){
    return /*HTML*/`
        <input
                type="checkbox"
                id="filter-toggle"
              />
              <label for="filter-toggle" class="pointer centered column margin-bottom-2-em">
                <span class="remove-margin main-color-item hidden-on-mobile">FILTER</span>
                <img
                  src="assets/icons/filter.svg"
                  alt="filter-button"
                />
              </label>

              <section class="pop-up left-shadow">
                <div class="full-size">
                  <label class="closeButton" for="filter-toggle">
                    <span></span>
                  </label>
  
                  <div class="full-size flex-colum align-items-center">
                    <h2 class="title">Filter</h2>
                    <div>
                      <fieldset class="flex-row">
                        <legend><h3>Fit</h3></legend>
                        <input class="remove-input filter-input" id="filter-fit-all" type="radio" checked="checked" name="filter-fit">
                        <label for="filter-fit-all" class="filter-button light-gray-color">All</label>
                        
                        <input class="remove-input filter-input" id="filter-fit-women" type="radio" name="filter-fit">
                        <label for="filter-fit-women" class="filter-button light-gray-color chosen-filter">Women</label>
                        
                        <input class="remove-input filter-input" id="filter-fit-men" type="radio" name="filter-fit">
                        <label for="filter-fit-men" class="filter-button light-gray-color">Men</label>
                      </fieldset>

                      <fieldset class="flex-row flex-wrap">
                      <legend><h3>Category</h3></legend>
                        <input class="remove-input filter-input" id="filter-fit-all2" type="radio" checked="checked" name="filter-category">
                        <label for="filter-fit-all2" class="filter-button light-gray-color chosen-filter">All</label>

                        <input class="remove-input filter-input" id="filter-fit-Cycling" type="radio" name="filter-category">
                        <label for="filter-fit-Cycling" class="filter-button light-gray-color">Cycling</label>

                        <input class="remove-input filter-input" id="filter-fit-Canoeing" type="radio" name="filter-category">
                        <label for="filter-fit-Canoeing" class="filter-button light-gray-color">Canoeing</label>

                        <input class="remove-input filter-input" id="filter-fit-Hiking" type="radio" name="filter-category">
                        <label for="filter-fit-Hiking" class="filter-button light-gray-color">Hiking</label>

                        <input class="remove-input filter-input" id="filter-fit-Exploring" type="radio" name="filter-category">
                        <label for="filter-fit-Exploring" class="filter-button light-gray-color">Exploring</label>

                        <input class="remove-input filter-input" id="filter-fit-Camping" type="radio" name="filter-category">
                        <label for="filter-fit-Camping" class="filter-button light-gray-color">Camping</label>

                        <input class="remove-input filter-input" id="filter-fit-Skiing" type="radio" name="filter-category">
                        <label for="filter-fit-Skiing" class="filter-button light-gray-color">Skiing</label>
                      </fieldset>
                    </div>
  
                    <div class="full-width bottom flex-row justify-content-center margin-bottom-2-em">
                      <a class="white-button full-width remove-text-wrap" href="allProducts.html">Reset Filter</a>
                      
                      <label for="filter-toggle" class="colored-button full-width remove-text-wrap">Apply</label>
                    </div>
                  </div>

                </div>

              </section>
    `;
}

function initFilter(){
    document.getElementById('filter').innerHTML = filterComponent();
}
initFilter();