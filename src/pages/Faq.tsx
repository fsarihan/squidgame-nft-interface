import * as React from "react";
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
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from "@chakra-ui/react";
import {
    Link as RDLink,
    // @ts-ignore
} from "react-router-dom";

import bg from "../assets/images/bg104.jpg";
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';

const Info = () => {
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
                                F.A.Q.
                            </Text>
                        </Heading>

                        <Text color={'gray.100'} fontSize={'xl'}>
                            Some frequently asked questions we have compiled for you
                        </Text>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What is NFT?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    NFT, or Non-Fungible Token, can be defined as a unique digital asset that contains an image, sound file, video or proof of the digital equivalent of a physical asset. Founded in Ethereum in 2017, NFTs have become one of the most popular topics in the cryptocurrency world in 2021. Today, NFTs are widely used for digital artworks, but there are also other uses, such as interactive game items and sports collectibles. Squid Game 1 NFT is a collection of artworks that you can have digitally. By owning an NFT, you can also have many future utilities. Join us to be part of a unique community!
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How is NFT different from other cryptocurrencies?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Non-Fungible Token means token that cannot be divided and cannot be reproduced from the same. Unlike cryptocurrencies like Bitcoin and Ether, which are fungible, NFTs are unique digital assets. To explain with an example, today you can buy and buy a Bitcoin or Ether in parts and exchange the same cryptocurrency in its own unit. However, NFT, which is a private digital asset, cannot be exchanged for any other token, as it has no analogues. Its intrinsic value is determined by its producer or investor.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How are NFTs produced?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    NFTs are produced according to the ERC-721 token standard prepared by Ethereum developers. There are platforms that make it possible to perform the transaction easily so that users do not get bogged down in the technical world of blockchain. All you need to generate NFT is a digital cryptocurrency wallet. After you upload the file you want to produce as NFT to the IPFS system via these platforms, you must determine the parameters of the NFT that cannot be changed. NFTs are produced by paying the transaction fee of the blockchain network after determining how many NFTs will be produced, the price, and how much share will be paid to you in the next sale. Upon completion of the transaction, the NFTs are transferred to your wallet and recorded on the entire blockchain where production is carried out.
                                </AccordionPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How do I get an NFT?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    There are also platforms where NFTs are exhibited and purchased. On these platforms, you can have the NFTs you like, as determined by the manufacturer, with the options of auction or direct purchase. Once the purchase is complete, NFT will transfer from the manufacturer's wallet to yours. If you wish, you can resell the NFTs you have purchased through the marketplace applications.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            Is NFT a type of investment?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    NFTs are different from other cryptocurrencies by their design, and their value is determined by the person or investor who produced the work rather than the order board. If we interpret the investment issue through digital artwork, it is not much different from investing in physical artwork. Similarly, the value of an asset you buy as a collector's item is determined by parameters such as how rare that asset is, age and cosmetics.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What impact will NFTs have?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    If we consider the current usage areas of NFTs, we can say that they firstly solve the intellectual property problems. While it is very easy to copy a work in the digital environment, NFT solves this problem by revealing who owns the rights to the work. Since they are a programmable digital asset, the shares of the artists from the next sale can also be encoded into the NFT. Thus, in the event of a sale, the relevant amount is automatically transferred to the artist's wallet. The digital nature of the works allows all types of users to purchase them from all over the world. As the customer base expands thanks to digitalization, the number of people who can access the work and want to invest increases and the demand increases, and as the demand increases, the price rises. As demand increases, supply also increases. Both more works and works at different price levels are coming to the market. This increases accessibility for investors and art lovers, and enables more works to be sold. The ecosystem is expanding.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How can I be sure of the authenticity of NFTs?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    In the crypto money ecosystem, the reputation of people is very important. Artists who produce NFT and want to put it up for sale go through the verified profile flow that NFT marketplace apps use to prove their work is genuine. If you have the wallet address of the respective artist, which is shared publicly for payment purposes, you will have a chance to confirm the originality of the work. In addition, by tracking NFT's movements on the blockchain tracking application, you can be sure of the authenticity of both the artist and his works.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            Where are the files inside the NFTs stored?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    NFTs contain proof of many file formats such as images, audio, short video and documents. Because these files are difficult and costly to store on the blockchain, they are stored on a distributed file storage protocol called IPFS. The uploaded files are encrypted and divided into small parts and shared to the drops on IPFS. The proof that the relevant file has been uploaded to IPFS is recorded on the blockchain with NFT.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            Which NFT sales are the biggest hits?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    If we talk about the most interesting sales of the last period; US artist Beeple (Mike Winkelmann) has sold a collage of his works for $69.4 million at an auction held by the auction house Christie's. Lebron James' slam dunk video NFT, which was sold through the NBA Top Shot app, found buyers for $77,000. While Twitter CEO Jack Dorsey's tweet was bought by a person of Turkish origin for 2.9 million dollars, Elon Musk auctioned his tweet with GIF and music as NFT. Recently, the tweet shared by Cüneyt Özdemir was 10 thousand dollars. sold.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What are the future NFT usage areas?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    As the experience with NFTs increases, we see that creative new business models are being built. First, the digitization, or tokenization, of physical assets can be applied to a wide range of industries. For example, a house designed in a 3D virtual world in America was sold for $500,000 last week. We also know that land sales are made as NFT in some games. Another area where NFTs will affect will be social media. In particular, metrics such as the number of followers, views and views that content producers monetize will not be able to be manipulated by central social media companies thanks to NFTs. The digitization of physical assets, on the other hand, seems to cause us to redesign many processes we have been accustomed to. In the future use of NFTs, we can imagine a scenario where governments produce their bonds as NFTs and trade them on a global scale. Frankly, we can say that the business models in the NFT world are limited by your imagination.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What is the cost for minting 1 NFT?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    177 MATIC PER NFT
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What networks will Squid Game NFT be on?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    on Polygon network.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How can I buy Squid Game 1 NFT?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    First of all, you need to have an Eth wallet. You can use various apps like Binance and Coinbase and create a wallet for yourself. You must have Matic in your wallet as Squid Game will use the 1 NFT POLYGON blockchain. Download the MetaMask extension to your computer: https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047 and then connect your wallet. On the day of the sale, you can visit our website and click the 'Mint' button and choose how many you want to buy, and complete the purchase via MetaMask. You can always reach us via Discord for your questions!
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What is On-Chain Generation?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Squid Game 1 NFT is completely randomly generated at the time of claim/burn and their rarity/appearance is not clear in advance. All 2180 items will be printed on the chain. These will include NFTs with low rarity, which will be awarded to losers in the game, and NFTs with high value and very rare, which will be awarded to winners in the game. More mystery, more excitement!
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What will the game be like?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Red light green light game will be played. Those who buy the normal Gen 1 NFT will be able to join the game. Those who want to participate in the game will send the NFT they have received to the game wallet. After participating in the game, if they win, they will receive a very rare and valuable nft, as well as a direct right to participate in the game in the second project. Losers will gain a worthless nft.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What will be the prize for the winners in the game?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Winners of the game will receive a rare and exclusive Gen 1 NFT. Also, if all Gen 1 NFTs are sold, 15% of the project revenue, which is approximately 26.16 ETH, will be distributed equally among all winners. On the other hand, the winners will gain the right to participate directly in the game in the Game 2 project.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How to get Affiliate share link?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    If you link to our site with your Metamask wallet, you can get this link from the affiliate link section.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            If we share this link, will we have any income?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Yes, you will earn 10% of the mint price.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How will we get affiliate income?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    If the NFT volunteers you share with enter our site from your sharing link and receive Gen 1 NFT, the commission amount will be automatically reflected in your MATIC wallet as per the smart contract. All you have to do is share as many links as you can and reach more people. In this project, we are all one, we are all partners.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How many characters will there be in total?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    There will be 2180 Gen 1 Characters in total.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            Will there be a continuation of the project?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Yes, there will be a continuation of the project. It will continue as Gen 1, Gen 2, Gen 3, Gen 4, Gen 5, Gen 6. Each project will be heard more and more valuable than the previous one.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            When will Game #2 start?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    The work of the Squid Game Gen 2 NFT project has already started, and the project will be launched in December with great surprises. Within this project, the rarer Gen 2 NFTs will be introduced to the market. Market launch prices will be higher than for Gen 1. More software and advertising budgets are allocated for this project than Project 1.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What is the difference between the characters Gen 1, Gen 2, Gen3, Gen 4, Gen 5, Gen 6?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Gen 2 characters will be more robotic than Gen 1. Gen 3, Gen 4, Gen 5, Gen 6 characters will become more and more robotic.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            Can there be outside attack on smart contracts?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    There is no outside interference with smart contracts. Since the system operates on the blockchain chain, even the software developers cannot intervene after the project is coded.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            Can sent invitations be sold?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Invitations sent are in NFT format. They can also be sold on any platform.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            Will those without an invitation be able to join the game?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Of course, those who are sent invitations will be more lucky because they will be informed about the game earlier. But anyone who wants Gen 1 NFTs will be able to buy it.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            Will the game be an invitation for two?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Of course
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            What will the NFT sales base price be in the next project?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Gen 2 NFT prices will be higher and will be announced before the project goes on sale.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: "squid.100", color: "white"}}>
                                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                                            How long will the game be open to participation?
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel opacity={'75%'} pb={4} fontSize={'lg'} color={'white'}
                                                bgColor={"gray.800"}>
                                    Game 1 project will be open to participation for 11 days. If there are unsold NFTs when the game is played, they will be burned.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <Text color={'white'}
                              bgColor={"gray.800"} fontSize={'xl'}>
                            If you have different questions, you can easily contact us via Discord.
                        </Text>
                    </Stack>

                </Container>
            </Box>
        </section>

    );
};

export default Info;