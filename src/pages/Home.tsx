import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    createIcon,
} from '@chakra-ui/react';
import {
    Link as RDLink,
    // @ts-ignore
} from "react-router-dom";
import bg from '../assets/images/a11.jpg'

import * as React from "react";
import "@fontsource/caveat";
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';
import SideAnimation from "../components/SideAnimation";

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
            fill="currentColor"
        />
    ),
});
const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
        'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export default function Home() {

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
                            fontWeight={600}
                            fontSize={{base: '5xl', sm: '5xl', md: '6xl'}}
                            lineHeight={'110%'}>
                            <GlitchText color1={'#fe3477'} color2={'#1A202C'}> SQUID GAME NFT </GlitchText>
                            <Text as={'span'} color={'squid.100'}>
                                GAME #1
                            </Text>
                        </Heading>

                        <Text color={'gray.100'} fontSize={'xl'}>
                            Are you ready for a different and radical NFT experience on the POLYGON MATIC network! You can get more details from our website or social networks.
                        </Text>
                        <Stack
                            direction={'column'}
                            spacing={3}
                            align={'center'}
                            alignSelf={'center'}
                            position={'relative'}>
                            <RDLink to={'/mint'}>
                                <Button
                                    colorScheme={'red'}
                                    size={'lg'}
                                    bg={'squid.100'}
                                    rounded={'full'}
                                    px={6}
                                    _hover={{
                                        bg: 'squid.200',
                                    }}>
                                    MINT NFT
                                </Button>
                            </RDLink>

                            <RDLink to={'/info'}>
                                <Button variant={'link'} mt={25} color={'gray.100'}
                                        size={'6xl'}
                                        fontSize={'2xl'}>
                                    Learn more
                                </Button>
                            </RDLink>

                            <Box>
                                <Icon
                                    as={Arrow}
                                    color={'gray.300'}
                                    w={71}
                                    position={'absolute'}
                                    right={-71}
                                    top={'10px'}
                                />
                                <Text
                                    fontSize={'lg'}
                                    fontFamily={'Caveat'}
                                    position={'absolute'}
                                    right={'-125px'}
                                    top={'-15px'}
                                    transform={'rotate(10deg)'}>
                                    <b>177</b> Matic per NFT
                                </Text>
                            </Box>
                            <SideAnimation/>
                        </Stack>

                    </Stack>
                </Container>
            </Box>
        </section>
    )
}