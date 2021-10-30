import {Button, Box, Text} from "@chakra-ui/react";
import {useEthers, useEtherBalance} from "@usedapp/core";
import {formatEther} from "@ethersproject/units";
import Identicon from "./Identicon";
import {useCookies} from 'react-cookie';
// @ts-ignore
import * as qs from 'qs';

type Props = {
    handleOpenModal: any;
};

export default function ConnectButton({handleOpenModal}: Props) {
    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);
    const [cookies, setCookie] = useCookies(['ref']);
    console.log(cookies.ref);
    if (typeof cookies.ref == "undefined" && typeof qs.parse(window.location.search, {ignoreQueryPrefix: true})._a != "undefined" && qs.parse(window.location.search, {ignoreQueryPrefix: true})._a.length > 1) {
        setCookie("ref", qs.parse(window.location.search, {ignoreQueryPrefix: true})._a, {maxAge: 2592000});
    }

    function handleConnectWallet() {
        activateBrowserWallet(err => {
            console.log(err);
            // @ts-ignore
            if (typeof window['ethereum'] == "undefined" && cookies.ref != null) {
                window.location.href = 'https://metamask.app.link/dapp/squidgame1nft.com/?_a=' + cookies.ref;
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
                    {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
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
