

import React, { useEffect, useState } from 'react';

function Navbar(){
     const [defaultMenuOpen, setDefaultMenuOpen] = useState(false);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

     useEffect(() => {
        const handleBodyClick = (event) => {
            if (!event.target.closest('.default-menu') && !event.target.classList.contains('btn-default') && !event.target.classList.contains('cat-btn-default-1')) {
                setDefaultMenuOpen(false);
                setCategoryDropdownOpen(false);
            }
        };

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);

    
    const toggleDefaultMenu = () => {
        setDefaultMenuOpen(!defaultMenuOpen);
    };

    const toggleCategoryDropdown = () => {
        setCategoryDropdownOpen(!categoryDropdownOpen);
        // console.log(!categoryDropdownOpen);
    };

    return (
        <div>
        {/* start top header */}
        <div className="text-center" style={{backgroundColor: '#8aff5f', width: '95%!important'}}>
        <p>Amjanata</p>
      
        </div>

        <header className="mb-2 py-5 mx-sm-auto top-header">
        <nav className="navbar navbar-expand-md w-100 navbar-dark container-lg">
            <a className="navbar-brand d-none d-xl-inline" href="/home">
            <img src="/amjanata.png"  className="logo-img" height="auto" width="100px"  alt=""/>
            </a>

           <a className="mobile-menu-btn d-inline d-xl-none" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
              <i className="bi bi-list"></i>
            </a>

            <a className="mobile-menu-btn d-inline d-xl-none" href="/">
              <img src="/amjanata.png" className="logo-img" alt="" />
            </a>

           <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">

              <div className="offcanvas-header justify-content-end">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className="offcanvas-body primary-menu">
                <ul className="navbar-nav justify-content-start flex-grow-1 gap-2">
                  <li className="mx-auto search w-100 me-1" style={{listStyle: 'none'}}>
                    <div className="d-flex align-items-center justify-content-between w-100">

                      <div className="dropdown mx-1 nav-item">

                        <a className="categories btn cat-btn-default-1 dropdown-toggle px-1" onClick={toggleCategoryDropdown}  type="button" id="catDropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{fontSize: 'small', padding: '7px 0px'}}>
                          Categories
                        </a>

                        {/* <ul className="c-dropdown-menu dropdown-menu px-2" aria-labelledby="catDropdownMenu1" style={{display: 'none'}}> */}
                      <ul className="c-dropdown-menu dropdown-menu px-2" style={{ display: categoryDropdownOpen ? 'block' : 'none' }}>

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
                <a className="btn btn-default " type="button" id="dropdownMenuLogin" data-toggle="dropdown"  onClick={toggleDefaultMenu}  aria-haspopup="true" aria-expanded="true" style={{fontSize: '15px',padding: '7px 0'}}><i className="bi bi-person-circle me-2"></i>
                    Login
                  <i className="fa-solid fa-angle-down submenuicon"> </i>
                </a>

                {/* <ul className="shadow dropdown-menu list default-menu px-2 text-dark" aria-labelledby="dropdownMenuLogin"> */}
                <ul className={`shadow dropdown-menu list default-menu px-2 text-dark ${defaultMenuOpen ? 'show' : ''}`}>

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

                  <a className="categories btn btn-default dropdown-toggle px-1"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{fontSize: 'small',padding: '7px 0'}}>
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
        </div>
    );
}

export default Navbar;