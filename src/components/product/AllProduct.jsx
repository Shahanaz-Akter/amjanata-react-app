import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

const AllProduct = () => {
    return (
 <div>
<Navbar/>
{/* <!--start page content--> */}
  <div className="page-content" style={{marginBottom: '100px'}}>
   
  {/* <!--start page content--> */}
  <div class="page-content" style={{marginBottom: '100px'}}>
    <div class="d-sm-block">
      {/* <!--start desktop product grid--> */}

      <section class="section-padding">
        <h5 class="mb-0 fw-bold d-none">Product Grid</h5>
        <div class="container">
          <div class="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarFilter"><span><i class="bi bi-funnel me-1"></i> Filters</span></div>
          <div class="row">
            <div class="col-12 col-xl-3 filter-column">
              <nav class="navbar navbar-expand-xl flex-wrap p-0">
                <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbarFilter" aria-labelledby="offcanvasNavbarFilterLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title mb-0 fw-bold" id="offcanvasNavbarFilterLabel">Filters</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <div class="filter-sidebar">
                      <div class="card rounded-0">
                        <div class="card-header d-none d-xl-block bg-transparent">
                          <h5 class="mb-0 fw-bold">Filters</h5>
                        </div>
                        <div class="card-body">
                          <h6 class="p-1 fw-bold bg-light">Categories</h6>
                          <div class="categories">
                            <div class="categories-wrapper height-1 p-1">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate1" />
                                <label class="form-check-label" for="chekCate1">
                                  <span>Shirts</span><span class="product-number">(1548)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate2" />
                                <label class="form-check-label" for="chekCate2">
                                  <span>Jeans</span><span class="product-number">(568)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate3" />
                                <label class="form-check-label" for="chekCate3">
                                  <span>Kurtas</span><span class="product-number">(784)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate4" />
                                <label class="form-check-label" for="chekCate4">
                                  <span>Makeup</span><span class="product-number">(1789)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate5" />
                                <label class="form-check-label" for="chekCate5">
                                  <span>Shoes</span><span class="product-number">(358)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate6"  />
                                <label class="form-check-label" for="chekCate6">
                                  <span>Heels</span><span class="product-number">(572)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate7" />
                                <label class="form-check-label" for="chekCate7">
                                  <span>Lehenga</span><span class="product-number">(754)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate8" />
                                <label class="form-check-label" for="chekCate8">
                                  <span>Laptops</span><span class="product-number">(541)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate9" />
                                <label class="form-check-label" for="chekCate9">
                                  <span>Jewellary</span><span class="product-number">(365)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate10" />
                                <label class="form-check-label" for="chekCate10">
                                  <span>Sports</span><span class="product-number">(4512)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate11" />
                                <label class="form-check-label" for="chekCate11">
                                  <span>Music</span><span class="product-number">(647)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate12" />
                                <label class="form-check-label" for="chekCate12">
                                  <span>Headphones</span><span class="product-number">(9848)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate13" />
                                <label class="form-check-label" for="chekCate13">
                                  <span>Sunglasses</span><span class="product-number">(751)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate14" />
                                <label class="form-check-label" for="chekCate14">
                                  <span>Belts</span><span class="product-number">(4923)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                           <hr>
                          <div class="brands">
                            <h6 class="p-1 fw-bold bg-light">Brands</h6>
                            <div class="brands-wrapper height-1 p-1">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand1" />
                                <label class="form-check-label" for="chekBrand1">
                                  <span>Samsung</span><span class="product-number">(1548)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand2" />
                                <label class="form-check-label" for="chekBrand2">
                                  <span>Sony</span><span class="product-number">(478)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand3" />
                                <label class="form-check-label" for="chekBrand3">
                                  <span>Microsoft</span><span class="product-number">(689)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                <label class="form-check-label" for="chekBrand4">
                                  <span>Reebok</span><span class="product-number">(987)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                <label class="form-check-label" for="chekBrand5">
                                  <span>Adidas</span><span class="product-number">(358)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand6" />
                                <label class="form-check-label" for="chekBrand6">
                                  <span>Puma</span><span class="product-number">(5682)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand7" />
                                <label class="form-check-label" for="chekBrand7">
                                  <span>Ajio</span><span class="product-number">(5712)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand8" />
                                <label class="form-check-label" for="chekBrand8">
                                  <span>Motorola</span><span class="product-number">(657)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand9" />
                                <label class="form-check-label" for="chekBrand9">
                                  <span>amazon</span><span class="product-number">(984)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand10" />
                                <label class="form-check-label" for="chekBrand10">
                                  <span>Canon</span><span class="product-number">(524)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand11" />
                                <label class="form-check-label" for="chekBrand11">
                                  <span>Apple</span><span class="product-number">(168)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand12" />
                                <label class="form-check-label" for="chekBrand12">
                                  <span>Philips</span><span class="product-number">(279)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <div class="Price">
                            <h6 class="p-1 fw-bold bg-light">Price</h6>
                            <div class="Price-wrapper p-1">
                              <div class="input-group">
                                <input type="text" class="form-control rounded-0" placeholder="BDT 500" />
                                <span class="input-group-text bg-section-1 border-0">-</span>
                                <input type="text" class="form-control rounded-0" placeholder="BDT 5000" />
                                <button type="button" class="btn btn-outline-dark rounded-0 ms-2"><i class="bi bi-chevron-right"></i></button>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <div class="colors">
                            <h6 class="p-1 fw-bold bg-light">Colors</h6>
                            <div class="color-wrapper height-1 p-1">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor1" />
                                <label class="form-check-label" for="chekColor1">
                                  <i class="bi bi-circle-fill me-1 text-danger"></i><span>Red</span><span class="product-number">(845)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor2" />
                                <label class="form-check-label" for="chekColor2">
                                  <i class="bi bi-circle-fill me-1 text-primary"></i><span>Blue</span><span class="product-number">(257)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor3" />
                                <label class="form-check-label" for="chekColor3">
                                  <i class="bi bi-circle-fill me-1 text-warning"></i><span>Yellow</span><span class="product-number">(968)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor4" />
                                <label class="form-check-label" for="chekColor4">
                                  <i class="bi bi-circle-fill me-1 text-success"></i><span>Green</span><span class="product-number">(478)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor5" />
                                <label class="form-check-label" for="chekColor5">
                                  <i class="bi bi-circle-fill me-1 text-info"></i><span>Skyblue</span><span class="product-number">(256)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor6" />
                                <label class="form-check-label" for="chekColor6">
                                  <i class="bi bi-circle-fill me-1 text-dark"></i><span>Black</span><span class="product-number">(124)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor7" />
                                <label class="form-check-label" for="chekColor7">
                                  <i class="bi bi-circle-fill me-1 text-purple"></i><span>Purple</span><span class="product-number">(897)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor8" />
                                <label class="form-check-label" for="chekColor8">
                                  <i class="bi bi-circle-fill me-1 text-orange"></i><span>Orange</span><span class="product-number">(68)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor9" />
                                <label class="form-check-label" for="chekColor9">
                                  <i class="bi bi-circle-fill me-1 text-cyane"></i><span>Cyane</span><span class="product-number">(784)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor10" />
                                <label class="form-check-label" for="chekColor10">
                                  <i class="bi bi-circle-fill me-1 text-brown"></i><span>Brown</span><span class="product-number">(532)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor11" />
                                <label class="form-check-label" for="chekColor11">
                                  <i class="bi bi-circle-fill me-1 text-ten"></i><span>Ten</span><span class="product-number">(532)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor12" />
                                <label class="form-check-label" for="chekColor12">
                                  <i class="bi bi-circle-fill me-1 text-pink"></i><span>Pink</span><span class="product-number">(452)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                           <hr>
                          <div class="discount">
                            <h6 class="p-1 fw-bold bg-light">Discount Range</h6>
                            <div class="discount-wrapper p-1">
                              <div class="form-check">
                                <input class="form-check-input" name="exampleRadios" type="radio" value="option1" id="chekDisc1" />
                                <label class="form-check-label" for="chekDisc1">
                                  10% and Above
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" name="exampleRadios" type="radio" value="option2" id="chekDisc1" />
                                <label class="form-check-label" for="chekDisc2">
                                  20% and Above
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" name="exampleRadios" type="radio" value="option3" id="chekDisc3" />
                                <label class="form-check-label" for="chekDisc3">
                                  30% and Above
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" name="exampleRadios" type="radio" value="option4" id="chekDisc4" />
                                <label class="form-check-label" for="chekDisc4">
                                  40% and Above
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" name="exampleRadios" type="radio" value="option5" id="chekDisc5" />
                                <label class="form-check-label" for="chekDisc5">
                                  50% and Above
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" name="exampleRadios" type="radio" value="option6" id="chekDisc6" />
                                <label class="form-check-label" for="chekDisc6">
                                  60% and Above
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" name="exampleRadios" type="radio" value="option7" id="chekDisc7" />
                                <label class="form-check-label" for="chekDisc7">
                                  70% and Above
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" name="exampleRadios" type="radio" value="option8" id="chekDisc8" />
                                <label class="form-check-label" for="chekDisc8">
                                  80% and Above
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div class="col-12 col-xl-9">
              <div class="shop-right-sidebar">
                <div class="card rounded-0">
                  <div class="card-body p-2">
                    <div class="d-flex align-items-center justify-content-between bg-light p-2">
                      <div class="product-count">657 Items Found</div>

                      <form>
                        <div class="input-group">
                          <span class="input-group-text bg-transparent rounded-0 border-0">Sort By</span>
                          <select class="form-select rounded-0">
                            <option selected>Whats'New</option>
                            <option value="1">Popularity</option>
                            <option value="2">Better Discount</option>
                            <option value="3">Price : Hight to Low</option>
                            <option value="4">Price : Low to Hight</option>
                            <option value="5">Custom Rating</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="product-grid mt-4">
                  <div class="row row-cols-2 row-cols-md-2 row-cols-lg-5 g-4">
                  
                      <div class="col">
                        <a href="/product/product_details/<%=record._id%>">
                          <div class="card h-100">
                            <img src="<%=record.primary_image%>" class="card-img-top" alt="..." />

                            <div class="card-body h-100">
                              <p>4<span style="color: #FF406C; font-size: 15px;">*</span> |6k</p>
                              <h5 class="card-title fs-5 fw-bold text-dark">
                               record.name
                              </h5>
                              <span class="text-secondary ">About Product</span>
                              <span class="text-dark">BDT record.selling_price</span> <br />
                              <span class="offer-text">BDT record.discount tk OFF</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    
                  </div>
                </div>

                <hr class="my-4" />

                <div class="product-pagination">
                  <nav>
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                      </li>
                      <li class="page-item active"><a class="page-link" href="javascript:;">1</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:;">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
          </div>


        </div>
      </section>
    </div>

    <div class="sec5 d-none">

      <div class="d-flex justify-content-center gap-2">
        <button class="btn btn-ghost border border-2 rounded-pill" style="font-size: x-small;">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M8.15496 1.86633C9.89173 3.77755 10.8787 6.25783 10.9324 8.84578C10.8787 11.4337 9.89173 13.914 8.15496 15.8252M8.15496 1.86633C6.41818 3.77755 5.43118 6.25783 5.37754 8.84578C5.43118 11.4337 6.41818 13.914 8.15496 15.8252M8.15496 1.86633C4.32015 1.86633 1.21143 4.99114 1.21143 8.84578C1.21143 12.7004 4.32015 15.8252 8.15496 15.8252M8.15496 1.86633C11.9898 1.86633 15.0985 4.99114 15.0985 8.84578C15.0985 12.7004 11.9898 15.8252 8.15496 15.8252M1.55862 6.75195H14.7513M1.5586 10.9396H14.7513"
              stroke="#272C3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Global Brands
        </button>
        <button class="btn btn-ghost border border-2 rounded-pill" style="font-size: x-small;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M1.81769 8.78666C1.54817 8.51575 1.41341 8.38029 1.31704 8.22221C1.2316 8.08206 1.16863 7.92926 1.13046 7.76943C1.0874 7.58916 1.0874 7.39759 1.0874 7.01446L1.0874 3.50999C1.0874 2.63271 1.0874 2.19408 1.25725 1.859C1.40666 1.56426 1.64506 1.32463 1.93828 1.17445C2.27163 1.00372 2.70801 1.00372 3.58077 1.00372H7.06721C7.44837 1.00372 7.63895 1.00372 7.81829 1.047C7.9773 1.08538 8.12931 1.14867 8.26874 1.23455C8.426 1.33142 8.56076 1.46688 8.83028 1.73779L14.8055 7.74392C15.7312 8.67441 16.1941 9.13966 16.3675 9.67614C16.52 10.148 16.52 10.6564 16.3675 11.1283C16.1941 11.6648 15.7312 12.13 14.8055 13.0605L13.0821 14.7928C12.1564 15.7233 11.6936 16.1885 11.1599 16.3628C10.6904 16.5162 10.1847 16.5162 9.71519 16.3628C9.18146 16.1885 8.71861 15.7233 7.79291 14.7928L1.81769 8.78666Z"
              stroke="#272C3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M8.28049 9.58109L8.58293 10.2674L8.28049 9.58109L7.44341 9.94997L7.53555 9.03987C7.57091 8.69071 7.45786 8.34278 7.22403 8.08108L6.61453 7.39896L7.50857 7.20536C7.85156 7.13109 8.14753 6.91605 8.32416 6.6128L8.78455 5.82235L9.24495 6.6128C9.42158 6.91605 9.71755 7.13109 10.0605 7.20536L10.9546 7.39896L10.3451 8.08108C10.1112 8.34278 9.9982 8.69071 10.0335 9.03987L10.1257 9.94997L9.28861 9.58109L8.98618 10.2674L9.28861 9.58109C8.96747 9.43958 8.60163 9.43958 8.28049 9.58109Z"
              stroke="#272C3F" stroke-width="1.5" />
          </svg>
          Top Brands
        </button>
        <button class="btn btn-ghost border border-2 rounded-pill" style="font-size: x-small;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path
              d="M12.14 5.68847L13.0633 5.30444L12.14 5.68847C12.428 6.38094 13.0792 6.85408 13.8268 6.91401L18.8091 7.31344L15.0131 10.5651C14.4436 11.053 14.1948 11.8186 14.3688 12.5481L15.5286 17.41L11.263 14.8046C10.623 14.4137 9.81804 14.4137 9.178 14.8046L4.91245 17.41L6.07219 12.5481C6.2462 11.8186 5.99746 11.053 5.42788 10.5651L1.63189 7.31344L6.6142 6.91401C7.36178 6.85408 8.013 6.38094 8.30101 5.68847L7.37769 5.30444L8.30101 5.68847L10.2205 1.07344L12.14 5.68847Z"
              stroke="#272C3F" stroke-width="2" />
          </svg>
          Top Rated
        </button>
      </div>

      <div class="row row-cols-2 g-1 p-3">

        <div class="col">
          <div class="card h-100">
            <img src="/front_assets/img/ribon/Mask group.png" class="card-img-top" alt="..." />

            <div class="card-body h-100">
              <p>4<span style="color: #FF406C; font-size: 15px;">*</span> |6k</p>
              <h5 class="card-title fs-5 fw-bold text-dark">Product</h5>
              <span class="text-secondary ">About Product</span>
              <span class="text-dark">BDT 500</span> <br />
              <span class="offer-text">BDT 250 tk OFF</span>
            </div>
          </div>
        </div>


      </div>
    </div>

  </div>
  </div>
   
</div>
        
<Footer/>
</div>
    );
};

export default AllProduct;