import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Center,
    Button,
    VStack,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    AvatarGroup,
    Avatar,
    useToast

} from '@chakra-ui/react';
import {useEthers} from "@usedapp/core";
import Countdown from 'react-countdown';
import {useCookies} from 'react-cookie';
import bg from '../assets/images/b12.jpg'
import squidFactoryABI from '../assets/data/abi.json'
import {useState} from "react";
import {ethers} from 'ethers'


require('dotenv').config()

// const MINT_DATE = Date.now() + 5000;
const MINT_DATE: number = parseFloat(process.env.REACT_APP_PUBLIC_MINT_DATE!)
const nftPrice: number = parseFloat(process.env.REACT_APP_PUBLIC_MINT_PRICE!)
const smartContractAddress: string = process.env.REACT_APP_PUBLIC_CONTRACT_ADDRESS!


export default function Mint() {
    const toast = useToast()
    const {account} = useEthers();
    const [cookies] = useCookies();
    const [mintCount, setMintCount] = useState(1);
    const [isMinting, setMinting] = useState(false);
    const [mintAvailable, setMintAvailable] = useState(Date.now() >= MINT_DATE);
    const successHandler = () => {
        toast({
            title: "Minted!",
            description: "✅ Your NFTs has been minted!",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
        })
    }
    const errorHandler = (err: any) => {
        toast({
            title: "Error!",
            description: '❌ ' + err.data.message,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
        })
    }
    const mintNFT = async (amount: number, referrer = null) => {
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const {chainId} = await provider.getNetwork()
        if (chainId == 137) {
            const value = ethers.utils.parseUnits((amount * nftPrice).toString(), 'ether');
            let mintSigner = provider.getSigner();
            // @ts-ignore
            let mintcontract = new ethers.Contract(smartContractAddress, squidFactoryABI, mintSigner);
            if (referrer != null) {
                // @ts-ignore
                mintcontract.mintNFTWithReferrer(amount, "0x" + atob(referrer), {
                    value: value,
                }).then(() => {
                    successHandler();
                    return true;

                }).catch((err: any) => {
                    errorHandler(err);
                    return false;
                });
            } else {
                mintcontract.mintNFT(amount, {
                    value: value,
                }).then(() => {
                    successHandler();
                    return true;

                }).catch((err: any) => {
                    errorHandler(err);
                    return false;
                });
            }

        }
        return false;
    }
    const mintHandler = async () => {
        let result;
        if (cookies.ref != null) {
            if (account == "0x" + atob(cookies.ref)) {
                result = await mintNFT(mintCount);
            } else {
                result = await mintNFT(mintCount, cookies.ref);
            }
        } else {
            result = await mintNFT(mintCount);
        }
    }
    const Completed = () => {
        return (
            <Container bgColor={'gray.800'} opacity={'82%'} p={10}>
                <Center><FormLabel fontSize={{base: '3xl', sm: '3xl', lg: '4xl'}} textColor={'orange.300'}><b>AMOUNT</b></FormLabel></Center>
                <NumberInput
                    my={5}
                    w="full"
                    max={2180}
                    min={1}
                    size="lg"
                    value={mintCount}
                    disabled={isMinting}
                    allowMouseWheel={true}
                    onChange={(val) =>
                        setMintCount(val as any)
                    }
                >
                    <NumberInputField max={2180}
                                      min={1} fontSize={{base: '2xl', sm: '2xl', lg: '3xl'}}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                </NumberInput>


                <Button size={'lg'} my={1} w="full" onClick={() => (mintHandler())}
                        disabled={isMinting} bgColor={'squid.100'} _hover={{
                    bg: 'squid.200',
                }} colorScheme="red" fontSize={'xl'}>
                    {isMinting ? "loading" : `MINT ${mintCount} NFT`}
                </Button>

                <Center>
                    <Text
                        my={4}
                        fontSize={{base: '4xl', sm: '3xl', lg: '4xl'}}
                        colorScheme="red">
                        TOTAL {(nftPrice * mintCount).toFixed(2)} MATIC
                    </Text>
                </Center>
            </Container>
        )
    }
    // @ts-ignore
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed || mintAvailable) {
            // Render a completed state
            setMintAvailable(true);
            return <Completed/>;
        } else {
            // Render a countdown

            return (
                <Text color={'gray.200'} fontSize={{base: '4xl', sm: '4xl', md: '6xl'}} bgColor={'gray.800'}
                      opacity={'75%'}>
                    <Center textColor={'orange.300'}>
                        WILL START ON <br/>
                        21 NOVEMBER 2021
                    </Center>
                    <span>{days}D {hours}H {minutes}M {seconds}S </span>


                </Text>
            )
        }
    };
    return (
        <section id={"home"}>
            <Box
                backgroundImage={bg}
                backgroundAttachment={'fixed'}
                backgroundPosition={'center'}
                backgroundSize={'cover'}
                h="100vh"
            >

                <Container maxW={'3xl'} fontSize={'lg'}>
                    <Stack
                        as={Box}
                        textAlign={'center'}
                        spacing={{base: 8, md: 14}}
                        py={{base: 20, md: 36}}>

                        <Heading
                            textAlign={'center'}
                            fontWeight={600}
                            fontSize={{base: '5xl', sm: '5xl', md: '6xl'}}
                            lineHeight={'110%'}>
                            <Text as={'span'} color={'squid.100'}>
                                MINT
                            </Text>
                        </Heading>

                        {mintAvailable ? (
                                <>
                                    <Completed/>
                                </>
                            ) :
                            (
                                <>
                                    <Countdown
                                        date={MINT_DATE}
                                        renderer={renderer}
                                    />
                                </>
                            )}

                    </Stack>
                </Container>
            </Box>
        </section>
    )
}