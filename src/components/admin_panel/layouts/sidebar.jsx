import React from 'react';

function Sidebar(props) {
    return (
        <div>
           <div className="left-side-menu" style={{borderRight: '5px solid #EBEBEB!important'}}>

    <div className="h-100" data-simplebar>

        {/* <!-- User box --> */}
        <div className="user-box text-center">

            {/* <!-- <img src="/assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-thumbnail avatar-md" /> --> */}
            <img src="../../assets/images/icon2/people.png" alt="user-img" title="Amajnata" className="rounded-circle img-thumbnail avatar-md" />

            <div className="dropdown">
                <a href="/" className="user-name dropdown-toggle h5 mt-2 mb-1 d-block" data-bs-toggle="dropdown" aria-expanded="false">Super Amin Panel</a>
                <div className="dropdown-menu user-pro-dropdown">

                    {/* <!-- item--> */}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-user me-1"></i>
                        <span>My Account</span>
                    </a>

                    {/* <!-- item--> */}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-settings me-1"></i>
                        <span>Settings</span>
                    </a>

                    {/* <!-- item--> */}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-lock me-1"></i>
                        <span>Lock Screen</span>
                    </a>

                    {/* <!-- item--> */}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-log-out me-1"></i>
                        <span>Logout</span>
                    </a>

                </div>
            </div>

            <p className="text-muted left-user-info">Admin Head</p>

            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="index.html#" className="text-muted left-user-info">
                        <i className="mdi mdi-cog"></i>
                    </a>
                </li>

                <li className="list-inline-item">
                    <a href="index.html#">
                        <i className="mdi mdi-power"></i>
                    </a>
                </li>
            </ul>
        </div>

        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">

            <ul id="side-menu">

                {/* <!-- Dashboard --> */}
                {/* <!-- <li className="menu-title">Navigation</li> --> */}

                <li>
                    <a href="/master">
                        {/* <!-- <i className="mdi mdi-view-dashboard-outline"></i> --> */}
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.63486" y="1.88944" width="6.98764" height="8.33823" rx="2" stroke="black" strokeWidth="2" />
                            <rect x="11.8472" y="10.7512" width="6.98764" height="8.33823" rx="2" stroke="black" strokeWidth="2" />
                            <rect x="11.8472" y="1.88944" width="6.98764" height="5.91669" rx="2" stroke="black" strokeWidth="2" />
                            <rect x="1.63486" y="13.1727" width="6.98764" height="5.91669" rx="2" stroke="black" strokeWidth="2" />
                        </svg>
                        <span className="badge bg-success rounded-pill float-end">9+</span>
                        <span> Dashboard </span>
                    </a>
                </li>

                {/* <!-- Inventory --> */}
                <li>
                    <a href="index.html#product" data-bs-toggle="collapse">

                        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.0601 6.71184L10.5601 11.4341M10.5601 11.4341L2.06009 6.71184M10.5601 11.4341L10.5601 20.9341M19.5601 15.4927V7.37554C19.5601 7.0329 19.5601 6.86158 19.5096 6.70878C19.465 6.5736 19.392 6.44952 19.2955 6.34483C19.1864 6.22649 19.0367 6.14329 18.7372 5.97689L11.3372 1.86578C11.0535 1.70822 10.9117 1.62944 10.7616 1.59856C10.6287 1.57122 10.4916 1.57122 10.3587 1.59856C10.2085 1.62944 10.0667 1.70822 9.78309 1.86578L2.38309 5.97689C2.08357 6.14329 1.9338 6.22649 1.82475 6.34483C1.72828 6.44952 1.65527 6.5736 1.6106 6.70878C1.56012 6.86158 1.56012 7.0329 1.56012 7.37554V15.4927C1.56012 15.8353 1.56012 16.0066 1.6106 16.1594C1.65527 16.2946 1.72828 16.4187 1.82475 16.5234C1.93381 16.6417 2.08357 16.7249 2.38309 16.8913L9.78309 21.0024C10.0667 21.16 10.2085 21.2387 10.3587 21.2696C10.4916 21.297 10.6287 21.297 10.7616 21.2696C10.9117 21.2387 11.0535 21.16 11.3371 21.0024L18.7372 16.8913C19.0367 16.7249 19.1864 16.6417 19.2955 16.5234C19.392 16.4187 19.465 16.2946 19.5096 16.1594C19.5601 16.0066 19.5601 15.8353 19.5601 15.4927Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span> Inventory </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="product">
                        <ul className="nav-second-level">
                            <li>
                                <a href="/product/manual_add_product">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Add Product
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="/product/product_list">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Product List
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="/product/category">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Category
                                    </span>
                                </a>
                            </li>



                        </ul>
                    </div>
                </li>

                {/* <!-- Campaigns --> */}
                <li>
                    <a href="index.html#campaigns" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-clipboard-outline"></i> --> */}
                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.1966 6.99142V10.9914M9.44659 4.49141H5.99659C4.31644 4.49141 3.47636 4.49141 2.83462 4.81839C2.27013 5.10601 1.81119 5.56496 1.52357 6.12944C1.19659 6.77118 1.19659 7.61126 1.19659 9.29142L1.1966 10.4914C1.1966 11.4233 1.1966 11.8892 1.34884 12.2568C1.55183 12.7468 1.94117 13.1362 2.43123 13.3392C2.79877 13.4914 3.26471 13.4914 4.1966 13.4914V17.7414C4.1966 17.9736 4.1966 18.0897 4.20623 18.1874C4.29975 19.137 5.05101 19.8883 6.00056 19.9818C6.09834 19.9914 6.21443 19.9914 6.4466 19.9914C6.67877 19.9914 6.79485 19.9914 6.89263 19.9818C7.84219 19.8883 8.59344 19.137 8.68697 18.1874C8.6966 18.0897 8.6966 17.9736 8.6966 17.7414V13.4914H9.4466C11.213 13.4914 13.3738 14.4383 15.0409 15.3471C16.0134 15.8772 16.4997 16.1423 16.8182 16.1033C17.1135 16.0671 17.3368 15.9345 17.5099 15.6925C17.6966 15.4316 17.6966 14.9094 17.6966 13.8651V4.1177C17.6966 3.07341 17.6966 2.55126 17.5099 2.2903C17.3368 2.04831 17.1135 1.91571 16.8182 1.87954C16.4997 1.84053 16.0134 2.10561 15.0409 2.63577C13.3738 3.54452 11.213 4.49141 9.44659 4.49141Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span> Campaigns </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="campaigns">
                        <ul className="nav-second-level">
                            <li>
                                <a href="/cms/page_cms">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> CMS
                                    </span></a>
                            </li>
                            <li>
                                <a href="/cms/logo_banner">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Logo & Banner
                                    </span></a>
                            </li>

                        </ul>
                    </div>
                </li>

                {/* <!-- expense --> */}
                <li>
                    <a href="index.html#expense" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-clipboard-outline"></i> --> */}
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2686 21.6406C16.7914 21.6406 21.2686 17.1634 21.2686 11.6406C21.2686 6.11775 16.7914 1.6406 11.2686 1.6406C5.74571 1.6406 1.26855 6.11775 1.26855 11.6406C1.26855 17.1634 5.74571 21.6406 11.2686 21.6406Z" stroke="black" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path
                                d="M16.1253 13.7305L16.1208 13.7121C15.9047 12.9181 15.0336 12.4395 14.1793 12.6458C13.3757 12.8392 12.849 13.6343 13.0032 14.4165C13.1169 14.9891 13.4815 15.3932 14.0645 15.5984C13.7584 16.1181 13.082 16.4897 12.4776 16.4325C11.5974 16.3482 10.8805 15.5909 10.8805 14.7439L10.8794 11.8626H11.5873C12.1253 11.8626 12.6644 11.8626 13.2024 11.8626C13.7764 11.8615 14.194 11.4844 14.1951 10.9648C14.1951 10.7012 14.0949 10.4656 13.9115 10.3004C13.7303 10.1372 13.4838 10.0508 13.199 10.0508C12.7117 10.0497 12.2243 10.0508 11.737 10.0508H10.8805V9.5495C10.8805 9.0212 10.8816 8.49399 10.8794 7.96569C10.8783 7.80904 10.8749 7.62538 10.8445 7.44172C10.6644 6.36352 9.77528 5.61483 8.6329 5.57918C7.55581 5.54461 6.58451 6.31166 6.37292 7.36069C6.32565 7.59405 6.33015 7.83821 6.38642 8.0478C6.49109 8.44753 6.93229 8.72735 7.37348 8.67117C7.83155 8.61283 8.14894 8.3006 8.22322 7.83605C8.24011 7.72909 8.26374 7.61025 8.31101 7.54003C8.3898 7.42011 8.56425 7.36933 8.72407 7.42011C8.88952 7.47305 8.98856 7.61242 8.98968 7.79284C8.99306 8.45402 8.99193 9.1152 8.99081 9.7753V10.0508H8.85125C8.54624 10.0508 8.24348 10.0497 7.94185 10.0519C7.41062 10.0551 7.00544 10.4354 6.99869 10.9356C6.99194 11.4531 7.39036 11.8517 7.92497 11.8615C8.18946 11.8658 8.45733 11.8658 8.71619 11.8636C8.80735 11.8636 8.89964 11.8626 8.99081 11.8626C8.99081 12.0332 8.98968 12.2039 8.98968 12.3725C8.98743 13.0077 8.98631 13.6073 8.99419 14.2199C8.99531 14.2836 8.99531 14.3474 8.99644 14.4111C8.99869 14.7709 9.00094 15.1425 9.0921 15.5034C9.46014 16.9629 10.4382 17.8856 11.9205 18.1719C12.1816 18.2226 12.4371 18.2475 12.6858 18.2475C13.7595 18.2475 14.7072 17.7797 15.459 16.8711C16.0589 16.1462 16.3391 14.8249 16.1253 13.7305Z"
                                fill="black" />
                        </svg>

                        <span> Expense </span>
                        <span className="menu-arrow"></span>
                    </a>

                    <div className="collapse" id="expense">
                        <ul className="nav-second-level" >
                            <li>
                                <a href="/expense/add_expense">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Add Expense
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="/expense/expense_list">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Expense List
                                    </span>
                                </a>
                            </li>



                        </ul>
                    </div>
                </li>

                {/* <!-- Trading --> */}
                {/* <!-- <li>
                    <a href="index.html#trading" data-bs-toggle="collapse">
                        <i className="mdi mdi-clipboard-outline"></i>
                        <span> Trading Section </span>
                        <span className="menu-arrow"></span>
                    </a>

                    <div className="collapse" id="trading">
                        <ul className="nav-second-level" >
                            <li>
                                <a href="/super_admin/trading">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Tarding null
                                    </span>
                                </a>
                            </li>


                        </ul>
                    </div>
                </li> --> */}

                {/* <!-- People --> */}
                <li>
                    <a href="index.html#People" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-shopping"></i> --> */}
                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.1966 19.6164V17.6164C21.1966 15.7526 19.9218 14.1865 18.1966 13.7425M14.6966 1.9072C16.1625 2.50059 17.1966 3.93775 17.1966 5.61644C17.1966 7.29513 16.1625 8.73229 14.6966 9.32568M16.1966 19.6164C16.1966 17.7527 16.1966 16.8208 15.8921 16.0857C15.4861 15.1056 14.7074 14.3269 13.7273 13.9209C12.9922 13.6164 12.0604 13.6164 10.1966 13.6164H7.19659C5.33283 13.6164 4.40094 13.6164 3.66586 13.9209C2.68575 14.3269 1.90705 15.1056 1.50108 16.0857C1.19659 16.8208 1.19659 17.7527 1.19659 19.6164M12.6966 5.61644C12.6966 7.82558 10.9057 9.61644 8.69659 9.61644C6.48746 9.61644 4.69659 7.82558 4.69659 5.61644C4.69659 3.4073 6.48746 1.61644 8.69659 1.61644C10.9057 1.61644 12.6966 3.4073 12.6966 5.61644Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>People</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="People">
                        <ul className="nav-second-level">
                            <li>
                                <a href="/customer/add_customer">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>CRM
                                    </span></a>
                            </li>
                            <li>
                                <a href="/customer/add_customer">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Add Customer
                                    </span></a>
                            </li>
                            <li>
                                <a href="/customer/customer_list">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Customer List
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/customer/add_customer">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Customer Dashboard
                                    </span></a>
                            </li>


                        </ul>
                    </div>
                </li>
                {/* <!-- Seller --> */}
                <li>
                    <a href="index.html#seller" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-shopping"></i> --> */}
                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.1966 19.6164V17.6164C21.1966 15.7526 19.9218 14.1865 18.1966 13.7425M14.6966 1.9072C16.1625 2.50059 17.1966 3.93775 17.1966 5.61644C17.1966 7.29513 16.1625 8.73229 14.6966 9.32568M16.1966 19.6164C16.1966 17.7527 16.1966 16.8208 15.8921 16.0857C15.4861 15.1056 14.7074 14.3269 13.7273 13.9209C12.9922 13.6164 12.0604 13.6164 10.1966 13.6164H7.19659C5.33283 13.6164 4.40094 13.6164 3.66586 13.9209C2.68575 14.3269 1.90705 15.1056 1.50108 16.0857C1.19659 16.8208 1.19659 17.7527 1.19659 19.6164M12.6966 5.61644C12.6966 7.82558 10.9057 9.61644 8.69659 9.61644C6.48746 9.61644 4.69659 7.82558 4.69659 5.61644C4.69659 3.4073 6.48746 1.61644 8.69659 1.61644C10.9057 1.61644 12.6966 3.4073 12.6966 5.61644Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>Seller</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="seller">
                        <ul className="nav-second-level">

                            <li>
                                <a href="/seller/add_seller">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Add Seller
                                    </span></a>
                            </li>
                            <li>
                                <a href="/seller/add_seller_list">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Seller List
                                    </span></a>
                            </li>
                            <li>
                                <a href="/seller/seller_product_list">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Product List
                                    </span></a>
                            </li>



                        </ul>
                    </div>
                </li>


                <li>
                    <a href="index.html#customer" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-shopping"></i> --> */}
                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.1966 19.6164V17.6164C21.1966 15.7526 19.9218 14.1865 18.1966 13.7425M14.6966 1.9072C16.1625 2.50059 17.1966 3.93775 17.1966 5.61644C17.1966 7.29513 16.1625 8.73229 14.6966 9.32568M16.1966 19.6164C16.1966 17.7527 16.1966 16.8208 15.8921 16.0857C15.4861 15.1056 14.7074 14.3269 13.7273 13.9209C12.9922 13.6164 12.0604 13.6164 10.1966 13.6164H7.19659C5.33283 13.6164 4.40094 13.6164 3.66586 13.9209C2.68575 14.3269 1.90705 15.1056 1.50108 16.0857C1.19659 16.8208 1.19659 17.7527 1.19659 19.6164M12.6966 5.61644C12.6966 7.82558 10.9057 9.61644 8.69659 9.61644C6.48746 9.61644 4.69659 7.82558 4.69659 5.61644C4.69659 3.4073 6.48746 1.61644 8.69659 1.61644C10.9057 1.61644 12.6966 3.4073 12.6966 5.61644Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>Customer</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="customer">
                        <ul className="nav-second-level">
                            <li>
                                <a href="/customer/add_customer">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Add Customer
                                    </span></a>
                            </li>
                            <li>
                                <a href="/customer/customer_list">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Customer List
                                    </span></a>
                            </li>



                        </ul>
                    </div>
                </li>

                {/* <!-- CRM --> */}
                {/* <!-- <li>
                    <a href="index.html#UserLogo" data-bs-toggle="collapse">
                        <i className="mdi mdi-shopping"></i>
                        <span>CMS</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="UserLogo">
                        <ul className="nav-second-level">
                            <li>
                                <a href="/super_admin/add_logo">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Add Logo
                                    </span></a>
                            </li>
                            <li>
                                <a href="/super_admin/add_banner">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Add Banner
                                    </span></a>
                            </li>

                        </ul>
                    </div>
                </li> --> */}

                {/* <!-- Invoice --> */}

                {/* <!-- <li className="menu-title">Invoice</li> --> */}
                <li>
                    <a href="/invoice">
                        {/* <!-- <i className="mdi mdi-calendar-blank-outline"></i> --> */}
                        <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.3405 10.0527H5.34055M7.34055 14.0527H5.34055M13.3405 6.05273H5.34055M17.3405 5.85273V16.2527C17.3405 17.9329 17.3405 18.773 17.0136 19.4147C16.7259 19.9792 16.267 20.4381 15.7025 20.7257C15.0608 21.0527 14.2207 21.0527 12.5405 21.0527H6.14055C4.46039 21.0527 3.62031 21.0527 2.97857 20.7257C2.41409 20.4381 1.95515 19.9792 1.66753 19.4147C1.34055 18.773 1.34055 17.9329 1.34055 16.2527V5.85273C1.34055 4.17257 1.34055 3.33249 1.66753 2.69076C1.95515 2.12627 2.41409 1.66733 2.97857 1.37971C3.62031 1.05273 4.46039 1.05273 6.14055 1.05273H12.5405C14.2207 1.05273 15.0608 1.05273 15.7025 1.37971C16.267 1.66733 16.7259 2.12627 17.0136 2.69076C17.3405 3.33249 17.3405 4.17257 17.3405 5.85273Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span> Invoice </span>
                    </a>
                </li>

                {/* <!-- Orders --> */}
                {/* <!-- <li className="menu-title">Orders</li> --> */}
                <li>
                    <a href="index.html#order" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-shopping"></i> --> */}
                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.1966 19.6164V17.6164C21.1966 15.7526 19.9218 14.1865 18.1966 13.7425M14.6966 1.9072C16.1625 2.50059 17.1966 3.93775 17.1966 5.61644C17.1966 7.29513 16.1625 8.73229 14.6966 9.32568M16.1966 19.6164C16.1966 17.7527 16.1966 16.8208 15.8921 16.0857C15.4861 15.1056 14.7074 14.3269 13.7273 13.9209C12.9922 13.6164 12.0604 13.6164 10.1966 13.6164H7.19659C5.33283 13.6164 4.40094 13.6164 3.66586 13.9209C2.68575 14.3269 1.90705 15.1056 1.50108 16.0857C1.19659 16.8208 1.19659 17.7527 1.19659 19.6164M12.6966 5.61644C12.6966 7.82558 10.9057 9.61644 8.69659 9.61644C6.48746 9.61644 4.69659 7.82558 4.69659 5.61644C4.69659 3.4073 6.48746 1.61644 8.69659 1.61644C10.9057 1.61644 12.6966 3.4073 12.6966 5.61644Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>Order</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="order">
                        <ul className="nav-second-level">
                            <li>
                                <a href="/customer/add_order">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Add Order
                                    </span></a>
                            </li>
                            <li>
                                <a href="/customer/order_list">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span>Order List
                                    </span></a>
                            </li>



                        </ul>
                    </div>
                </li>

                {/* <!-- Affialiate --> */}

                {/* <!-- <li className="menu-title">Affialiate</li> --> */}
                <li>
                    <a href="index.html#affialiate" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-shopping"></i> --> */}
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.3034 10.6664C16.8644 9.93031 16.1165 9.4829 15.2993 9.47277C14.5683 9.45926 13.8912 9.79862 13.4286 10.3828L13.4269 10.3811C13.1045 10.3169 12.7803 10.2511 12.4595 10.1903C12.4241 9.98434 12.3785 9.76316 12.2839 9.54537C12.181 9.30563 12.0543 9.08277 11.9311 8.86835L13.822 6.1974C14.1867 6.28182 14.5362 6.29533 14.8806 6.2413C16.1654 6.03363 17.0856 5.04596 17.2257 3.72568C17.354 2.52697 16.5993 1.34007 15.4394 0.906166C15.3027 0.853827 15.1659 0.816684 15.0461 0.784606C14.9988 0.771099 14.9515 0.759281 14.9059 0.745774L14.8249 0.722137H14.0449L13.947 0.759281C13.9334 0.762657 13.9216 0.767722 13.9047 0.776164C12.9542 0.973699 12.1894 1.62708 11.8551 2.53203C11.5495 3.35425 11.6525 4.25244 12.1219 4.98687C11.7133 5.5609 11.3064 6.13494 10.8978 6.71066L10.2833 7.57846C9.12001 7.18001 8.01077 7.35054 7.03492 8.08158L4.66112 6.23792C4.72865 5.95091 4.73878 5.65038 4.69151 5.33973C4.51255 4.13764 3.43201 3.29178 2.18265 3.37789C1.01432 3.45386 0.0536573 4.47193 0.0401506 5.64532C0.0283323 6.53 0.413272 7.23911 1.15107 7.69496C1.84667 8.12548 2.5946 8.17613 3.32734 7.84522C4.04825 8.40743 4.94476 9.1064 5.85815 9.80875C5.60827 10.6462 5.67074 11.4515 6.04555 12.2079C6.1688 12.4561 6.31906 12.6789 6.46764 12.8933L6.37984 13.0166C5.95945 13.6109 5.5323 14.2153 5.11528 14.8079C4.90593 14.7454 4.68813 14.688 4.45177 14.6678C3.59578 14.5969 2.79213 14.8754 2.1894 15.4528C1.57822 16.037 1.24562 16.8525 1.2777 17.6916C1.30978 18.5324 1.72173 19.3242 2.40719 19.8628C3.07746 20.3895 3.91994 20.6006 4.72021 20.4385C5.70451 20.241 6.51491 19.5859 6.88634 18.6877C7.22739 17.8672 7.16492 16.9335 6.72595 16.1417C7.26791 15.3819 7.75584 14.6931 8.20493 14.0498C8.76377 14.2119 9.33105 14.2237 9.89327 14.0836C10.4639 14.9345 11.0802 15.8445 11.769 16.8542C11.3858 17.4822 11.3047 18.2015 11.5326 18.9494C11.8619 20.0215 12.8732 20.7221 13.979 20.7221C14.1783 20.7221 14.3792 20.7002 14.5801 20.6529C15.8497 20.3524 16.6956 19.1064 16.5031 17.8148C16.3883 17.05 15.9578 16.3814 15.3196 15.983C14.7725 15.6419 14.1141 15.5254 13.4742 15.6521C13.0808 15.0696 12.6858 14.4854 12.2907 13.903L11.6829 13.0014C11.8787 12.7752 12.0425 12.527 12.1759 12.2619C12.2181 12.2703 12.2586 12.2805 12.3008 12.2889C12.5288 12.3362 12.7651 12.3868 13.0066 12.4223C13.0184 12.4645 13.0302 12.4983 13.042 12.5253C13.0437 12.532 13.0471 12.5371 13.0488 12.5422C13.4101 13.6463 14.548 14.3166 15.7113 14.1056C16.4423 13.9722 17.0704 13.4707 17.3912 12.7667C17.7069 12.0762 17.6731 11.2911 17.3034 10.6664ZM14.4281 11.8111C14.4298 11.3451 14.8029 10.9754 15.2689 10.9754C15.7366 10.9771 16.1046 11.3485 16.1046 11.8145C16.103 12.2822 15.7315 12.6519 15.2655 12.6502C14.7979 12.6485 14.4264 12.2754 14.4281 11.8111ZM15.0376 18.1829C15.0326 18.7654 14.5497 19.2381 13.9638 19.233C13.3695 19.2263 12.8917 18.74 12.9002 18.1491C12.9103 17.5683 13.4033 17.0855 13.9773 17.0956C14.5733 17.1057 15.0427 17.5869 15.0376 18.1829ZM4.19345 18.9713C3.40838 18.9646 2.78369 18.3331 2.79045 17.5514C2.79551 16.7714 3.4337 16.1468 4.21709 16.1569C4.99034 16.1653 5.62009 16.8001 5.61503 17.565C5.60827 18.3433 4.96671 18.9764 4.19345 18.9713ZM7.20375 10.766C7.20544 9.73446 8.07662 8.86497 9.11326 8.86159C10.155 8.85653 11.0295 9.73277 11.0278 10.7762C11.0261 11.8162 10.1634 12.6755 9.1217 12.6755C8.07324 12.6772 7.20375 11.8111 7.20375 10.766ZM14.4501 2.22982C15.144 2.22982 15.7248 2.80723 15.7248 3.50113C15.7248 4.19673 15.149 4.77076 14.4501 4.77076C13.7477 4.77076 13.1788 4.20179 13.1805 3.50113C13.1821 2.79879 13.7511 2.22982 14.4501 2.22982ZM2.37512 6.55533C1.91251 6.54858 1.5377 6.16533 1.54108 5.7061C1.54614 5.24518 1.92602 4.87206 2.392 4.87544C2.85291 4.87713 3.23448 5.26544 3.22435 5.72298C3.21591 6.18559 2.83097 6.56208 2.37512 6.55533Z"
                                fill="black" />
                        </svg>

                        <span>Affialiate</span>
                        <span className="menu-arrow"></span>
                    </a>

                    <div className="collapse" id="affialiate">
                        <ul className="nav-second-level">

                            <li>
                                <a href="/report/product_report">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Thrive
                                    </span></a>
                            </li>

                        </ul>
                    </div>
                </li>


                {/* <!-- Analysis --> */}
                {/* <!-- <li className="menu-title">Analysis</li> --> */}
                <li>
                    <a href="/analysis">
                        {/* <!-- <i className="mdi mdi-calendar-blank-outline"></i> --> */}
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.2192 18.9914L14.8692 14.6414M17.2192 8.99141C17.2192 13.4097 13.6375 16.9914 9.21924 16.9914C4.80096 16.9914 1.21924 13.4097 1.21924 8.99141C1.21924 4.57313 4.80096 0.991409 9.21924 0.991409C13.6375 0.991409 17.2192 4.57313 17.2192 8.99141Z" stroke="black"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.2592 11.3526V7.03142M9.21924 11.3526V5.1795M5.17932 11.3526L5.17932 8.88334" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span> Analysis </span>
                    </a>
                </li>
                {/* <!-- Reports --> */}
                <li>
                    <a href="index.html#reports" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-shopping"></i> --> */}
                        <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.1862 1.26894V5.39948C11.1862 5.95953 11.1862 6.23955 11.2952 6.45347C11.3911 6.64163 11.544 6.79461 11.7322 6.89048C11.9461 6.99948 12.2261 6.99948 12.7862 6.99948H16.9167M11.1862 15.9994H5.18619M13.1862 11.9994H5.18619M17.1862 8.98763V16.1994C17.1862 17.8796 17.1862 18.7196 16.8592 19.3614C16.5716 19.9259 16.1126 20.3848 15.5482 20.6724C14.9064 20.9994 14.0663 20.9994 12.3862 20.9994H5.98619C4.30603 20.9994 3.46595 20.9994 2.82422 20.6724C2.25973 20.3848 1.80079 19.9259 1.51317 19.3614C1.18619 18.7196 1.18619 17.8796 1.18619 16.1994V5.79941C1.18619 4.11925 1.18619 3.27917 1.51317 2.63743C1.80079 2.07295 2.25973 1.61401 2.82422 1.32639C3.46595 0.999405 4.30603 0.999405 5.98619 0.999405H9.19796C9.93173 0.999405 10.2986 0.999405 10.6439 1.0823C10.95 1.15579 11.2426 1.277 11.511 1.44148C11.8138 1.62701 12.0732 1.88644 12.5921 2.40529L15.7803 5.59352C16.2992 6.11237 16.5586 6.3718 16.7441 6.67455C16.9086 6.94297 17.0298 7.2356 17.1033 7.54171C17.1862 7.88697 17.1862 8.25386 17.1862 8.98763Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>Reports</span>
                        <span className="menu-arrow"></span>
                    </a>

                    <div className="collapse" id="reports">
                        <ul className="nav-second-level">

                            <li>
                                <a href="/report/product_report">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Product Report
                                    </span></a>
                            </li>

                            <li>
                                <a href="/report/expense_report">
                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Expense Report
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="/report/customer_report">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Customer Report
                                    </span>

                                </a>
                            </li>

                        </ul>
                    </div>
                </li>
                {/* <!-- user Management --> */}
                <li>
                    <a href="index.html#UserManagement" data-bs-toggle="collapse">
                        {/* <!-- <i className="mdi mdi-shopping"></i> --> */}
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.5226 17.8938C21.4549 17.6487 21.2369 17.5297 20.8421 17.3138L20.8329 17.3088C20.7609 17.2696 20.6811 17.2254 20.5935 17.177C20.4688 17.1072 20.4353 17.0651 20.4218 16.8834C20.4004 16.5885 20.4659 16.4709 20.7046 16.379C20.8151 16.3362 20.9063 16.2785 20.996 16.2222C21.0452 16.1916 21.0908 16.1624 21.1357 16.1396C21.3345 16.0377 21.4606 15.8995 21.509 15.7306C21.5596 15.5539 21.524 15.3665 21.3993 15.1564C21.0537 14.5728 20.7467 14.0406 20.4609 13.529C20.3534 13.3381 20.2151 13.2191 20.0484 13.1749C19.8781 13.13 19.7007 13.1649 19.5062 13.2818C19.435 13.3245 19.363 13.3637 19.2853 13.4065C19.15 13.4813 19.0103 13.5582 18.8757 13.6523C18.8215 13.6908 18.8144 13.695 18.6441 13.6231C18.3491 13.4984 18.2665 13.3452 18.3178 13.0153C18.3534 12.7873 18.3484 12.5971 18.3014 12.4332C18.2451 12.2351 18.0634 11.9893 17.7977 11.9181C17.7521 11.9053 17.7471 11.9038 15.7286 11.8924C15.5113 11.8924 15.3388 11.9558 15.2142 12.0805C15.0902 12.2052 15.0275 12.3791 15.0289 12.5964C15.0289 12.6434 15.0296 12.6897 15.0303 12.7367L15.031 12.7667C15.0339 12.9754 15.036 13.1906 15.0239 13.3951C15.0232 13.4058 15.0118 13.4328 15.0033 13.4449C14.7097 13.6694 14.6285 13.7292 14.1789 13.4706C14.1732 13.467 13.9552 13.3374 13.8462 13.2718C13.6638 13.1621 13.4885 13.1279 13.3246 13.1713C13.16 13.2141 13.0232 13.3295 12.9178 13.5141C12.5437 14.1688 12.2331 14.7061 11.9395 15.2048C11.8341 15.3851 11.8035 15.5575 11.8476 15.7178C11.8932 15.8831 12.0094 16.0156 12.2039 16.1232C12.4219 16.2436 12.6499 16.3761 12.9 16.5286C12.9342 16.5493 12.9534 16.5621 12.9627 16.5692C13.0304 16.8015 12.9057 17.0901 12.677 17.2219L12.6257 17.2511C12.5808 17.2767 12.5302 17.3052 12.4789 17.3387C12.4433 17.3622 12.3984 17.3865 12.3499 17.4128C12.2046 17.4912 12.0236 17.5895 11.931 17.7712C11.8548 17.9201 11.8441 18.032 12.397 19.115C12.6563 19.623 12.9256 20.1153 12.9335 20.1288C13.0368 20.3013 13.17 20.4096 13.3296 20.4495C13.4899 20.4901 13.6602 20.4573 13.8348 20.3526C13.9103 20.307 13.988 20.2635 14.0678 20.2186C14.2074 20.1402 14.3513 20.0597 14.4917 19.9643C14.543 19.9293 14.5508 19.9236 14.7318 19.9985C15.0125 20.1153 15.0866 20.2564 15.0367 20.5813C15.0161 20.7174 15.0218 20.8442 15.0275 20.9674L15.0282 20.9774C15.0296 21.0052 15.031 21.0323 15.0318 21.0601C15.0439 21.4698 15.2868 21.7141 15.6865 21.7141C16.4304 21.7113 17.0823 21.7113 17.6858 21.7141C18.0755 21.7141 18.3135 21.4811 18.3235 21.0921L18.327 20.9717C18.3334 20.758 18.3399 20.5364 18.3213 20.3141C18.3156 20.2379 18.3135 20.2172 18.4802 20.0904C18.7253 19.9044 18.8835 19.9094 19.1307 20.1117C19.2219 20.1858 19.321 20.2371 19.4086 20.2834C19.4513 20.3055 19.492 20.3269 19.529 20.349C19.7057 20.4573 19.8781 20.4915 20.0413 20.4495C20.208 20.4067 20.3477 20.2892 20.4567 20.0989C20.5571 19.9229 20.6583 19.7484 20.7595 19.5731L20.7766 19.5432C20.8835 19.3586 20.9896 19.1748 21.0951 18.9896C21.1478 18.8977 21.1955 18.815 21.2418 18.7366C21.4663 18.3505 21.591 18.1381 21.5226 17.8938ZM17.155 19.9635C17.165 20.1467 17.1635 20.3326 17.1614 20.5321H16.2245C16.2309 20.3176 16.2366 20.0961 16.2024 19.8745C16.1639 19.6301 15.9722 19.4491 15.7906 19.3045L15.2248 18.914L15.2156 18.9083C14.719 18.5998 14.4133 18.5984 14.0036 18.9055C13.9153 18.9718 13.8098 19.0288 13.6887 19.0929C13.5419 18.8399 13.3966 18.5899 13.2484 18.3348L13.2099 18.2685H13.2106C13.3816 18.1652 13.5426 18.0676 13.7065 17.9807C14.035 17.8061 14.1369 17.6116 14.1248 17.1827L14.1191 16.3662L14.1176 16.3441C14.097 16.1424 14.0051 15.8731 13.8113 15.7214C13.626 15.5746 13.4279 15.4649 13.2178 15.348L13.2142 15.3459L13.6837 14.5315L13.6973 14.5393C13.8732 14.6384 14.0393 14.7317 14.2031 14.8336C14.4974 15.016 14.7817 15.0032 15.0724 14.793C15.264 14.6533 15.4885 14.5251 15.7599 14.3997C16.0777 14.2536 16.2323 14.005 16.2209 13.6601C16.2145 13.482 16.2159 13.3024 16.2173 13.1108H17.1607C17.1628 13.2853 17.165 13.4642 17.155 13.6373C17.1343 14.0043 17.2896 14.2565 17.6302 14.4089C17.8775 14.5201 18.0962 14.6455 18.28 14.7823C18.5728 15.0017 18.8778 15.0153 19.1863 14.8222C19.3402 14.726 19.5034 14.632 19.6772 14.5336L19.6836 14.5301L20.161 15.3544L20.1524 15.3594C19.975 15.4649 19.8083 15.5639 19.6402 15.6508C19.3338 15.8104 19.2005 16.0619 19.2319 16.4196C19.2419 16.5329 19.2383 16.6519 19.2347 16.7787C19.2298 16.939 19.2248 17.1057 19.2483 17.2767C19.2732 17.4677 19.3765 17.7505 19.5832 17.918C19.7591 18.0598 19.9487 18.1631 20.1539 18.2742C19.9978 18.545 19.8454 18.8114 19.6865 19.0872L19.6715 19.0786C19.4941 18.9796 19.3274 18.8863 19.1628 18.7865C18.8571 18.6013 18.5728 18.6176 18.2928 18.8357C18.1076 18.9789 17.8867 19.1071 17.653 19.2054C17.5226 19.2582 17.1265 19.4242 17.155 19.9635Z"
                                fill="black" />
                            <path
                                d="M19.1393 16.8065C19.1372 15.467 18.0428 14.374 16.7019 14.3705C16.6969 14.3705 16.6919 14.3705 16.6869 14.3705C16.0278 14.3705 15.4115 14.6241 14.9484 15.0858C14.4889 15.544 14.2359 16.1567 14.2366 16.8108C14.2366 18.1424 15.326 19.2368 16.6655 19.2503H16.6919C17.3381 19.2503 17.9494 18.9974 18.4133 18.5379C18.8821 18.074 19.14 17.4591 19.1393 16.8065ZM15.807 15.8838C16.0449 15.6537 16.3527 15.5269 16.6755 15.5269H16.6962C17.403 15.5383 17.9537 16.1083 17.9501 16.8243C17.948 17.1684 17.8162 17.4869 17.5782 17.7206C17.3417 17.9529 17.0225 18.0804 16.6776 18.0804H16.6698C16.3314 18.0783 16.0136 17.9436 15.7756 17.7007C15.5369 17.457 15.4073 17.1357 15.4122 16.7958C15.4172 16.4502 15.5576 16.1261 15.807 15.8838Z"
                                fill="black" />
                            <path
                                d="M11.0399 14.2354H6.53989C5.14432 14.2354 4.44654 14.2354 3.87874 14.4077C2.60034 14.7955 1.59993 15.7959 1.21213 17.0743C1.03989 17.6421 1.03989 18.3398 1.03989 19.7354M13.5399 6.23541C13.5399 8.72069 11.5252 10.7354 9.03989 10.7354C6.55461 10.7354 4.53989 8.72069 4.53989 6.23541C4.53989 3.75013 6.55461 1.73541 9.03989 1.73541C11.5252 1.73541 13.5399 3.75013 13.5399 6.23541Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>User Management</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="UserManagement">
                        <ul className="nav-second-level">
                            <li>
                                <a href="/super_admin/super">

                                    <i className="mdi mdi-circle" style={{fontSize: '6px',marginRight: '10px'}}></i>
                                    <span> Super Admin
                                    </span></a>
                            </li>


                        </ul>
                    </div>
                </li>


            </ul>

        </div>
        {/* <!-- End Sidebar --> */}

        <div className="clearfix"></div>

    </div>
    {/* <!-- Sidebar -left --> */}

</div> 
        </div>
    );
}

export default Sidebar;