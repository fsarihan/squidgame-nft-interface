import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Center,
    Button,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper

} from '@chakra-ui/react';
import Countdown from 'react-countdown';
import bg from '../assets/images/21.jpg'

import {useEffect, useState, Component} from "react";

// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';
import {toast} from "react-toastify";

export default function Mint() {
    const [mintCount, setMintCount] = useState(1);
    const [isMinting, setMinting] = useState(false);
    const [mintAvailable, setMintAvailable] = useState(false);

    const Completed = () => {
        return (
            <>
                <Center><FormLabel fontSize={{base: '3xl', sm: '3xl', lg: '4xl'}}><b>AMOUNT</b></FormLabel></Center>
                <NumberInput
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
                    <NumberInputField fontSize={{base: '2xl', sm: '2xl', lg: '3xl'}} value={mintCount}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                </NumberInput>


                <Button size={'lg'} my={1} w="full" onClick={() => (console.log)}
                        disabled={isMinting} bgColor={'squid.100'} _hover={{
                    bg: 'squid.200',
                }} colorScheme="red" fontSize={'xl'}>
                    {isMinting ? "loading" : `MINT ${mintCount} NFT`}
                </Button>

                <Center>
                    <Text
                        my={4}
                        bgColor={'gray.800'}
                        opacity={'90%'}
                        fontSize={{base: '4xl', sm: '3xl', lg: '4xl'}}
                        colorScheme="red">TOTAL {(177 * mintCount).toFixed(0)} MATIC </Text>
                </Center>
            </>
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
                      opacity={'70%'}>
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
                        {/*1637527980000*/}
                        <Countdown
                            date={Date.now() + 3000}
                            renderer={renderer}
                        />
                    </Stack>
                </Container>
            </Box>
        </section>
    )
}