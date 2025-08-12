import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router";
import ScrollToHash from "../../Hooks/ScrollToHash";
import ScrollToTop from "../../Hooks/ScrollToTop";
const HomeLayout = () => {
    return (
        <div className='poppins-regular'>
            <ScrollToTop />
            <Navbar></Navbar>
            <ScrollToHash />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;