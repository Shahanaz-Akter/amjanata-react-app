import { useState } from "react";
import './assets/front_assets/css/bootstrap.min.css';
import './assets/front_assets/js/bootstrap.bundle.min.js';
import './assets/front_assets/plugins/slick/slick.css';
import './assets/front_assets/plugins/slick/slick-theme.css';


function Home() {

    return (
        <div className="border">
            {/* start top header */}
            <header className="mb-2 py-5 mx-sm-auto top-header">
                <nav className="navbar navbar-expand-md w-100 navbar-dark container-lg">

                    <a className="navbar-brand d-none d-xl-inline" href="/"><img src="../../front_assets/amjanata.png" className="logo-img" alt="" /></a>

                    <a className="mobile-menu-btn d-inline d-xl-none" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <i className="bi bi-list"></i>
                    </a>

                    <a className="mobile-menu-btn d-inline d-xl-none" href="/">
                        <img src="<%= logo %>" className="logo-img" alt="" />
                    </a>

                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
                        <div className="offcanvas-header justify-content-end">
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body primary-menu">
                            <ul className="navbar-nav justify-content-start flex-grow-1 gap-2">
                                <li className="mx-auto search w-100 me-1" style={{ listStyle: 'none' }}>
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="dropdown mx-1 nav-item">
                                            <a className="categories btn cat-btn-default-1 dropdown-toggle px-1" type="button" id="catDropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{ fontSize: 'small', padding: '7px 0' }}>Categories</a>
                                            <ul className="c-dropdown-menu dropdown-menu px-2" aria-labelledby="catDropdownMenu1" style={{ display: 'none' }}>
                                                <li>bnxzf</li>
                                            </ul>
                                        </div>

                                        <form className="categories rounded-3 w-100 d-flex" style={{ width: '255px', borderRadius: '15px' }}>
                                            <button className="rounded-3 categories" type="submit">
                                                <i className="fa fa-search text-secondary"></i>
                                            </button>
                                            <input id="smallSearchBar" className="rounded-3 categories fs-6" style={{ outline: 'none', borderRadius: '15px' }} type="text" placeholder="Search for Products, Brand ...." name="search" />
                                        </form>
                                    </div>

                                    <div className="d-lg-none d-xl-none d-sm-block border mt-2">
                                        <i className="bi bi-shop-window me-2"></i><a href="/seller/seller_register">Become a Seller</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Home;
