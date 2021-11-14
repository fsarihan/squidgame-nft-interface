import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Center
} from '@chakra-ui/react';
import Countdown from 'react-countdown';
import bg from '../assets/images/game1.jpg'

import * as React from "react";

// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';

export default function Game() {


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
                                GAME #1
                            </Text>

                            <Text color={'blue.400'} fontSize={{base: '4xl', sm: '4xl', md: '6xl'}} mt={50}
                                  justifyContent={'center'} alignContent={'center'} textAlign={'center'}
                                  justifyItems={'center'}>
                                COMING SOON
                            </Text>

                        </Heading>


                    </Stack>

                </Container>
            </Box>
        </section>
    )
}