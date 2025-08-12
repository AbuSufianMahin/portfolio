import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import HomePage from "../Pages/HomeLayoutPages/Home/HomePage";
const HomeLayout = () => {
    return (
        <div className='poppins-regular'>
            <Navbar></Navbar>
            <HomePage></HomePage>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;