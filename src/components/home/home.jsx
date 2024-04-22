

import { useState } from "react";
import Navbar from "./Navbar";
import CategoriesNavbar from "./CategoriesNavbar";
import PageContent from "./PageContent";
import Footer from "./Footer";

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
