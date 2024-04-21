import { useState } from "react";

function Home() {

    return (
      //container div

       <div className="" style={{border: '0px solid red'}}>

        {/* start top header */}
        <div className="text-center" style={{backgroundColor: '#8aff5f', width: '95%!important'}}>
        <p>Amjanata</p>
        </div>

        <header className="mb-2 py-5 mx-sm-auto top-header">
        <nav className="navbar navbar-expand-md w-100 navbar-dark container-lg">
            <a className="navbar-brand d-none d-xl-inline" href="/">
            <img src="/amjanata.png"  className="logo-img" height="auto" width="100px"  alt=""/>
            </a>

           <a className="mobile-menu-btn d-inline d-xl-none" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
              <i className="bi bi-list"></i>
            </a>

            <a className="mobile-menu-btn d-inline d-xl-none" href="/">
              <img src="/amjanata.png" className="logo-img" alt="" />
            </a>

           <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">

              <div className="offcanvas-header justify-content-end">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className="offcanvas-body primary-menu">
                <ul className="navbar-nav justify-content-start flex-grow-1 gap-2">
                  <li className="mx-auto search w-100 me-1" style={{listStyle: 'none'}}>
                    <div className="d-flex align-items-center justify-content-between w-100">


                      <div className="dropdown mx-1 nav-item">
                        <a className="categories btn cat-btn-default-1 dropdown-toggle px-1" type="button" id="catDropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{fontSize: 'small', padding: '7px 0px'}}>
                          Categories
                        </a>
                        <ul className="c-dropdown-menu dropdown-menu px-2" aria-labelledby="catDropdownMenu1" style={{display: 'none'}}>
                        <li>list1</li>
                        <li>list2</li>
                        </ul>
                      </div>

                      <form className="categories rounded-3 w-100 d-flex" style={{width: '255px', borderRadius: '15px'}}>
                        <button className="rounded-3 categories" type="submit">
                          <i className="fa fa-search text-secondary"></i>
                        </button>
                        <input id="smallSearchBar" className="rounded-3 categories fs-6" style={{outline: 'none', borderRadius: '15px'}} type="text" placeholder="Search for Products, Brand ...." name="search" />
                      </form>
                    </div>

                    <div className="d-lg-none d-xl-none d-sm-block border mt-2">
                      <i className="bi bi-shop-window me-2"></i><a href="/seller/seller_register">Become a Seller</a>
                    </div>

                  </li>


                </ul>
              </div>

            </div>

           <ul className="navbar-nav secondary-menu flex-row">

              <li className="dropdown mx-1 hov nav-item d-none d-md-none d-lg-block nic-1030">
                <a className="btn btn-default " type="button" id="dropdownMenuLogin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{fontSize: '15px',padding: '7px 0'}}><i className="bi bi-person-circle me-2"></i>Login
                  <i className="fa-solid fa-angle-down submenuicon"> </i>
                </a>

                <ul className="shadow dropdown-menu list default-menu px-2 text-dark" aria-labelledby="dropdownMenuLogin">

                  <li className="my-1 d-flex align-items-center justify-content-between gap-1 text-center">
                    <p style={{marginBottom: '0'}}>New Customer?</p> <a href="/customer/user_register" className="text-primary">Sign Up</a>
                  </li>
                  <hr/>
                  <li>
                    <p><i className="bi bi-person-circle"></i> My Profile</p>
                  </li>
                  <li>
                    <a href="/customer/user_login">
                      <p>Login</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item d-md-block d-md-flex d-sm-block d-sm-flex d-xl-none d-lg-none ic-1030">
                <a className="nav-link" style={{fontSize:'25px',fontWeight: '500'}} href="/customer/user_login"><i className="bi bi-person-circle me-2"></i></a>
              </li>
              <li className="nav-item d-lg-flex d-lg-flex d-md-none d-none d-sm-none nic-1030">
                <a className="nav-link position-relative" style={{fontSize:'15px',fontWeight: '500'}} href="/product/cart">
                  {/* <div className="cart-badge">8</div> */}
                  <i className="bi bi-basket2 me-2"></i>
                  Cart
                </a>
              </li>
              <li className="nav-item d-md-block d-md-flex d-sm-block d-sm-flex d-xl-none d-lg-none ic-1030">
                <a className="nav-link position-relative" style={{fontSize:'25px',fontWeight: '500'}} href="/product/cart">
                  <i className="bi bi-basket2 me-2"></i>
                </a>
              </li>
              <li className="nav-item d-lg-block d-lg-flex d-md-none d-none d-sm-none nic-1030">
                <a className="nav-link" style={{fontSize:'15px',fontWeight: '500'}} href="/seller/seller_register"><i className="bi bi-shop-window me-2"></i>Become a Seller</a>
              </li>


            </ul>

            <li className="d-lg-none d-md-none d-md-flex d-sm-block d-sm-flex d-xl-none mb-4 mx-auto search w-100 me-1" style={{listStyle: 'none'}}>

              <div className="d-flex align-items-center justify-content-between w-100">

                <div className="dropdown mx-1 nav-item">

                  <a className="categories btn btn-default dropdown-toggle px-1" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{fontSize: 'small',padding: '7px 0'}}>
                    Categories
                  </a>
                  <ul className="dropdown-menu default-menu px-2" aria-labelledby="dropdownMenu1">
                   <li>vbb</li>
                  </ul>
                </div>

                <form className="categories rounded-3 w-100 d-flex" style={{width: '255px',borderRadius: '15px'}}>
                  <button className="rounded-3 categories" type="submit"><i className="fa fa-search text-secondary"></i></button>
                  <input id="smallSearchBar" className="rounded-3 categories fs-6" style={{outline: 'none', borderRadius: '15px'}} type="text" placeholder="Search for Products, Brand ...." name="search" />
                </form>
              </div>
            </li>

        </nav>
        </header>
        {/* end top header */}

        {/* categories navbar start */}
        <section className="container mx-auto topProductNavbar d-lg-block d-lg-flex d-md-none d-none d-sm-none">
            {/* Grocery  */}
            <div className="topProductNavbar_Nav">
            <a href="" style={{textDecoration: 'none'}}>
                <img src="/src/assets/front_assets/img/Category/Category 1.png" />
                <p className="Nav_Text" style={{paddingTop: '5px'}}>Grocery</p>
            </a>
            </div>
            {/* Mobiles */}
            <div className="topProductNavbar_Nav">
            <a href="" style={{textDecoration: 'none'}}>
                <img src="/Category/Category 2.png" />
                <p className="Nav_Text" style={{paddingTop: '5px'}}>Mobiles</p>
            </a>
            </div>
            {/* Fashion  */}
            <div className="topProductNavbar_Nav">
            <a href=""  style={{textDecoration: 'none'}}>
                <img src="/Category/Category 3.png" />
                <br />
                <a href="" className="Navlink angledownIcon" style={{textDecoration: 'none'}}>
                Fashion
                <i className="fa-solid fa-angle-down submenuicon"> </i>

                <div className="MoreOptionDisplay_Container">
                    <div className="MoreOption_Content">
                    {/* Men's Top Wear */}

                    <div className="MoreOption">
                        <p>Men's Top Wear</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="MoreSubOptionDisplay_Container">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's T-Shirt</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Casual Shirts</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Formal Shirts</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Kurtas</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Blazers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Ethnic Sets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Suit</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Fabrics</p>
                            </div>
                        </div>
                        </div>
                    </div>
        {/* Men's Bottom Wear  */}

                    <div className="MoreOption">
                        <p>Men's Bottom Wear</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Mens-Bottom-wear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Jeans</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Trousers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Trackpants</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Shorts</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Pyjamas</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Loungepants</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Ethnic Pyjama</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Threeforths</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Dhoti</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Men's Footwear */}

                    <div className="MoreOption">
                        <p>Men's Foot Wear</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Mens-Footwear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Sports Shoes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Casual Shoes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Formal Shoes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Sandals & Floaters</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Slippers & Flip Flops</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Ethnic Shoes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Active Footwear</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Combo Footwear</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Women Ethnic */}

                    <div className="MoreOption">
                        <p>Women Ethnic</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Womens-Ethinc">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Sarees & Blouse</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Kurtas & Kurtis</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Dress Material</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Gowns</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Lehenga Cholis</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Leggings & Patialas</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women alazzos & Shararas</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Dupatta</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Women Western */}

                    <div className="MoreOption">
                        <p>Women Western</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Women-Western">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Tops</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Jeans</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women T-shirts & Polo T-shirts</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Nighties & Night Dresses</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Trousers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Trackpants</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Jumpsuits</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Sports Bra</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Women Footwear */}

                    <div className="MoreOption">
                        <p>Women Footwear</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Women-Footwear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Flats</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Heels</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Wedges</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Slipper & Flip Flops</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Casual Shoes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Sport Shoes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Sneakers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Ethnic Shoes</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Watch and Accessories */}

                    <div className="MoreOption">
                        <p>Watch and Accessories</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="W-and-A">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>Men & Women Wallets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men & Women Watches</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men & Women Sunglasses</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men & Women Belts</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Fashion Jewellery</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Precious Coins & Bars</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Frames & Contact Lenses</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Kid Accessories</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Precious Articles</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Kids */}

                    <div className="MoreOption">
                        <p>Kids</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Kids">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Boys & Girls Dresses</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Boys & Girls Combosets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Boys & Girls Ethnic Wear</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Boys & Girls Jeans</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Boys & Girls Shorts</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Boys & Girls Trackpants</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Boys & Girls Innerwear</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Kids Slipper Flip Flops</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Kids Sports Shoes</p>
                            </div>
                        </div>
                        </div>
                    </div>

                {/* Essentials */}
                    <div className="MoreOption">
                        <p>Essentials</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Essentials">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>Women Kurta sets & Salwar Suits</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Bra & Panty</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Brief & Trunks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Vests</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Boxer</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Boys Innerwear</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Girls Innerwear</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Lingerie Sets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women Slipper Flip Flops</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
            </a>
            </div>
            {/* Electronics */}
            <div className="topProductNavbar_Nav">
            <a href="" style={{textDecoration: 'none'}}>
                <img src="/Category/Category 4.png" />

                <br />
                <a href="#" className="Navlink angledownIcon" style={{textDecoration: 'none'}}>
                Electronics
                <i className="fa-solid fa-angle-down submenuicon"> </i>

                <div className="MoreOptionDisplay_Container">
                    <div className="MoreOption_Content">
                    {/* Audio  */}
                    <div className="MoreOption">
                        <p>Audio</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="MoreSubOptionDisplay_Container">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bluetooth Headphones</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Wired Headphones</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Soundbars</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bluetooth Speakers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Home Theaters</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Remote Control</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Headphones Pouch & Case Cover</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>TV Streaming Device</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Cameras and Accessories */}

                    <div className="MoreOption">
                        <p>Cameras and Accessories</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Mens-Bottom-wear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>DSLR & Mirrorless</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Sports & Action</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Point & Shoot</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Instant Cameras</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Camcorders</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Camera Lenses</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Camera Tripods</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Flashes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gimbals</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Binoculars</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Smart Home Automation */}

                    <div className="MoreOption">
                        <p>Smart Home Automation</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Mens-Footwear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Smart Assistants</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Smart Lights</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Smart Cameras</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Smart Switches</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Smart Door Locks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Sensors & Alarms</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Smart Wearables */}

                    <div className="MoreOption">
                        <p>Smart Wearables</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Womens-Ethinc">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Smart Watches</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Smart Hand Bands</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Smart Glasses</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* PowerBank and Storage */}

                    <div className="MoreOption">
                        <p>PowerBank and Storage</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Women-Western">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>All type PowerBank</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Memory Card</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Computer Storage</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Laptop Storage</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Mobile Storage</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Internal Hard Drive</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>External Hard Drive</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Mobile Accessories  */}

                    <div className="MoreOption">
                        <p>Mobile Accessories</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Women-Footwear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Plain & Designer Cases</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Screen Guards</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Camera Lens Protectors</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Mobile Holder</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Mobile Cable</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Moble Pouches</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Tablet Accessories</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Charging Adapter</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Mobile Other Accessories</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Laptop and Desktop  */}

                    <div className="MoreOption">
                        <p>Laptop and Desktop</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="W-and-A">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Laptops</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gamnig Laptops</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Desktop PCs</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>All in One PCs</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Mini PCs</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Tower PCs</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>PC Finder</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>GST Invoice on Laptops</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Laptop Accessories  */}

                    <div className="MoreOption">
                        <p>Laptop Accessories</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Kids">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Mouse</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Laptop Keyboards</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Router</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Data Cards</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>UPS & USB Gadgets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Laptop Battery</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Laptop Adapter</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Prosecors</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Laptop Accessories</p>
                            </div>
                        </div>
                        </div>
                    </div>
        {/* Computer Peripherals */}

                    <div className="MoreOption">
                        <p>Computer Peripherals</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Essentials">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Printers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Monitors</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Projectors</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Toners</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Ink Bottles & Ink Cartridges</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Receipt Printers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Lamination Machines</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Barcode Scanners</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Currency Detectors</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Gaming  */}

                    <div className="MoreOption">
                        <p>Gaming</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Smart-Wearable">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gaming Consoles</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gaming Mouse Mousepads</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gaming Keyboards</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gamepads & Controllers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Game Collection</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gaming Accessories Combo</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Membership Cards</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gaming Components</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gaming Accessories</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
            </a>
            </div>
        {/* Home & Furniture  */}
            <div className="topProductNavbar_Nav">
            <a href="" style={{textDecoration: 'none'}}>
                <img src="/Category/Category 5.png" />

                <br />
                <a href="#" className="Navlink angledownIcon" style={{textDecoration: 'none'}}>
                Home & Furniture
                <i className="fa-solid fa-angle-down submenuicon"> </i>

                <div className="MoreOptionDisplay_Container">
                    <div className="MoreOption_Content">
                    {/* Home & Furniture */}

                    <div className="MoreOption">
                        <p>Home & Furniture</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="MoreSubOptionDisplay_Container">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bed Linens</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bedsheets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Blankets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Curtains & Accessories</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bath linen</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Floor Coverings</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Covers & Protectors</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Cushions & Pillows</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Table Linen Sets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Kitchen Linen Sets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Sofa & Curtain Fabrics</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Living Room Furniture  */}

                    <div className="MoreOption">
                        <p>Living Room Furniture</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Mens-Bottom-wear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Sofas Sets & Sectionals</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>TV Units</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Dining Sets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Coffee Tables</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Sofa Beds</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Recliners</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Cabinet & Drawers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bookshelves</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Shoe Racks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Office Tables & Chairs</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Kitchen & Dining  */}

                    <div className="MoreOption">
                        <p>Kitchen & Dining</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Mens-Footwear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Cookware</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Kitchen Tools</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Lunchboxes,Bottles & Flasks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gas Stoves & Accessories</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Tableware & Dinnerware</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Knives,Choppers & Cutters</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Barwear & Bakewear</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Disposable Supplies</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Bedroom Furniture */}

                    <div className="MoreOption">
                        <p>Bedroom Furniture</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Womens-Ethinc">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Mattresses</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Beds</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Wardrobes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Side Tables</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Book Shelves</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>TV Units</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Rocking Chairs</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Benches</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Home Decor  */}

                    <div className="MoreOption">
                        <p>Home Decor</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Women-Western">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Lightings</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Wallpapers & Stickers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Paintings & Poster</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Clocks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Showpieces & Decoratives</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Flowers & Vases</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Photo Frames & Albums</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Festive & Gifting</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Tools & Utility  */}

                    <div className="MoreOption">
                        <p>Tools & Utility</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Women-Footwear">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Hand Tools</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Power Tools</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Measuring Tools</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Home Storage & Organizers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Appliance Trolly & Stands</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Laundary Organization</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Home Safety</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Paint Supplies & Equipments</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Lightings & Electricals  */}

                    <div className="MoreOption">
                        <p>Lightings & Electricals</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="W-and-A">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bulbs</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Torches</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Tubelights</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Batteries</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Electrical Wire & Socket</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Electrical Hardware</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Outdoor Lamps</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Extension Cords</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Space Saving Frniture  */}

                    <div className="MoreOption">
                        <p>Space Saving Frniture</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Kids">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Portable Laptop Tables</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Collapsible Wardrobes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bean Bags & Covers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Inflatable Sofas</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Hammock Swings</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>TV Mounts</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Kitchen Trolly</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Kitchen Cabinets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Shoe Racks</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Cleaning & Bath  */}
                    <div className="MoreOption">
                        <p>Cleaning & Bath</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Essentials">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Mops</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Cleaning Supplies</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>House Hold Supplies</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Air Fresheners</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Cleaning Gloves</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Liquid Detergents</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Taps & Faucet</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>ToothBrush Holder</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bathroom Rack</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bathroom Shelves</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
            </a>
            </div>
        {/* Health */}
            <div className="topProductNavbar_Nav">
            <a href="" style={{textDecoration: 'none'}}>
                <img src="/Category/Category 6.png" />
                <p className="Nav_Text" style={{paddingTop: '5px'}}>Health</p>
            </a>
            </div>
        {/* Games   */}
            <div className="topProductNavbar_Nav">
            <a href="" style={{textDecoration: 'none'}}>
                <img src="/Category/Category 7.png" />
                <p className="Nav_Text" style={{paddingTop: '5px'}}>Video Games</p>
            </a>
            </div>
        {/* Beauty & toys   */}
            <div className="topProductNavbar_Nav">
            <a href="" style={{textDecoration: 'none'}}>
                <img src="/Category/Category 8.png" />

                <br />
                <a href="#" className="Navlink angledownIcon" style={{textDecoration: 'none'}}>
                Beauty & Toys
                <i className="fa-solid fa-angle-down submenuicon"> </i>

                <div className="MoreOptionDisplay_Container">
                    <div className="MoreOption_Content">
                    {/* Beauty & Personal Care  */}
                    <div className="MoreOption">
                        <p>Beauty & Personal Care</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Beauty">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bath & Oral Care</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Personal Hygiene</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Eye Makeup</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Face Makeup</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Lip Makeup</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Hair Care</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bath Essentials</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women's Personal Hygiene</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Body & Skin Care</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Luxury</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Men's Grooming  */}

                    <div className="MoreOption">
                        <p>Men's Grooming</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Grooming">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Face Washes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Beard Oils</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Hair Styling</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Shaving Essentials</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Aftershave</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Face Creams & Face Packs</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Soap & Bodywashes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Men's Grooming Combos</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Sexual Wellness</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Office Tables & Chairs</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Food & Drinks  */}

                    <div className="MoreOption">
                        <p>Food & Drinks</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Food">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Beverages</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Nuts & Dry Fruits</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Cooking Essentials</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Breakfast Items</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Snacks Corner</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Chocolates</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baking Essentials</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Sweets Store</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Ready to Cooks & Eat</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Jams,Spreads & Honey</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Nutrition & Health Care  */}

                    <div className="MoreOption">
                        <p>Nutrition & Health Care</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Nutrition">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Masks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Ayurvedic Supplements</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Health Drinks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Vitamin Supplements</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Protin Supplements</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Women's Safety</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Home Medicines</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Home Medical Supplies</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Healthcare Comos</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Professional Medical Supplies</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Baby Care  */}

                    <div className="MoreOption">
                        <p>Baby Care</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Baby">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baby Diapers & Wipes</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baby Bath & Grooming</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baby Gift Sets Combo</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baby Medical & Health Care</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Nursing & Breast Feeding</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Feeding Bottles & Accessories</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baby Food</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baby Bedding</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baby Gear</p>
                            </div>
                        </div>
                        </div>
                    </div>

                {/* Toys & School Supplies */}

                    <div className="MoreOption">
                        <p>Toys & School Supplies</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Toys">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Remote Control Toys</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Soft Toys</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Puzzles</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Board Games</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Learning & Educational Toys</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Baby Toys</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>School Backpacks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>School Supplies</p>
                            </div>
                        </div>
                        </div>
                    </div>
        {/* Books */}

                    <div className="MoreOption">
                        <p>Books</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Books">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Academics</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Literature & Fiction</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Non Fiction</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Young Readers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Audio Books</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bangla Language</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Sports & Fitness */}

                    <div className="MoreOption">
                        <p>Sports & Fitness</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Sports">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Badminton</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Cricket</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Football</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Cycling Equipments</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Fitness Equipments</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gym Gloves</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Dumbbells</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Yoga Equipments</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Music  */}

                    <div className="MoreOption">
                        <p>Music</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Music">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>Musical Instruments</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Music & TV Shows</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Acoustic Guitars</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Keys & Synthesizer</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Microphones</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Studio Equipments</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Stage Equipments</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>String Instruments</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Deshi Instruments</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Wind Instruments</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Safety & Hygiene Essentials */}

                    <div className="MoreOption">
                        <p>Safety & Hygiene Essentials</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Safety">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Masks</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Sanitizers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Hand Wash</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Gloves</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>PPE Kits</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Face Shields</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>UV Sterilizer Box</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Safety Goggles</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Vitamins for Immunity</p>
                            </div>
                        </div>
                        </div>
                    </div>
        {/* Auto Accessories  */}

                    <div className="MoreOption">
                        <p>Auto Accessories</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Auto">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Bike Essentials</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Washing & Cleaning Products</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Vehicles Covers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Car Air Freshener</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Car Bluetooth Devices</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Car Lubricant</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Car Vacuuam Cleaner</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Car Media Player</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Vehicles Tyres</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>FirstAid Box</p>
                            </div>
                        </div>
                        </div>
                    </div>

                        {/* Stationery & Office Supplies */}

                    <div className="MoreOption">
                        <p>Stationery & Office Supplies</p>
                        <i className="fa-solid fa-angle-right"></i>

                        <div className="Stationery">
                        <div className="MoreSubOption_Content">
                            <div className="MoreSubOption">
                            <p>View All</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Pens & Gift Sets</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Notebooks & Diaries</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Art Supplies</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Keychains</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Card Holder</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Office Supplies</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Office Equipments</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Desk Organizers</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Party Supplies</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Calculators</p>
                            </div>
                            <div className="MoreSubOption">
                            <p>Top Brand Deals</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
            </a>
            </div>
                {/* Gift Cards */}
            <div className="topProductNavbar_Nav">
            <a href="" style={{textDecoration: 'none'}}>
                <img src="/Category/Category 9.png" />

                <br />
                <a href="" className="Navlink angledownIcon" style={{textDecoration: 'none'}}> 
                Gift Cards
                <i className="fa-solid fa-angle-down submenuicon"> </i>

                <div className="MoreOptionDisplay_Container">
                    <div className="MoreOption_Content">
                    <div className="MoreOption">
                        <p>Premium Gift Card</p>
                    </div>
                    <div className="MoreOption">
                        <p>Normal Gift Card</p>
                    </div>
                    </div>
                </div>
                </a>
            </a>
            </div>
        </section>      
        {/* categories navbar end */}


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
    <section className="">
      <div className="section-padding text-center bg-skyblue-light my-2 rounded-3 mx-lg-5">
        <div className="container-md">
          <div className="text-center py-3">
            <h3 className="mb-0 h3 fw-bold">Featured Products</h3>
            {/* <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p> */}
          </div>
          
           <div className="border mt-4">
                        <div className="owl-carousel owl-theme ">
                         
                                <div className="card">

3
                                    <div className="item child" style={{position: 'relative'}}>
                                        <a href="">
                                        <img src="" alt="not available" height="aut0" width="100" />
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
                                           
                                                <img src="" alt="not available" height="aut0" width="100" />
                                               
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
                                        <img src="" alt="not available" height="aut0" width="100" />
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
                        </div>

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

    {/* trendy-products start*/}
    <section className="">
      <div className="mx-lg-5 bg-skyblue-light py-3">
        <div className="container">
          <div className="text-center py-3">
            <h3 className="mb-0 h3 fw-bold">Trendy Products</h3>
            <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
          </div>
          <div className="product-thumbs">
              <div className="card">
                <div className="position-relative overflow-hidden">
                  <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0 d-none">
                    <a href=""><i className="bi bi-heart"></i></a>
                    <a href=""><i className="bi bi-basket3"></i></a>
                    <a href="" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i className="bi bi-zoom-in"></i></a>
                  </div>
                  <a href="/product/all_product">
                    <img src="/src/assets/front_assets/images/Makes new move/Beauty.png" className="card-img-top" alt="..." />
                  </a>
                </div>
                <div className="card-body">
                  <div className="product-info text-center">
                    <h6 className="mb-1 fw-bold product-name">
                     product name
                    </h6>
                    <div className="ratings mb-1 h6">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    {/* let dis= 130*2/100=130-dis */}
                
                 <span className="mb-0 h6 fw-bold product-price">৳.676
                </span>
                           
                  </div>
                </div>
              </div>
             
          </div>
        </div>
      </div>
    </section>
    {/* featured-products end */}

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
         
  <footer className="footer-strip text-center py-4 bg-section-2 bg-dark border-top">
    <p className="mb-0 text-muted">Copyright ©2024 Amjanata. Designed By Ztrios Tech & Marketing</p>
  </footer>

 {/* start quick view */}
  {/* Start Back To Top Button */}
  <a href="" className="back-to-top"><i className="bi bi-arrow-up"></i></a>
  {/* End Back To Top Button */}
        </div>
)
}

export default Home;
