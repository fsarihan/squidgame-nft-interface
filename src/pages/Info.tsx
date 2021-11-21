import * as React from "react";
import FullOption from '../components/PieChart';
// @ts-ignore
import LazyLoad from 'react-lazyload';
import {
    VStack,
    Flex,
    Box,
    Link,
    Text,
    LinkProps,
    Center,
    Divider,
    Container,
    Stack,
    Heading,
    Image,
    Button
} from "@chakra-ui/react";
import ChakraCarousel from "../components/ChakraCarousel";
import {
    Link as RDLink,
    // @ts-ignore
} from "react-router-dom";

import bg from "../assets/images/bg104.jpg";

import w1 from "../assets/images/examples/1.webp";
import w2 from "../assets/images/examples/2.webp";
import w3 from "../assets/images/examples/3.webp";
import w4 from "../assets/images/examples/4.webp";
import w5 from "../assets/images/examples/5.webp";
import w6 from "../assets/images/examples/6.webp";
import w7 from "../assets/images/examples/7.webp";
import w8 from "../assets/images/examples/8.webp";
import w9 from "../assets/images/examples/9.webp";
import w10 from "../assets/images/examples/10.webp";
import w11 from "../assets/images/examples/11.webp";
import w12 from "../assets/images/examples/12.webp";
import w13 from "../assets/images/examples/13.webp";
import w14 from "../assets/images/examples/14.webp";
import w15 from "../assets/images/examples/15.webp";
import w16 from "../assets/images/examples/16.webp";
import w17 from "../assets/images/examples/17.webp";
import w18 from "../assets/images/examples/18.webp";
import w19 from "../assets/images/examples/19.webp";
import w20 from "../assets/images/examples/20.webp";
import w21 from "../assets/images/examples/21.webp";
import w22 from "../assets/images/examples/22.webp";
import w23 from "../assets/images/examples/23.webp";
import w24 from "../assets/images/examples/24.webp";
import w25 from "../assets/images/examples/25.webp";
import w26 from "../assets/images/examples/26.webp";
import w27 from "../assets/images/examples/27.webp";
import w28 from "../assets/images/examples/28.webp";
import w29 from "../assets/images/examples/29.webp";
import w30 from "../assets/images/examples/30.webp";
import w31 from "../assets/images/examples/31.webp";
import w32 from "../assets/images/examples/32.webp";
import w33 from "../assets/images/examples/33.webp";
import w34 from "../assets/images/examples/34.webp";
import w35 from "../assets/images/examples/35.webp";


import {useState} from "react";

function shuffle(array: any) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

let data: any = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33, w34, w35];
shuffle(data);
const dataMock = [
    {
        color: "#9C4221",
        title: "Affiliate",
        value: 10,
    },
    {
        color: "#9B2C2C",
        title: "Game#1 Prize",
        value: 15,
    },
    {
        color: "#285E61",
        title: "Development",
        value: 10,
    },
    {
        color: "#2C5282",
        title: "Advertising",
        value: 25,
    },
    {
        color: "#322659",
        title: "CREW",
        value: 40,
    }
];
const Info = () => {
    const listItems = dataMock.map((data) =>
        <Text color={'gray.200'} fontSize={'xl'} bgColor={data.color}>
            &nbsp; &nbsp; {data.title} {data.value}% &nbsp;&nbsp;
        </Text>
    );
    return (

        <section id={'roadmap'}>
            <Box
                backgroundImage={bg}
                backgroundAttachment={'fixed'}
                backgroundPosition={'center'}
                backgroundSize={'cover'}


            >

                <Container maxW={'6xl'} fontSize={'lg'}>
                    <Stack
                        as={Box}

                        spacing={{base: 8, md: 14}}
                        py={{base: 20, md: 36}}>

                        <Heading
                            textAlign={'center'}
                            fontWeight={600}
                            fontSize={{base: '5xl', sm: '5xl', md: '6xl'}}
                            lineHeight={'110%'}>
                            <Text as={'span'} color={'squid.100'}>
                                INFO
                            </Text>
                        </Heading>

                        <Text color={'gray.100'} fontSize={'xl'}>
                            Within the scope of the project, a total of 2180 NFTs were designed. It will be available to collectors on 21/11/2021. The NFTs in this project will be referred to as Gen 1.
                            <br/>
                            <br/>
                            Within this project, a game of red light and green light will be played. Anyone who buys Gen1 NFTs will be able to participate in the game. Game details will be shared on the website and social media platforms    &nbsp;
                            <RDLink
                                to={'/game'}>
                                <Button variant={'link'} color={'squid.100'}>
                                    Check The Game#1
                                </Button>
                            </RDLink>
                            .
                            <br/>
                            Participation is optional and those who want to participate must upload the NFTs they have purchased to the game.
                            <br/>
                            <br/>
                            Much rarer and valuable NFTs for those who pass the game; For example, rare NFTs belonging to Player 456 and Puppet Girl will be awarded. In addition, provided that all Gen 1 NFTs are sold, after the sales are over, 15% of the total revenue of the project will be distributed equally as a big bonus to the users who participate in the game and win. In addition, users who win the game will have the right to participate directly in the Squid Game 2 NFT game and will benefit from the prizes that will be given in other projects.
                            <br/>
                            <ChakraCarousel gap={32}>
                                {/*@ts-ignore*/}
                                {data.map((post, index) => (
                                    <Flex
                                        key={index}
                                        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                                        justifyContent="space-between"
                                        flexDirection="column"
                                        overflow="hidden"
                                        color="gray.300"
                                        bg="base.d100"
                                        rounded={5}
                                        flex={1}
                                        p={5}
                                    >
                                        <VStack mb={6}>
                                            <Image
                                                draggable="false"
                                                _hover={{
                                                    transform: 'scale(1.07)',
                                                    transition: 'all 0.5s'
                                                }}
                                                borderRadius="25"
                                                boxSize="150px"
                                                alt={'Squid Game NFT ' + index}
                                                objectFit={'cover'}
                                                align={'center'}
                                                w={'350'}
                                                h={'350'}
                                                src={post}
                                            />
                                        </VStack>
                                    </Flex>
                                ))}
                            </ChakraCarousel>
                            Losers will be given lower value dead NFTs. Once you have entered the game, there is no exit until the game is over.
                            <br/>
                            <br/>
                            Within the bonus program, it is necessary to register in the system with a Metamask wallet. Registration to the system is free. A reference link will be given to those who register. Participants will receive a 10% loyalty bonus for each Gen 1 NFT they contribute to the sale.
                            <br/>
                            <br/>
                            <Container maxW={'lg'} maxH={'4xl'}>
                                <FullOption data={dataMock}/>

                                {listItems}
                            </Container>


                            <br/>
                            Approximately 50% of the project revenue is allocated to software, bonus and advertising expenses, making it a unique NFT project in this respect.
                        </Text>


                        <Box>
                            <Center mt={20} fontSize={'4xl'} textAlign={'center'}>ABOUT US</Center>
                            <Divider/>
                            <Text mt={30} color={'gray.100'} fontSize={'xl'}>
                                Our company met with Blockchain technology in 2015. Due to the necessity in the crypto industry, our company took a sharp decision and started working on cryptocurrency exchange and coin software. At the same time, our own crypto money exchange and software works continue at full speed. In addition, we continue to work on the Arbitrage Robot and Trade Robot between the exchanges. We are planning to create our own Blockchain in 2022. We aim at to establish a fast and low-weight network. Our company, which also shows up in the field of advertising and graphics, continues its activities at full speed in all Blockchain and NFT technologies.
                                <br/>
                                <br/>
                                In order not to break the equality due to the sensitivity of the project, we decided to mention our company name and project names in the future. We are in all Blockchain technologies. Be with us and continue to win by enjoying this
                            </Text>
                        </Box>
                        <br/> <br/>
                        <Center>
                            <RDLink to={'/roadmap'}>
                                <Button variant={'link'} color={'squid.100'} colorScheme={'pink'} size={'lg'}
                                        textShadow={"1.5px 1.5px #000"}
                                        fontSize={'lg'}>
                                    Check Our Road Map
                                </Button>
                            </RDLink>
                        </Center>
                        <Center>
                            <RDLink to={'/faq'}>
                                <Button variant={'link'} color={'squid.100'} colorScheme={'pink'} size={'lg'}
                                        textShadow={"1.5px 1.5px #000"}
                                        fontSize={'lg'}>
                                    Check Frequently Asked Questions
                                </Button>
                            </RDLink>
                        </Center>
                    </Stack>
                </Container>
            </Box>
        </section>

    );
};

export default Info;