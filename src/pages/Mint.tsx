import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Center
} from '@chakra-ui/react';
import Countdown from 'react-countdown';
import bg from '../assets/images/bg101.jpg'

import * as React from "react";

// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';

export default function Mint() {
    const Completed = () => <span>You are good to go!</span>;

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
                        <GlitchText color1={'#fff'} color2={'#1A202C'}>
                            <Heading
                                textAlign={'center'}
                                fontWeight={600}
                                fontSize={{base: '5xl', sm: '5xl', md: '6xl'}}
                                lineHeight={'110%'}>
                                <Text as={'span'} color={'squid.100'}>
                                    MINT
                                </Text>
                            </Heading>
                        </GlitchText>
                        <Text color={'gray.200'} fontSize={{base: '4xl', sm: '4xl', md: '6xl'}}>
                            <Center>COMING SOON</Center>
                            <Countdown date={1636588800000}>
                                <Completed/>
                            </Countdown>
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </section>
    )
}