import React from 'react';

const CategoriesNavbar = () => {
    return (
        <div>
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

        </div>
    );
};

export default CategoriesNavbar;