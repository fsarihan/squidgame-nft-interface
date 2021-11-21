import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Center, AvatarGroup, Avatar, Image
} from '@chakra-ui/react';
import Countdown from 'react-countdown';
import bg from '../assets/images/game1.jpg'

import * as React from "react";

// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';
import gameGif from "../assets/images/game.gif";

export default function Game() {


    return (
        <section id={"home"}>
            <Box
                backgroundImage={bg}
                backgroundAttachment={'fixed'}
                backgroundPosition={'center'}
                backgroundSize={'cover'}


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

                            {/*<Text color={'blue.400'} fontSize={{base: '4xl', sm: '4xl', md: '6xl'}} mt={50}*/}
                            {/*      justifyContent={'center'} alignContent={'center'} textAlign={'center'}*/}
                            {/*      justifyItems={'center'}>*/}
                            {/*    COMING SOON*/}
                            {/*</Text>*/}

                        </Heading>
                        <Text color={'gray.200'} fontSize={{base: 'xl', sm: 'xl', md: 'xl'}} bgColor={'gray.800'}
                              opacity={'90%'}>
                            <Center color={'orange.300'} fontSize={{base: '4xl', sm: '4xl', md: '6xl'}}>
                                Participation
                            </Center>
                            The game will start on <b
                            color={'squid.100'}><u>November 24</u></b>! NFT holders will be able to participate in the game for 11 days after the mint date. The game will be played in one go and participation will not be possible afterwards.

                        </Text>
                        <Text color={'gray.200'} fontSize={{base: 'xl', sm: 'xl', md: 'xl'}} bgColor={'gray.800'}
                              opacity={'90%'}>
                            <Center color={'orange.300'} fontSize={{base: '4xl', sm: '4xl', md: '6xl'}}>
                                Game #1
                            </Center>
                            <Center my={2}>
                                <Image
                                    borderRadius="full"
                                    boxSize="250px"
                                    src={gameGif}
                                    alt="Squid Game NFT Gif"
                                />
                            </Center>
                            The first game is a browser game inspired by red light, green light game. Each player has an equal and 30% chance of winning. The game will be played on this page, you will simply see the nfts you have minted or purchased on the interface. You will choose one or more and confirm the transfer on the metamask after pressing the join button. Then your nfts will be transferred to our game contract and your participation will be approved. You will be able to observe the status of the nfts you have joined from the game page. After the game is played and the results are clear, you will be able to collect your rewards on this page.
                        </Text>
                        <Text color={'gray.200'} fontSize={{base: 'xl', sm: 'xl', md: 'xl'}} bgColor={'gray.800'}
                              opacity={'90%'}>
                            <Center color={'orange.300'} fontSize={{base: '4xl', sm: '4xl', md: '6xl'}}>
                                Prize
                            </Center>
                            Players who win the game will get back the nft they entered the game, they will get the HIGHLY VALUABLE IMPROVED 456 or PUPPET NFT reward. Also, if all nfts are sold, the prize pool will be approximately 120,000 USD. This prize will be distributed equally to the winning players. Players who lose the game will receive a damaged, injured looking new NFT. However, the NFT they entered in the game will be burned permanently.

                            <Center mt={2} color={'squid.100'} fontSize={{base: '2xl', sm: '2xl', md: 'xl'}}>
                                Improved NFTs
                            </Center>
                            <Center>
                                <AvatarGroup size="xl" max={3} mt={2}>
                                    <Avatar name="Puppet Girl#1"
                                            src="https://api.squidgame1nft.com/upgraded/images/325.png"/>
                                    <Avatar name="Player 456"
                                            src="https://api.squidgame1nft.com/upgraded/images/326.png"/>
                                    <Avatar name="Puppet #2"
                                            src="https://api.squidgame1nft.com/upgraded/images/327.png"/>
                                </AvatarGroup>
                            </Center>
                            <Center mt={5} color={'squid.100'} fontSize={{base: '2xl', sm: '2xl', md: 'xl'}}>
                                Injured NFTs
                            </Center>
                            <Center>
                                <AvatarGroup size="xl" max={3} mt={2}>
                                    <Avatar name="Black Woman"
                                            src="https://api.squidgame1nft.com/downgraded/images/302.png"/>
                                    <Avatar name="Black Man"
                                            src="https://api.squidgame1nft.com/downgraded/images/322.png"/>
                                    <Avatar name="White Woman"
                                            src="https://api.squidgame1nft.com/downgraded/images/177.png"/>
                                </AvatarGroup>
                            </Center>
                            <br/>

                            After the game is played, all participants will be able to see the winning status and the rewards they have won, and will "collect" their prize to the metamask account on the same page.


                        </Text>
                        <Text color={'gray.200'} fontSize={{base: 'xl', sm: 'xl', md: 'xl'}} bgColor={'gray.800'}
                              opacity={'90%'}>
                            <Center color={'orange.300'} fontSize={{base: '4xl', sm: '4xl', md: '6xl'}}>
                                Transparency
                            </Center>
                            This game is an open source game written in solidity and hosted on the blockchain. Anyone who wants can examine the source code of the game. The game's winning algorithm is completely fair and verifiable.

                        </Text>


                    </Stack>

                </Container>
            </Box>
        </section>
    )
}