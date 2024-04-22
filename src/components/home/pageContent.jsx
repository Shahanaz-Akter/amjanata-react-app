import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import TrendyProduct from './TrendyProduct';

const PageContent = () => {
    return (

       <div>
        {/* page content start */}
        <div className="page-content container-lg mx-auto">

        {/* carousel-1 */}
        <section className="slider-section">
        <div id="carouselExampleCaptions" className="mx-lg-5 carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row d-flex align-items-center">
                <div className="col d-lg-flex justify-content-center">
                    <img src="/src/assets/front_assets/img/Untitled-1-01.png" className="img-fluid" alt="..." />
                </div>
                </div>
            </div>
            <div className="carousel-item active">
                <div className="row d-flex align-items-center">
                <div className="col d-lg-flex justify-content-center">
                    <img src="/src/assets/front_assets/img/banner-01.jpg" className="img-fluid" alt="..." />
                </div>
                </div>
            </div>
            <div className="carousel-item active">
                <div className="row d-flex align-items-center">
                <div className="col d-lg-flex justify-content-center">
                    <img src="/src/assets/front_assets/img/yellow banner-01.jpg" className="img-fluid" alt="..." />
                </div>
                </div>
            </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
            </button>
        </div>
        </section>
        {/* carousel-1 */}

  {/* banner-2 */}
    <section className="py-3">
      <div className="mx-lg-5 p-4 d-flex align-items-center justify-content-evenly flex-wrap" style={{
            backgroundColor: '#78efbf',
            borderTopRightRadius: '40px',
            borderBottomLeftRadius: '40px',
      }}>
        <div className="d-none d-sm-none d-lg-block">
          <h1>
            Fresh <br />
            Finds <br />
            Await
          </h1>
        </div>
        <div className="banner-2 d-lg-none d-md-block d-none d-sm-block">
          <h1>Fresh Finds Await</h1>
        </div>
        <div>
          <p className="text-center text-dark">
            Embark on a journey of discovery with our latest <br />
            arrivals, offering fresh and exciting items to elevate <br />
            your experience.
          </p>
        </div>
      </div>
    </section>
    {/* banner-2 */}

    {/*  banner-3 */}
    <section className="">
      <div className="align-items-center d-flex flex-column-reverse flex-lg-row flex-md-row flex-sm-col justify-content-evenly mx-lg-5" style={{backgroundColor: '#d9f9ea', borderRadius: '10px'}}>
        <div className="px-md-3 px-sm-3 p-3">
          <h1>Explore Our Latest Arrivals and Elevate Your Experience!</h1>
          <p className="text-center text-dark">
            Dive into the World of Our New Collections!
          </p>
        </div>
        <div className="px-lg-5 px-md-3 px-sm-3 special" style={{
              backgroundColor: '#78efbf',
              borderBottomLeftRadius: '50px',
              borderTopRightRadius: '50px',
              padding: '0 90px',
              margin: '15px',
              position: 'relative',
        }}>
          <i className="bi bi-arrow-right color-green" style={{
                position: 'absolute',
                left: '-25px',
                top: '160px',
                backgroundColor: '#78efbf',
                border: '5px solid #fcf0e1',
                borderRadius: '50%',
                padding: '15px',
                WebkitTextStroke: '3px'
          }}>

          </i>
          <img style={{width: '350px'}} src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-05.png" alt="" />
        </div>
      </div>
    </section>
    {/* <!-- banner-3 --> */}

    {/* <!-- featured-products --> */}
   <FeaturedProduct />
    {/* <!-- featured-products end --> */}


    {/* <!-- Change Your Look --> */}
    <section className="py-3">
      <div className="mx-lg-5 bg-skyblue-light-2 rounded-3 py-4">
        <h1 className="text-center my-3">Change Your Look</h1>
      
        <div className="my2 mx-lg-3 mx-2 change-look">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/images/Change Your look/backpack.png" className="card-img-top" alt="..." />

                <div className="card-body d-flex justify-content-center align-items-center" style={{height: '90px'}}>
                  <div className="text-danger">
                    <p className="text-center" style={{fontWeight: '600'}}>
                      Gift Card
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/images/Change Your look/ethnic.png" className="card-img-top" alt="..." />

                <div className="card-body" style={{height: '90px'}}>
                  <div className="text-dark position-relative">
                    <p className="mb-0 ps-3 position-absolute">under</p>
                    <p className="mb-0 fs-1 ps-2 position-absolute fw-bold" style={{top: '12px'}}>500</p>
                    <p className="mb-0 fs-6 ps-2 position-absolute tk-word" style={{top: '37px', left: '80px'}}>tk</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/images/Change Your look/perfume.png" className="card-img-top" alt="..." />
                <div className="card-body" style={{height: '90px'}}>
                  <div className="text-dark position-relative">
                    <p className="mb-0 ps-3 position-absolute">under</p>
                    <p className="mb-0 fs-1 ps-2 position-absolute fw-bold" style={{top: '12px'}}>300</p>
                    <p className="mb-0 fs-6 ps-2 position-absolute tk-word" style={{top: '37px', left: '80px'}}>tk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center my-3">Freshen Up Your Space</h2>
        <div className="my-2 mx-lg-3 mx-2 change-look">
          <div className="row">
            <div className="col-6 col-sm-3 col-md-3 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/images/Freshen up your space/new born baby.png" className="card-img-top" alt="..." />

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
                <img src="/src/assets/front_assets/images/Freshen up your space/boys.png" className="card-img-top" alt="..." />

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
                <img src="/src/assets/front_assets/images/Freshen up your space/girl1.png" className="card-img-top" alt="..." />

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
                <img src="/src/assets/front_assets/images/Freshen up your space/accessories.png" className="card-img-top" alt="..." />

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
    </section>
    {/* Change Your Look end */}

   

 {/* Clearance Run */}
    <section className="slider-section mx-lg-5">
      <style></style>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/src/assets/front_assets/img/yellow banner-01.jpg" className="d-block w-100" alt="..." style={{borderRadius: '10px'}} />
          </div>
          <div className="carousel-item">
            <img src="/src/assets//front_assets/img/yellow banner-01.jpg" className="d-block w-100" alt="..." style={{borderRadius: '10px'}} />
          </div>
          <div className="carousel-item">
            <img src="/src/assets//front_assets/img/yellow banner-01.jpg" className="d-block w-100" alt="..." style={{borderRadius: '10px'}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    {/*Clearance Run end*/}

    {/*  Unveil the Lates*/}
    <section className="">
      <div className="mx-lg-5 py-3 mt-3" style={{backgroundColor: '#78efbf'}}>
       
        <div>
          <div className="mx-sm-5 mx-2">
            <h1 className="">Unveil the Latest</h1>
            <p className="text-dark">Discover Our New Items Today.</p>
            <button className="btn btn-light">New Arrivals</button>
          </div>
        </div>

        <div className="my2 mt-3 mx-sm-5 mx-2 unveil-latest">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/images/unveil the latest/Casual.png" className="" alt="..." />

                <div className="card-body d-flex justify-content-center align-items-center text-black px-1 px-sm-2 px-md-3">
                  <p>Casual</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/images/unveil the latest/formal.png" className="" alt="..." />

                <div className="card-body d-flex justify-content-center align-items-center text-black px-1 px-sm-2 px-md-3">
                  <p>Formal</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/images/unveil the latest/accessories1.png" className="" alt="..." />
                <div className="card-body d-flex justify-content-center align-items-center text-black px-1 px-sm-2 px-md-3">
                  <p>Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Unveil the Latest */}

    {/* Catch The Latest Trends */}

    <section className="py- my-2">
    
      <div className="mx-lg-5 bg-skyblue-light">
        <h1 className="mx-1 py-3 text-center">Catch The Latest Trends</h1>

        <div className="my2 mt-3 mx-sm-5 mx-2 unveil-latest catchLatest">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-02.png" className="" alt="..." />

                <div className="card-body d-flex justify-content-center align-items-center text-black px-1 px-sm-2 px-md-3 text-center">
                  <p>January must-have</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-03.png" className="" alt="..." />

                <div className="card-body d-flex justify-content-center align-items-center text-black px-1 px-sm-2 px-md-3 text-center">
                  <p>This Hue is set to make your 2024 peachy</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 mb-3">
              <div className="card border-0">
                <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-04.png" className="" alt="..." />
                <div className="card-body d-flex justify-content-center align-items-center text-black px-1 px-sm-2 px-md-3 text-center">
                  <p>Feel organized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Catch The Latest Trends --> */}

  

{/* trendy product start*/}
   <TrendyProduct />
   {/* trendy product end*/}


    {/* Deals You'll Love */}
    <section className="">
      <h1 className="py-3 text-center">Deals You'll Love</h1>

      <div className="my-2 mx-lg-5">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-3 mb-3">
            <div className="card border-0" style={{backgroundColor: '#d5f9e9', padding: '20px 5px'}}>
              <div className="text-danger deals-text position-relative" style={{marginBottom: '90px'}}>
                <p className="mb-0 ps-3 position-absolute">Upto</p>
                <p className="mb-0 fs-1 ps-2 position-absolute" style={{top: '10px'}}>
                  50
                </p>
                <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '16px', left: '45px'}}>
                  %
                </p>
                <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '30px', left: '49px'}}>
                  off
                </p>
              </div>

              <div className="card deal mx-auto rounded-circle" style={{
                    width: '90%',
                    backgroundColor: '#78efbf',
                    borderWidth: '0',
                    borderRadius: '10px',
              }}>
                <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-23.png" className="py-3 deals-img" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="card border-0" style={{backgroundColor: '#fcf0e1', padding: '20px 5px'}}>
              <div className="text-danger deals-text position-relative" style={{marginBottom: '90px'}}>
                <p className="mb-0 ps-3 position-absolute">Upto</p>
                <p className="mb-0 fs-1 ps-2 position-absolute" style={{top: '10px'}}>
                  50
                </p>
                <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '16px', left: '45px'}}>
                  %
                </p>
                <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '30px', left: '49px'}}>
                  off
                </p>
              </div>

              <div className="card deal mx-auto rounded-circle" style={{
                    width: '90%',
                    backgroundColor: '#fedcb6',
                    borderWidth: '0',
                    borderRadius: '10px',
                  }}>
                <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-25.png" className="py-3 deals-img" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="card border-0" style={{backgroundColor: '#fcf0e1', padding: '20px 5px'}}>
              <div className="text-danger deals-text position-relative" style={{marginBottom: '90px'}}>
                <p className="mb-0 ps-3 position-absolute">Upto</p>
                <p className="mb-0 fs-1 ps-2 position-absolute" style={{top: '10px'}}>
                  50
                </p>
                <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '16px', left: '45px'}}>
                  %
                </p>
                <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '30px', left: '49px'}}>
                  off
                </p>
              </div>

              <div className="card deal mx-auto rounded-circle" style={{
                    width: '90%',
                    backgroundColor: '#fedcb6',
                    borderWidth: '0',
                    borderRadius: '10px'
                  }}>
                <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-23.png" className="py-3 deals-img" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="card border-0" style={{backgroundColor: '#fcf0e1', padding: '20px 5px'}}>
              <div className="text-danger deals-text position-relative" style={{marginBottom: '90px'}}>
                <p className="mb-0 ps-3 position-absolute">Upto</p>
                <p className="mb-0 fs-1 ps-2 position-absolute" style={{top: '10px'}}>
                  50
                </p>
                <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '16px', left: '45px'}}>
                  %
                </p>
                <p className="mb-0 fs-6 ps-2 position-absolute fw-bold" style={{top: '30px', left: '49px'}}>
                  off
                </p>
              </div>

              <div className="card deal mx-auto rounded-circle" style={{
                    width: '90%',
                    backgroundColor: '#fedcb6',
                    borderWidth: '0',
                    borderRadius: '10px',
              }}>
                <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-25.png" className="py-3 deals-img" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Deals You'll Love end */}

    {/* Featured All Categories */}
    <section className="section-padding">
      <div className="containe mx-lg-5">
        <div className="text-center pb-3">
          <h3 className="mb-0 h3 fw-bold">Featured All Categories</h3>
          <p className="mb-0 text-capitalize">Shop All</p>
          {/* <p className="mb-0 text-capitalize">Select your favorite brands and purchase</p> */}
        </div>
        <div className="brands">
          <div className="row row-cols-3 row-cols-lg-6 g-4">
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-26.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Valentine's Day</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-27.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Women's</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-28.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Men's</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-29.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Kids</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-30.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Baby</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box"style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-31.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Home</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-32.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Patio & Garden</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/Category/Category 2.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Mobile</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-34.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Storage & Organization</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-36.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Video Games</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-37.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Grocery</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-38.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Sports & Outdoors</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-39.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Beauty</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-40.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Toys</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-33.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Kitchen & Dinnig</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-42.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Pets</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/assets/front_assets/img/amjanata-pic-23/amjanata pic-13.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Pets</p>
            </div>
            <div className="col">
              <div className="p-0 border rounded-circle brand-box" style={{backgroundColor: '#fcf0e1'}}>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src="/src/front_assets/img/amjanata-pic-23/amjanata pic-33.png" className="img-fluid border-img" alt="" />
                  </a>
                </div>
              </div>
              <p className="text-center">Clearance</p>
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    </section>
    {/* Featured All Categories end */}


{/* start footer */}
    <section className="section-padding ms-md-5">
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-12 col-md-6 mt-4 col-lg-3 col-xl-3 mt-lg-0" style={{border: '0px solid'}}>
            <div className="" style={{width: '200px', margin: '0px auto'}}>
              <h5 className="mb-3 fw-bold">About Us</h5>
              <div className="list-unstyled text-dark">
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>About Amjanata</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Careers</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>News & Blog</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Amjanata Brands</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Bullseye Shop</a></li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}>Sustainability & Governance</a>
                </li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Press Center</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>Advertise with Us</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>Investors</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>Affiliates & Partners</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>Suppliers</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>AmjanataPlus</a></li>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 col-lg-3 col-xl-3 mt-lg-0" style={{border: '0px solid'}}>
            <div className="" style={{width: '200px', margin: '0px auto'}}>
              <h5 className="mb-3 fw-bold">Help</h5>
              <ul className="list-unstyled">
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Amjanata Help</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Returns</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Track Orders</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Recalls</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Contact Us</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Feedback</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Accessibility</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Security & Fraud</a></li>
                <li><a href="/privacy_policy"  style={{color: 'black', textDecoration:'none'}}>Privacy</a></li>
                <li><a href="/terms_condition"  style={{color: 'black', textDecoration:'none'}}>Terms & Condition</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Team Member Services</a></li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 col-lg-3 col-xl-3 mt-lg-0" style={{border: '0px solid'}}>
            <div className="" style={{width: '200px', margin: '0px auto'}}>
              <h5 className="mb-3 fw-bold">Stores</h5>
              <ul className="list-unstyled">
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-08.svg" alt="" style={{width: '20px'}} />
                    Location</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 col-lg-3 col-xl-3 mt-lg-0" style={{border: '0px solid'}}>
            <div className="" style={{width: '200px', margin: '0px auto'}}>
              <h5 className="mb-3 fw-bold">Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-01.svg" alt="" style={{width: '20px'}} />
                    Amjanata Circle</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-03.svg" alt="" style={{width: '20px'}} />
                    RedCard</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-04.svg" alt="" style={{width: '20px'}} />
                    Amjanata App</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-05.svg" alt="" style={{width: '20px'}} />
                    Registry</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-06.svg" alt="" style={{width: '20px'}} />
                    Delivery</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}>
                    <img src="/src/front_assets/img/icons/amjanata icon-07.svg" alt="" style={{width: '20px'}} />
                    Order Pickup</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-02.svg" alt="" style={{width: '20px'}} />
                    Free 2-Day Shipping</a>
                </li>
              </ul>
            </div>
          </div>

          {/* end row */}
        </div>
      </div>

      <div className="accordion accordion-flush d-block d-md-none" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              About Us
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="" style={{width: '200px',margin: '20px auto' }}>
              <div className="list-unstyled">
                <li><a href="">About Amjanata</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">News & Blog</a></li>
                <li><a href="">Amjanata Brands</a></li>
                <li><a href="">Bullseye Shop</a></li>
                <li>
                  <a href="">Sustainability & Governance</a>
                </li>
                <li><a href="">Press Center</a></li>
                <li><a href="">Advertise with Us</a></li>
                <li><a href="">Investors</a></li>
                <li><a href="">Affiliates & Partners</a></li>
                <li><a href="">Suppliers</a></li>
                <li><a href="">AmjanataPlus</a></li>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Help
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="" style={{width: '200px',margin: '20px auto' }}>
              <ul className="list-unstyled">
                <li><a href="">Amjanata Help</a></li>
                <li><a href="">Returns</a></li>
                <li><a href="">Track Orders</a></li>
                <li><a href="">Recalls</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Feedback</a></li>
                <li><a href="">Accessibility</a></li>
                <li><a href="">Security & Fraud</a></li>
                <li><a href="">Team Member Services</a></li>
                <li><a href="/privacy_policy">Privacy</a></li>
                <li><a href="/terms_condition">Terms & Condition</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Stores
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="" style={{width: '200px',margin: '20px auto' }}>
              <ul className="list-unstyled">
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-08.svg" alt="" style={{width: '20px'}} />
                    Location</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Services
            </button>
          </h2>
          <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div className="pb-1" style={{width: '200px',margin: '20px auto' }}>
              <ul className="list-unstyled">
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-01.svg" alt="" style={{width: '20px'}} />
                    Amjanata Circle</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-03.svg" alt="" style={{width: '20px'}} />
                    RedCard</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-04.svg" alt="" style={{width: '20px'}} />
                    Amjanata App</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-05.svg" alt="" style={{width: '20px'}} />
                    Registry</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-06.svg" alt="" style={{width: '20px'}} />
                    Delivery</a>
                </li>
                <li>
                  <a href="">
                    <img src="/src/front_assets/img/icons/amjanata icon-07.svg" alt="" style={{width: '20px'}} />
                    Order Pickup</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-02.svg" alt="" style={{width: '20px'}} />
                    Free 2-Day Shipping</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a href="">
              <img className="d-flex justify-content-center mx-auto my-0"  style={{width: '200px'}} src="/amjanata.png" alt="" />
        </a>
        </div>

    </section>
    {/* end footer */}
        </div>
{/* page content end */}
       </div>
    );
};

export default PageContent;