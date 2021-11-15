import * as React from "react";
import FullOption from '../components/PieChart';
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
    Button
} from "@chakra-ui/react";
import {
    Link as RDLink,
    // @ts-ignore
} from "react-router-dom";

import bg from "../assets/images/bg104.jpg";
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';
import {useState} from "react";

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
                            Within this project, a game of red light and green light will be played. Anyone who buys Gen1 NFTs will be able to participate in the game. Game details will be shared on the website and social media platforms.
                            <br/>
                            Participation is optional and those who want to participate must upload the NFTs they have purchased to the game.
                            <br/>
                            <br/>
                            Much rarer and valuable NFTs for those who pass the game; For example, rare NFTs belonging to Player 456 and Puppet Girl will be awarded. In addition, provided that all Gen 1 NFTs are sold, after the sales are over, 15% of the total revenue of the project will be distributed equally as a big bonus to the users who participate in the game and win. In addition, users who win the game will have the right to participate directly in the Squid Game 2 NFT game and will benefit from the prizes that will be given in other projects.
                            <br/>
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