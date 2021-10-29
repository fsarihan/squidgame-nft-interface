import {ReactNode} from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    Link,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Image,
    useDisclosure,
    Stack,
} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

import {
    Link as RDLink,
    // @ts-ignore
} from "react-router-dom";

import logo from '../assets/images/logo.png'
import HeaderWallet from "./HeaderWallet";

const Links =
    [
        {text: 'Home', link: ''},
        {text: 'Info', link: 'info'},
        {text: 'Roadmap', link: 'roadmap'},
        {text: 'F.A.Q.', link: 'faq'},
        {text: 'Mint', link: 'mint'},
        {text: 'Game', link: 'game'},

    ];

//


export default function Navbar() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box bg={'gray.900'} px={4}
                /*@ts-ignore*/
                 sx={{position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', "z-index": 999}}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        colorScheme={"gray"}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <RDLink to={'/'} exact>
                            <Image src={logo} w="100px"/>
                        </RDLink>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>

                            {Links.map((link) => (
                                <RDLink to={link.link} exact>
                                    <Link
                                        px={2}
                                        py={1}
                                        rounded={'md'}
                                        _active={{
                                            textDecoration: 'none',
                                            bg: 'squid.100',
                                        }}
                                        _hover={{
                                            textDecoration: 'none',
                                            bg: 'gray.700',
                                        }}

                                    >
                                        <b>{link.text}</b>
                                    </Link>
                                </RDLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <HeaderWallet/>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={6}>
                            {Links.map((link) => (
                                <RDLink to={link.link} exact>
                                    <Link
                                        px={2}
                                        py={1}
                                        rounded={'md'}
                                        _active={{
                                            textDecoration: 'none',
                                            bg: 'squid.100',
                                        }}
                                        _hover={{
                                            textDecoration: 'none',
                                            bg: 'gray.700',
                                        }}

                                    >
                                        <b>{link.text}</b>
                                    </Link>
                                </RDLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}