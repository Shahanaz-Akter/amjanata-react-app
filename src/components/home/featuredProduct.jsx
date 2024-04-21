import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
function FeaturedProduct() {

        // Create three dots icon
        let dotsIcon = ['<i class="fa-solid fa-ellipsis text-dark"></i>'];
        // Append dots icon between the navigation buttons
        $('.owl-nav').children('.owl-next').before(dotsIcon);
   

    const options = {
      loop: true,
      margin: 10,
      nav: true,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      },
      autoplay: true, // Enable autoplay
      autoplayTimeout: 2000, // Set autoplay timeout to 2 seconds
      autoplayHoverPause: true // Pause autoplay on hover
    };

    return (
    <section className="">
      <div className="section-padding text-center bg-skyblue-light my-2 rounded-3 mx-lg-5">
        <div className="container-md">
          <div className="text-center py-3">
            <h3 className="mb-0 h3 fw-bold">Featured Products</h3>
            {/* <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p> */}
          </div>
          
           <div className="border mt-4">
                        {/* <div className="owl-carousel owl-theme "> */}
                            <OwlCarousel className='owl-theme' {...options}>

                         
                                <div className="card">

                                    <div className="item child" style={{position: 'relative'}}>
                                        <a href="">
                                        <img src="/src/assets/front_assets/images/unveil the latest/accessories1.png" alt="not available" height="auto" width="30" />
                                        </a>

                                        <div className="hover-content d-none" style={{position: 'absolute', top:'70%' ,left:'31%'}}>
                                            <a className="btn btn-sm  btn-dark"><i className="bi bi-basket3 liveToastBtnbtn"></i></a>
                                            <a href="" data-bs-toggle="modal" data-bs-target="" className="d-none btn btn-sm btn-dark"><i className="bi bi-zoom-in"></i></a>
                                            <a href="/billing1" className="btn btn-sm btn-dark">
                                              <i className="bi bi-telephone-fill"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="product-info text-center">
                                            <h6 className="mb-1 fw-bold product-name">
                                              <span>product name</span>              
                                            </h6>
                                            <div className="ratings mb-1 h6">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                            </div>
                                              <span className="mb-0 h6 fw-bold product-price">৳
                                                  5756
                                              </span>
                                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="card">


                                    <div className="item child" style={{position: 'relative'}}>
                                        <a href="">
                                        <img src="/src/assets/front_assets/images/unveil the latest/Casual.png" alt="not available" height="auto" width="30" />
                                        </a>

                                        <div className="hover-content d-none" style={{position: 'absolute', top:'70%' ,left:'31%'}}>
                                           
                                            <a className="btn btn-sm  btn-dark"><i className="bi bi-basket3 liveToastBtnbtn"></i></a>
                                            <a href="" data-bs-toggle="modal" data-bs-target="" className="d-none btn btn-sm btn-dark"><i className="bi bi-zoom-in"></i></a>
                                            <a href="/billing1/<%=product.id%>" className="btn btn-sm btn-dark">
                                                <i className="bi bi-telephone-fill"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="product-info text-center">
                                            <h6 className="mb-1 fw-bold product-name">
                                              <span>product name</span>

                                                              
                                            </h6>
                                            <div className="ratings mb-1 h6">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                            </div>

                                           
                                                            <span className="mb-0 h6 fw-bold product-price">৳
                                                               5756
                                                            </span>
                                                            
                                        </div>
                                    </div>



                                </div>

                                  <div className="card">

                                    <div className="item child" style={{position: 'relative'}}>
                                        <a href="">
                                        <img src="/src/assets/front_assets/images/unveil the latest/footwear.png" alt="not available" height="" width="50" />
                                        </a>

                                        <div className="hover-content d-none" style={{position: 'absolute', top:'70%' ,left:'31%'}}>
                                            <a className="btn btn-sm  btn-dark"><i className="bi bi-basket3 liveToastBtnbtn"></i></a>
                                            <a href="" data-bs-toggle="modal" data-bs-target="" className="d-none btn btn-sm btn-dark"><i className="bi bi-zoom-in"></i></a>
                                            <a href="/billing1/<%=product.id%>" className="btn btn-sm btn-dark">
                                              <i className="bi bi-telephone-fill"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="product-info text-center">
                                            <h6 className="mb-1 fw-bold product-name">
                                              <span>product name</span>              
                                            </h6>
                                            <div className="ratings mb-1 h6">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                            </div>
                                              <span className="mb-0 h6 fw-bold product-price">৳
                                                  5756
                                              </span>
                                                            
                                        </div>
                                    </div>
                                </div>

                        </OwlCarousel>
          </div>

        </div>

        <div className="my-2 mx-3 mt-5">
          <h2>Make New Moves</h2>
          <div className="my-2 mx-lg-3 makeNewCard">
            <div className="row">
              <div className="col-6 col-sm-3 col-md-3 mb-3">
                <div className="card border-0">
                  <img src="/src/assets/front_assets/images/Makes new move/Beauty.png" className="card-img-top" alt="..." />

                  <div className="card-body px-1" style={{height: '90px'}}>
                    <div className="text-danger position-relative">
                      <p className="mb-0 ps-3 position-absolute">Upto</p>
                      <p className="mb-0 fs-1 ps-2 position-absolute" style={{top: '12px'}}>50</p>
                      <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '16px', left: '50px'}}>%</p>
                      <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '30px', left: '56px'}}>off</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-md-3">
                <div className="card border-0">
                  <img src="/src/assets//front_assets/images/Makes new move/jewellery3.png" className="card-img-top" alt="..." />

                  <div className="card-body px-1" style={{height: '90px'}}>
                    <div className="text-danger position-relative">
                      <p className="mb-0 ps-3 position-absolute">Upto</p>
                      <p className="mb-0 fs-1 ps-2 position-absolute" style={{top: '12px'}}>50</p>
                      <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '16px', left: '50px'}}>%</p>
                      <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '30px', left: '56px'}}>off</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-md-3">
                <div className="card border-0">
                  <img src="/src/assets/front_assets/images/Makes new move/footwear.png" className="card-img-top" alt="..." />

                  <div className="card-body px-1" style={{height: '90px'}}>
                    <div className="text-danger position-relative">
                      <p className="mb-0 ps-3 position-absolute">Upto</p>
                      <p className="mb-0 fs-1 ps-2 position-absolute" style={{top: '12px'}}>50</p>
                      <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '16px', left: '50px'}}>%</p>
                      <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '30px', left: '56px'}}>off</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-md-3">
                <div className="card border-0">
                  <img src="/src/assets/front_assets/images/Makes new move/Kurta.png" className="card-img-top" alt="..." />

                  <div className="card-body px-1" style={{height: '90px'}}>
                    <div className="text-danger position-relative">
                      <p className="mb-0 ps-3 position-absolute">Upto</p>
                      <p className="mb-0 fs-1 ps-2 position-absolute" style={{top: '12px'}}>50</p>
                      <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '16px', left: '50px'}}>%</p>
                      <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '30px', left: '56px'}}>off</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       
    );
}

export default FeaturedProduct;