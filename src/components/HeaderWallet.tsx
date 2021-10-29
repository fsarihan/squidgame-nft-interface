import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import {useDisclosure} from "@chakra-ui/react";

export default function HeaderWallet() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (

        <>
            <ConnectButton handleOpenModal={onOpen}/>
            <AccountModal isOpen={isOpen} onClose={onClose}/>
        </>
    );

}