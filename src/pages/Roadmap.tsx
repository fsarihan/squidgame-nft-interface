import * as React from "react";
import {
    FiEdit2,
    FiClock,
    FiCheck,
    FiActivity
} from "react-icons/fi";
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
import {TimelineItem} from "../components/StoryTimeLine";
import bg from "../assets/images/bg104.jpg";
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';


const Roadmap = () => {
    return (

        <section id={'roadmap'}>

            <Box
                backgroundImage={bg}
                backgroundAttachment={'fixed'}
                backgroundPosition={'center'}
                backgroundSize={'cover'}


            >

                <Container maxW={'4xl'} fontSize={'lg'}>

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
                                ROADMAP
                            </Text>
                        </Heading>

                        <Text color={'white'} textAlign={'center'}>
                            This roadmap outlines is summarize our goals and where we want to take SQUID GAME NFT
                            <p>
                                We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!
                            </p>
                        </Text>
                        <Box>
                            <Center mt={20} fontSize={'4xl'}>MAY 2021</Center>
                            <Divider/>
                            <TimelineItem mt={10} icon={FiCheck}>
                                NFT technologies were examined and it was decided that our company would take part in this sector as well.
                            </TimelineItem>
                            <TimelineItem icon={FiCheck} skipTrail>
                                In this scope, NFT infrastructure works have been started.
                            </TimelineItem>
                            <Center mt={10} fontSize={'4xl'}>OCT 2021</Center>
                            <Divider/>
                            <TimelineItem mt={10} icon={FiEdit2}>
                                Squid Game NFT drafting.
                            </TimelineItem>
                            <TimelineItem icon={FiActivity}>
                                Beginning of the unique design phase of Squid Game characters.
                            </TimelineItem>
                            <TimelineItem icon={FiActivity}>
                                Completing the infrastructure works of the project and starting the NFT part on blockchain.
                            </TimelineItem>
                            <TimelineItem icon={FiActivity} skipTrail>
                                Initiating brand and advertising activities related to the project worldwide.
                            </TimelineItem>

                            <Center mt={10} fontSize={'4xl'}>NOV 2021</Center>
                            <Divider/>
                            <TimelineItem mt={10} icon={FiActivity}>
                                As part of the project, sending NFT invitations to collectors over the Blockchain chain.
                            </TimelineItem>
                            <TimelineItem icon={FiActivity}>
                                The release of the Squid Game 1 NFT project. Within the scope of the project, Squid Game Gen 1 NFTs will be released.
                            </TimelineItem>
                            <TimelineItem icon={FiActivity}>
                                Before the start of the project, an invitation to participate as NFT will be sent to the wallets of the users. These are invitations that are bought and sold and it is obvious that they will gain value in the future.
                            </TimelineItem>

                            <TimelineItem icon={FiActivity}>
                                Within this project, a game of red light and green light will be played. Anyone who buys Gen1 NFTs will be able to participate in the game. Game details will be shared on the website and social media platforms.
                            </TimelineItem>

                            <TimelineItem icon={FiActivity} skipTrail>
                                Initiation of software works for our NFT marketplace by our Software Team. In order for our projects to be showcased on our own platforms, our software team will start our stock market software activities. The name and operation of the Exchange will be announced in time.
                            </TimelineItem>

                            <Center mt={10} fontSize={'4xl'}>DEC 2021</Center>
                            <Divider/>
                            <TimelineItem mt={10} skipTrail icon={FiClock}>
                                The work of the Squid Game 2 NFT project has already started, and the project will be launched in December with great surprises. Within this project, the rarer Gen 2 NFTs will be introduced to the market. Market launch prices will be higher than for Gen 1. More software and advertising budgets are allocated for this project than project 1.
                            </TimelineItem>
                            <Center mt={10} fontSize={'4xl'}>JAN 2022</Center>
                            <Divider/>
                            <TimelineItem mt={10} skipTrail icon={FiClock}>
                                The Squid Game 3 NFT project will go live in January 2022 and Gen 3 NFTs will be released. Market launch prices will be higher than Gen 2. More software and advertising budgets are allocated for this project than project 2.
                            </TimelineItem>
                            <Center mt={10} fontSize={'4xl'}>FEB 2022</Center>
                            <Divider/>
                            <TimelineItem mt={10} skipTrail icon={FiClock}>
                                Gen 1 and Gen 2 NFTs are worth a minimum of 2 ETH through sustainable advertising and branding.
                            </TimelineItem>
                            <Center mt={10} fontSize={'4xl'}>MAR 2022</Center>
                            <Divider/>
                            <TimelineItem mt={10} skipTrail icon={FiClock}>
                                The Squid Game 4 NFT project will go live in March 2022 and Gen 4 NFTs will be released. Release prices will be higher than Gen 3. More software and advertising budgets are allocated for this project than project 3.
                            </TimelineItem>
                            <Center mt={10} fontSize={'4xl'}>APR 2022</Center>
                            <Divider/>
                            <TimelineItem mt={10} skipTrail icon={FiClock}>
                                The Squid Game 5 NFT project will go live in April and Gen 5 NFTs will be released. Release prices will be higher than Gen 4. More software and advertising budgets are allocated for this project than project 4.
                            </TimelineItem>
                            <Center mt={10} fontSize={'4xl'}>MAY 2022</Center>
                            <Divider/>
                            <TimelineItem mt={10} skipTrail icon={FiClock}>
                                Starting to progress through becoming a worldwide brand by launching the NFT market place.
                            </TimelineItem>
                            <Center mt={10} fontSize={'4xl'}>JUN 2022</Center>
                            <Divider/>
                            <TimelineItem mt={10} icon={FiClock}>
                                The Squid Game 6 NFT project will go live in June and Gen 6 NFTs will be released. Release prices will be higher than Gen 5. More than project 5 software and advertising budgets are allocated for this project.
                            </TimelineItem>
                            <TimelineItem mb={50} skipTrail icon={FiCheck}>
                                Squid Game NFT values reach a minimum of 5 ETH.
                            </TimelineItem>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </section>

    );
};

export default Roadmap;