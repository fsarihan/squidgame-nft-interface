import {Button, Box, Text} from "@chakra-ui/react";
import {useEthers, useEtherBalance} from "@usedapp/core";
import {formatEther} from "@ethersproject/units";
import Identicon from "./Identicon";
import {useCookies} from 'react-cookie';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// @ts-ignore
import * as qs from 'qs';

type Props = {
    handleOpenModal: any;
};

export default function ConnectButton({handleOpenModal}: Props) {
    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);
    const [cookies, setCookie] = useCookies(['ref']);
    if (typeof cookies.ref == "undefined" && typeof qs.parse(window.location.search, {ignoreQueryPrefix: true})._a != "undefined" && qs.parse(window.location.search, {ignoreQueryPrefix: true})._a.length > 1) {
        setCookie("ref", qs.parse(window.location.search, {ignoreQueryPrefix: true})._a, {maxAge: 2592000});
    }

    function handleConnectWallet() {

        activateBrowserWallet(err => {
            console.log(err);
            // @ts-ignore
            if (typeof window['ethereum'] == "undefined") {
                toast.error('🦄 You need install metamask first!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                if (cookies.ref != null) {
                    window.location.href = 'https://metamask.app.link/dapp/squidgame1nft.com/?_a=' + cookies.ref;
                } else {
                    window.location.href = 'https://metamask.app.link/dapp/squidgame1nft.com/';
                }

            } else {
                if (err) {

                    toast.error('🦄 Only work on Polygon chain! You must switch the network to Polygon.', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // @ts-ignore
                    window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: "0x89",
                            chainName: 'Polygon Mainnet',
                            nativeCurrency: {
                                name: 'MATIC',
                                symbol: 'MATIC',
                                decimals: 18
                            },
                            rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
                            blockExplorerUrls: ['https://polygonscan.com/']
                        }]
                    })
                        .catch((error: any) => {
                            console.log(error)
                        })
                }
            }

        });
    }

    return account ? (
        <Box
            display="flex"
            alignItems="center"
            background="gray.700"
            borderRadius="xl"
            py="0"
        >
            <Box px="3">
                <Text color="white" fontSize="md">
                    {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(2)} MATIC
                </Text>
            </Box>
            <Button
                onClick={handleOpenModal}
                bg="gray.800"
                border="1px solid transparent"
                _hover={{
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "blue.400",
                    backgroundColor: "gray.700",
                }}
                borderRadius="xl"
                m="1px"
                px={3}
                height="38px"
            >
                <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                    {account &&
                    `${account.slice(0, 6)}...${account.slice(
                        account.length - 4,
                        account.length
                    )}`}
                </Text>
                <Identicon/>
            </Button>
        </Box>
    ) : (
        <Button
            onClick={handleConnectWallet}
            bg="blue.800"
            color="blue.300"
            fontSize="lg"
            fontWeight="medium"
            borderRadius="xl"
            border="1px solid transparent"
            _hover={{
                borderColor: "blue.700",
                color: "blue.400",
            }}
            _active={{
                backgroundColor: "blue.800",
                borderColor: "blue.700",
            }}
        >
            Connect to a wallet
        </Button>
    );
}
