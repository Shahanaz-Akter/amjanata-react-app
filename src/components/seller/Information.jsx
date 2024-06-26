import React, { useState } from 'react';
import "./information.css";
const Information = () => {

{/* <script>
        const threeBar = document.getElementById("threeBar");
        const sidebar = document.querySelector(".sidebar");

        threeBar.addEventListener("click", function () {
            sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
        });

        const closeSideBar = () => {
            sidebar.style.left = sidebar.style.left === "-250px" ? "0px" : "-250px";
        };
    </script> */}




const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("Clicked usestate", sidebarOpen);
  };

  const sidebarStyle = {
  position: 'fixed',
  top: 0,
  left: sidebarOpen ? 0 : '-250px', // Move the sidebar in or out based on sidebarOpen state
  width: '250px',
  height: '100%',
  backgroundColor: '#ffffff',
  transition: 'left 0.3s ease',
  boxSizing: 'border-box',
  boxShadow: '0px 1px 15px gray',
};


return (
      
<div className="position-relative" style={{height: '100vh'}}>
    {/* <!--start top header--> */}
    <header className="top-header">

        <nav className="navbar navbar-expand-md w-100 navbar-dark container gap-3">
            <h3 className="fw-bold ms-2 mt-1" style={{marginBottom: '0px', padding: '5px', cursor: 'pointer'}}   id="threeBar"  onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                    <path d="M1.72997 7.60657H19.73M1.72997 1.60657H19.73M1.72997 13.6066H19.73" stroke="#464748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </h3>
            <ul className="navbar-nav secondary-menu flex-row">
                <li className="nav-item d-none d-lg-block s-sidebar__trigger">
                    <a className="nav-link" href=" "><i className="fas fa-user-edit"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=" ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                            <path
                                d="M7.45923 19.0896C8.09385 19.6498 8.92747 19.9896 9.84047 19.9896C10.7535 19.9896 11.5871 19.6498 12.2217 19.0896M15.2405 7.38962C15.2405 5.95745 14.6715 4.58394 13.6588 3.57125C12.6462 2.55855 11.2726 1.98962 9.84047 1.98962C8.4083 1.98962 7.03479 2.55855 6.02209 3.57125C5.0094 4.58394 4.44047 5.95745 4.44047 7.38962C4.44047 10.1708 3.73889 12.075 2.95517 13.3345C2.29409 14.3969 1.96354 14.9281 1.97566 15.0763C1.98908 15.2404 2.02385 15.303 2.15607 15.401C2.27548 15.4896 2.8138 15.4896 3.89044 15.4896H15.7905C16.8671 15.4896 17.4055 15.4896 17.5249 15.401C17.6571 15.303 17.6919 15.2404 17.7053 15.0763C17.7174 14.9281 17.3869 14.3969 16.7258 13.3345C15.942 12.075 15.2405 10.1708 15.2405 7.38962Z"
                                stroke="#464748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link position-relative" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M10.0919 10.5768C12.5772 10.5768 14.5919 8.56206 14.5919 6.07678C14.5919 3.5915 12.5772 1.57678 10.0919 1.57678C7.60664 1.57678 5.59192 3.5915 5.59192 6.07678C5.59192 8.56206 7.60664 10.5768 10.0919 10.5768Z" stroke="#464748" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.10156 13.7401C1.98095 13.6858 1.58329 17.6483 1.89954 19.6364H18.3685C18.3685 17.8139 18.5025 13.9351 14.3714 13.7401H6.10156Z" stroke="#464748" strokeWidth="2" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>

      {/* <div className={sidebarOpen ? 'sidebar open' : 'sidebar'}> */}
      <div style={sidebarStyle}>
        <div className="d-flex justify-content-end align-items-center" style={{ height: '50px', boxSizing: 'border-box', boxShadow: '-2px 1px 4px gray' }}>
          <h3 style={{ width: '20px', marginRight: '10px', cursor: 'pointer' }} onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </h3>
        </div>
       
            <ul>
                <li><a href="/seller/app_home"   style={{color: 'black', textDecoration: 'none'}}>Home</a></li>
                <li><a href="/seller/info"  style={{color: 'black', textDecoration: 'none'}}>Add Info</a></li>
                <li><a href="/seller/product_list"  style={{color: 'black', textDecoration: 'none'}}>Product</a></li>
                <li><a href="/seller/advice"  style={{color: 'black', textDecoration: 'none'}}>Advice</a></li>
                <li><a href="/seller/order_list"  style={{color: 'black', textDecoration: 'none'}}>Order List</a></li>
                <li><a href="/seller/sales_payment"  style={{color: 'black', textDecoration: 'none'}}>Sales Payment</a></li>
            </ul>
        </div>
   
    </header>
    {/* <!--end top header--> */}

    <div className="mx-3" style={{marginTop: '6rem', marginBottom: '130px'}}>
        <h3 className="text-center">Information</h3>

        <form action="/seller/post_information/<%=param_id%>" encType="multipart/form-data" method="post">

            <label className="picture" htmlFor="seller_picture" tabIndex="0">
                <span className="picture__image"><svg xmlns="http://www.w3.org/2000/svg" width="139" height="140" viewBox="0 0 139 140" fill="none">
                        <path
                            d="M101.467 138.817H30.9221C26.3112 138.817 24.0057 138.817 22.9381 137.905C22.0118 137.114 21.5202 135.927 21.6158 134.713C21.726 133.313 23.3562 131.683 26.6166 128.422L91.3335 63.7054C94.3475 60.6913 95.8547 59.1842 97.5925 58.6196C99.1211 58.1229 100.768 58.1229 102.296 58.6196C104.034 59.1842 105.541 60.6913 108.555 63.7054L134.251 89.401C135.635 90.7846 136.326 91.4764 136.821 92.2837C137.26 92.9995 137.583 93.7798 137.779 94.5961C138 95.5168 138 96.4952 138 98.4519V102.283M101.467 138.817C114.255 138.817 120.648 138.817 125.533 136.328C129.829 134.139 133.322 130.646 135.511 126.349C138 121.465 138 115.071 138 102.283M101.467 138.817H37.5333C24.7455 138.817 18.3515 138.817 13.4672 136.328C9.17085 134.139 5.67779 130.646 3.48868 126.349C1 121.465 1 115.071 1 102.283V38.35C1 25.5621 1 19.1682 3.48868 14.2839C5.67779 9.9875 9.17085 6.49444 13.4672 4.30533C18.3515 1.81665 24.7455 1.81665 37.5333 1.81665H101.467C114.255 1.81665 120.648 1.81665 125.533 4.30533C129.829 6.49444 133.322 9.9875 135.511 14.2839C138 19.1682 138 25.5621 138 38.35V102.283M58.0833 43.6778C58.0833 52.0848 51.2681 58.9 42.8611 58.9C34.4541 58.9 27.6389 52.0848 27.6389 43.6778C27.6389 35.2708 34.4541 28.4555 42.8611 28.4555C51.2681 28.4555 58.0833 35.2708 58.0833 43.6778Z"
                            stroke="#464748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </label>

            <input type="file" name="seller_picture" id="seller_picture" />

            <label className="mt-3" htmlFor="store_name">Store Name:</label> <br />
            <input style={{width: '100%'}} className="rounded border" type="text" id="store_name" name="store_name" autoComplete="off" placeholder="" required />
            <br />
            <label className="mt-3" htmlFor="user_name">User Name:</label> <br />
            <input style={{width: '100%'}} className="rounded border" type="text" id="user_name" name="seller_user_name" autoComplete="off" placeholder="" required />
            <br />
            <label className="mt-3" htmlFor="business_type">Business Type:</label> <br />
            <input style={{width: '100%'}} className="rounded border" type="text" id="business_type" name="business_type" autoComplete="off" placeholder="" required />
            <br />
            <label className="mt-3" htmlFor="address">Address:</label> <br />
            <input style={{width: '100%'}} className="rounded border" type="text" id="address" name="address" autoComplete="off" placeholder="" required />
            <div>
                <button type="submit" className="w-100 p-2 mt-3 btn text-light" style={{backgroundColor: '#3bb44a'}}>
                    Submit
                </button>
            </div>
        </form>
    </div>

    

    {/* <!-- start Footer  --> */}
    <div className="tab shadow-lg">
        <a className="tab-item1" href="/seller/app_home">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                <path
                    d="M10.043 1.09542C9.69171 0.822167 9.51605 0.68554 9.32208 0.633022C9.15093 0.586682 8.97053 0.586682 8.79938 0.633022C8.60541 0.68554 8.42975 0.822167 8.07843 1.09542L1.29612 6.37055C0.842751 6.72317 0.616067 6.89948 0.452757 7.12028C0.308096 7.31587 0.200331 7.5362 0.134757 7.77047C0.06073 8.03494 0.06073 8.32212 0.06073 8.89647V16.1314C0.06073 17.2515 0.06073 17.8116 0.278717 18.2394C0.470464 18.6157 0.776425 18.9217 1.15275 19.1134C1.58057 19.3314 2.14062 19.3314 3.26073 19.3314H5.26073C5.54076 19.3314 5.68077 19.3314 5.78773 19.2769C5.88181 19.229 5.9583 19.1525 6.00623 19.0584C6.06073 18.9514 6.06073 18.8114 6.06073 18.5314V11.9314C6.06073 11.3714 6.06073 11.0913 6.16972 10.8774C6.2656 10.6893 6.41858 10.5363 6.60674 10.4404C6.82065 10.3314 7.10068 10.3314 7.66073 10.3314H10.4607C11.0208 10.3314 11.3008 10.3314 11.5147 10.4404C11.7029 10.5363 11.8559 10.6893 11.9517 10.8774C12.0607 11.0913 12.0607 11.3714 12.0607 11.9314V18.5314C12.0607 18.8114 12.0607 18.9514 12.1152 19.0584C12.1632 19.1525 12.2397 19.229 12.3337 19.2769C12.4407 19.3314 12.5807 19.3314 12.8607 19.3314H14.8607C15.9808 19.3314 16.5409 19.3314 16.9687 19.1134C17.345 18.9217 17.651 18.6157 17.8427 18.2394C18.0607 17.8116 18.0607 17.2515 18.0607 16.1314V8.89647C18.0607 8.32212 18.0607 8.03494 17.9867 7.77047C17.9211 7.5362 17.8134 7.31587 17.6687 7.12028C17.5054 6.89948 17.2787 6.72317 16.8253 6.37055L10.043 1.09542Z"
                    fill="#464748" />
            </svg><br />
            <span>Home</span>
        </a>

        <a className="tab-item1" href="/seller/product_list">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 21 23" fill="none">
                <path
                    d="M14.4403 8.13855V5.13855C14.4403 2.92941 12.6494 1.13855 10.4403 1.13855C8.23116 1.13855 6.4403 2.92941 6.4403 5.13855V8.13855M2.03231 9.49051L1.43231 15.8905C1.26171 17.7102 1.17641 18.6201 1.47835 19.3228C1.7436 19.9402 2.20842 20.4506 2.79832 20.7723C3.46983 21.1385 4.38367 21.1385 6.21135 21.1385H14.6693C16.4969 21.1385 17.4108 21.1385 18.0823 20.7723C18.6722 20.4506 19.137 19.9402 19.4023 19.3228C19.7042 18.6201 19.6189 17.7102 19.4483 15.8905L18.8483 9.49052C18.7042 7.9539 18.6322 7.18559 18.2866 6.60471C17.9823 6.09313 17.5326 5.68366 16.9949 5.42839C16.3843 5.13855 15.6126 5.13855 14.0693 5.13855L6.81135 5.13855C5.26799 5.13855 4.49631 5.13855 3.88572 5.42839C3.34797 5.68366 2.89831 6.09313 2.59396 6.60471C2.24839 7.18558 2.17636 7.95389 2.03231 9.49051Z"
                    stroke="#464748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg><br />
            <span>Product</span>
        </a>

        <a className="tab-item1" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 21 22" fill="none">
                <path
                    d="M1.83026 6.53499C1.83026 4.85483 1.83026 4.01475 2.15724 3.37301C2.44486 2.80853 2.9038 2.34959 3.46829 2.06197C4.11002 1.73499 4.9501 1.73499 6.63026 1.73499H15.0303C16.7104 1.73499 17.5505 1.73499 18.1922 2.06197C18.7567 2.34959 19.2157 2.80853 19.5033 3.37301C19.8303 4.01475 19.8303 4.85483 19.8303 6.53499V11.935C19.8303 13.6151 19.8303 14.4552 19.5033 15.097C19.2157 15.6614 18.7567 16.1204 18.1922 16.408C17.5505 16.735 16.7104 16.735 15.0303 16.735H12.514C11.89 16.735 11.5779 16.735 11.2795 16.7962C11.0147 16.8506 10.7585 16.9405 10.5177 17.0634C10.2464 17.202 10.0028 17.397 9.51547 17.7868L7.13002 19.6952C6.71393 20.028 6.50589 20.1945 6.3308 20.1947C6.17853 20.1948 6.03448 20.1256 5.93949 20.0066C5.83026 19.8698 5.83026 19.6033 5.83026 19.0705V16.735C4.90029 16.735 4.4353 16.735 4.0538 16.6328C3.01853 16.3554 2.20989 15.5467 1.93248 14.5114C1.83026 14.1299 1.83026 13.665 1.83026 12.735V6.53499Z"
                    stroke="#464748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg><br />
            <span>Message</span>
        </a>

        <a className="tab-item1" href="/seller/advice">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 21 21" fill="none">
                <path
                    d="M10.7537 9.0459V5.5459M10.7537 12.5459H10.7637M5.75372 16.5459V18.8814C5.75372 19.4142 5.75372 19.6807 5.86295 19.8175C5.95795 19.9365 6.10199 20.0058 6.25426 20.0056C6.42935 20.0054 6.63739 19.839 7.05348 19.5061L9.43894 17.5977C9.92624 17.2079 10.1699 17.013 10.4412 16.8744C10.6819 16.7514 10.9382 16.6615 11.2029 16.6072C11.5014 16.5459 11.8134 16.5459 12.4375 16.5459H14.9537C16.6339 16.5459 17.474 16.5459 18.1157 16.2189C18.6802 15.9313 19.1391 15.4724 19.4267 14.9079C19.7537 14.2661 19.7537 13.4261 19.7537 11.7459V6.3459C19.7537 4.66574 19.7537 3.82566 19.4267 3.18393C19.1391 2.61944 18.6802 2.1605 18.1157 1.87288C17.474 1.5459 16.6339 1.5459 14.9537 1.5459H6.55372C4.87357 1.5459 4.03349 1.5459 3.39175 1.87288C2.82727 2.1605 2.36832 2.61944 2.0807 3.18393C1.75372 3.82566 1.75372 4.66574 1.75372 6.3459V12.5459C1.75372 13.4759 1.75372 13.9409 1.85595 14.3224C2.13335 15.3576 2.94199 16.1663 3.97727 16.4437C4.35877 16.5459 4.82375 16.5459 5.75372 16.5459Z"
                    stroke="#464748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg><br />
            <span>Advice</span>
        </a>

        <a className="tab-item1" href="/seller/sales_payment">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 23 23" fill="none">
                <path
                    d="M13.3598 8.3167C12.7873 8.72479 12.0868 8.96484 11.3303 8.96484C9.39726 8.96484 7.83026 7.39784 7.83026 5.46484C7.83026 3.53185 9.39726 1.96484 11.3303 1.96484C12.5832 1.96484 13.6825 2.62326 14.3008 3.61299M5.83026 20.052H8.44055C8.78089 20.052 9.11914 20.0925 9.44907 20.1735L12.2072 20.8437C12.8056 20.9895 13.429 21.0037 14.0337 20.8862L17.0832 20.293C17.8888 20.136 18.6298 19.7503 19.2106 19.1853L21.3682 17.0866C21.9843 16.4882 21.9843 15.5173 21.3682 14.9179C20.8134 14.3783 19.935 14.3175 19.3074 14.7752L16.7929 16.6097C16.4327 16.8729 15.9946 17.0147 15.5439 17.0147H13.1158L14.6613 17.0146C15.5325 17.0146 16.2381 16.3282 16.2381 15.4808V15.174C16.2381 14.4703 15.7458 13.8568 15.0443 13.6867L12.6589 13.1066C12.2706 13.0124 11.8731 12.9648 11.4734 12.9648C10.5086 12.9648 8.76215 13.7637 8.76215 13.7637L5.83026 14.9897M19.8303 6.46484C19.8303 8.39784 18.2633 9.96484 16.3303 9.96484C14.3973 9.96484 12.8303 8.39784 12.8303 6.46484C12.8303 4.53185 14.3973 2.96484 16.3303 2.96484C18.2633 2.96484 19.8303 4.53185 19.8303 6.46484ZM1.83026 14.5648L1.83026 20.3648C1.83026 20.9249 1.83026 21.2049 1.93925 21.4188C2.03513 21.607 2.18811 21.76 2.37627 21.8558C2.59018 21.9648 2.87021 21.9648 3.43026 21.9648H4.23026C4.79031 21.9648 5.07034 21.9648 5.28425 21.8559C5.47241 21.76 5.62539 21.607 5.72127 21.4188C5.83026 21.2049 5.83026 20.9249 5.83026 20.3648V14.5648C5.83026 14.0048 5.83026 13.7248 5.72127 13.5109C5.62539 13.3227 5.47241 13.1697 5.28425 13.0738C5.07034 12.9648 4.79031 12.9648 4.23026 12.9648L3.43026 12.9648C2.87021 12.9648 2.59018 12.9648 2.37627 13.0738C2.18811 13.1697 2.03513 13.3227 1.93925 13.5109C1.83026 13.7248 1.83026 14.0048 1.83026 14.5648Z"
                    stroke="#464748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg><br />
            <span>Sales & Payment</span>
        </a>
    </div>
    {/* <!-- end Footer  --> */}

        </div>
    );
};

export default Information;