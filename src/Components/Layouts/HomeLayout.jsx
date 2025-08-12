import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router";
import ScrollToHash from "../../Hooks/ScrollToHash";
const HomeLayout = () => {
    return (
        <div className='poppins-regular'>
            <Navbar></Navbar>
            <ScrollToHash />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;