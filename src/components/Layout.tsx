import {ReactNode} from "react";
import {Flex, Box} from "@chakra-ui/react";
import Navbar from "./Navbar";
import SideAnimation from "./SideAnimation";
import Footer from "./Footer";

type Props = {
    children?: ReactNode;
};

export default function Layout({children}: Props) {

    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>

    );
}
