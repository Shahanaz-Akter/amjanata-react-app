import React from 'react';

function ProductUpload(props) {
    return (
        <div>
              <div className="mx-3" style="margin-top: 6rem; padding-bottom: 9rem">
        <h3 className="text-center">UPLOAD PRODUCT</h3>
        <p>Upload photo or video to share your product</p>


        <form className="form" action="/seller/post_product_upload" encType="multipart/form-data" method='post'>

            <label className="picture" htmlFor="Product_img" tabIndex="0">
                <span className="picture__image"><svg xmlns="http://www.w3.org/2000/svg" width="139" height="140" viewBox="0 0 139 140" fill="none">
                        <path
                            d="M101.467 138.817H30.9221C26.3112 138.817 24.0057 138.817 22.9381 137.905C22.0118 137.114 21.5202 135.927 21.6158 134.713C21.726 133.313 23.3562 131.683 26.6166 128.422L91.3335 63.7054C94.3475 60.6913 95.8547 59.1842 97.5925 58.6196C99.1211 58.1229 100.768 58.1229 102.296 58.6196C104.034 59.1842 105.541 60.6913 108.555 63.7054L134.251 89.401C135.635 90.7846 136.326 91.4764 136.821 92.2837C137.26 92.9995 137.583 93.7798 137.779 94.5961C138 95.5168 138 96.4952 138 98.4519V102.283M101.467 138.817C114.255 138.817 120.648 138.817 125.533 136.328C129.829 134.139 133.322 130.646 135.511 126.349C138 121.465 138 115.071 138 102.283M101.467 138.817H37.5333C24.7455 138.817 18.3515 138.817 13.4672 136.328C9.17085 134.139 5.67779 130.646 3.48868 126.349C1 121.465 1 115.071 1 102.283V38.35C1 25.5621 1 19.1682 3.48868 14.2839C5.67779 9.9875 9.17085 6.49444 13.4672 4.30533C18.3515 1.81665 24.7455 1.81665 37.5333 1.81665H101.467C114.255 1.81665 120.648 1.81665 125.533 4.30533C129.829 6.49444 133.322 9.9875 135.511 14.2839C138 19.1682 138 25.5621 138 38.35V102.283M58.0833 43.6778C58.0833 52.0848 51.2681 58.9 42.8611 58.9C34.4541 58.9 27.6389 52.0848 27.6389 43.6778C27.6389 35.2708 34.4541 28.4555 42.8611 28.4555C51.2681 28.4555 58.0833 35.2708 58.0833 43.6778Z"
                            stroke="#464748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></span>
            </label>

            <input type="file" name="product_img" id="Product_img" multiple />

            <label className="mt-3" htmlFor="product_name">Product Name:</label> <br />
            <input style="width: 100%" className="rounded border" type="text" id="product_name" name="product_name" autoComplete="off" placeholder="Product" value="" />
            <br />
            <label className="mt-3" htmlFor="selling_price">Selling Price:</label> <br />
            <input style="width: 100%" className="rounded border" type="number" id="selling_price" name="selling_price" autoComplete="off" placeholder="BDT 200" value="" required />
            <br />
            <label className="mt-3" htmlFor="discount">Discount:</label> <br />
            <input style="width: 100%" className="rounded border" type="number" id="discount" name="discount" autoComplete="off" placeholder="Product" value="" />
            <br />

            <label className="mt-3" htmlFor="category">Category</label> <br />
            <input style="width: 100%" className="rounded border" type="text" id="category" name="category" autoComplete="off" placeholder="Category" value="" />
            <br />
            <label className="mt-3" htmlFor="stock">Stock</label> <br />
            <input style="width: 100%" className="rounded border" type="number" id="stock" name="stock" autoComplete="off" placeholder="Stock" value="" />
            <label className="mt-3" htmlFor="description">Description</label> <br />
            <textarea style="width: 100%; padding: 10px" className="rounded border" id="description" name="description" placeholder="Description" cols="10" rows="5"></textarea>

            <div>
                <button type="submit" className="w-100 p-2 mt-3 btn text-light" style={{backgroundColor: '#3bb44a'}}>
                    Upload
                </button>
            </div>
        </form>



    </div>
        </div>
    );
}

export default ProductUpload;