

import { useState } from "react";
import Navbar from "./navbar";
import CategoriesNavbar from "./categoriesNavbar";
import PageContent from "./pageContent";
import Footer from "./footer";

function Home(){
    return (
<div>
    <Navbar />
    <CategoriesNavbar />
    <PageContent />
    <Footer />
</div>
    );
}

export default Home;
