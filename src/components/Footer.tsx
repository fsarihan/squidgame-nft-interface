import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    VisuallyHidden,
} from '@chakra-ui/react';
import {FaDiscord, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import {ReactNode} from 'react';

const SocialButton =
    ({
         children,
         label,
         href,
         target,
     }: {
        children: ReactNode;
        label: string;
        href: string;
        target: string;
    }) => {
        return (
            <chakra.button
                bg={'whiteAlpha.100'}
                rounded={'full'}
                w={8}
                h={8}
                cursor={'pointer'}
                as={'a'}
                href={href}
                target={target}
                display={'inline-flex'}
                alignItems={'center'}
                justifyContent={'center'}
                transition={'background 0.3s ease'}
                _hover={{
                    bg: 'blackAlpha.200',
                }}>
                <VisuallyHidden>{label}</VisuallyHidden>
                {children}
            </chakra.button>
        );
    };

export default function SmallWithSocial() {
    return (
        <Box
            bg={'gray.900'}
            color={'gray.200'}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{base: 'column', md: 'row'}}
                spacing={4}
                justify={{base: 'center', md: 'space-between'}}
                align={{base: 'center', md: 'center'}}>
                <Text>© 2021 squidgame1nft.com. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/squidgame1nft/'} target={'_blank'}>
                        <FaTwitter/>
                    </SocialButton>
                    <SocialButton label={'Discord'} href={'https://discord.gg/JsvkrwRc6h'} target={'_blank'}>
                        <FaDiscord/>
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://instagram.com/squidgame1nft/'} target={'_blank'}>
                        <FaInstagram/>
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}