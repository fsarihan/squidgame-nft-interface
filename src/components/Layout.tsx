import {ReactNode} from "react";
import {Flex, Box} from "@chakra-ui/react";
import Navbar from "./Navbar";
import SideAnimation from "./SideAnimation";
import Footer from "./Footer";
import {ToastContainer} from 'react-toastify';

type Props = {
    children?: ReactNode;
};

export default function Layout({children}: Props) {

    return (
        <>
            <Navbar/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {children}
            <Footer/>
        </>

    );
}
