import {
    Box,
    Button,
    Flex,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text, Input, Center, useToast,
} from "@chakra-ui/react";
import {ExternalLinkIcon, CopyIcon} from "@chakra-ui/icons";
import {useEthers} from "@usedapp/core";
import Identicon from "./Identicon";
import React, {useState} from 'react';
// @ts-ignore
import {CopyToClipboard} from 'react-copy-to-clipboard';


type Props = {
    isOpen: any;
    onClose: any;
};

export default function AccountModal({isOpen, onClose}: Props) {
    const {account, deactivate} = useEthers();
    const [copied, setCopied] = useState(false);
    const toast = useToast()

    function handleDeactivateAccount() {
        deactivate();
        onClose();
    }


    // @ts-ignore
    let affiliateURL = "https://squidgame1nft.com"
    if (account) {
        affiliateURL = "https://squidgame1nft.com/?_a=" + btoa(account.slice(2, account.length));
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
            <ModalOverlay/>
            <ModalContent
                background="gray.900"
                border="1px"
                borderStyle="solid"
                borderColor="gray.700"
                borderRadius="3xl"
            >
                <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">
                    Account
                </ModalHeader>
                <ModalCloseButton
                    color="white"
                    fontSize="sm"
                    _hover={{
                        color: "whiteAlpha.700",
                    }}
                />
                <ModalBody pt={0} px={4}>
                    <Box
                        borderRadius="3xl"
                        border="1px"
                        borderStyle="solid"
                        borderColor="gray.600"
                        px={5}
                        pt={4}
                        pb={2}
                        mb={3}
                    >
                        <Flex justifyContent="space-between" alignItems="center" mb={3}>
                            <Text color="gray.400" fontSize="md">
                                Connected with MetaMask
                            </Text>
                            <Button
                                variant="outline"
                                size="sm"
                                borderColor="blue.800"
                                borderRadius="3xl"
                                color="blue.500"
                                fontSize="13px"
                                fontWeight="normal"
                                px={2}
                                height="26px"
                                _hover={{
                                    background: "none",
                                    borderColor: "blue.300",
                                    textDecoration: "underline",
                                }}
                                onClick={handleDeactivateAccount}
                            >
                                Logout
                            </Button>
                        </Flex>
                        <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
                            <Identicon/>
                            <Text
                                color="white"
                                fontSize="xl"
                                fontWeight="semibold"
                                ml="2"
                                lineHeight="1.1"
                            >
                                {account &&
                                `${account.slice(0, 6)}...${account.slice(
                                    account.length - 4,
                                    account.length
                                )}`}
                            </Text>
                        </Flex>
                        <Flex alignContent="center" mb={3}>
                            <Link
                                fontSize="sm"
                                display="flex"
                                alignItems="center"
                                href={`https://polygonscan.com/address/${account}`}
                                isExternal
                                color="gray.400"
                                _hover={{
                                    color: "whiteAlpha.800",
                                    textDecoration: "underline",
                                }}
                            >
                                <ExternalLinkIcon mr={1}/>
                                View on Explorer
                            </Link>
                        </Flex>
                    </Box>
                    <Box
                        borderRadius="3xl"
                        border="1px"
                        borderStyle="solid"
                        borderColor="gray.600"
                        px={5}
                        pt={5}
                        pb={2}
                        mb={3}
                    >
                        <Flex justifyContent="space-between" alignItems="center" mb={3}>
                            <Text color="gray.400" fontSize="md">
                                Your Affiliate URL
                            </Text>
                        </Flex>
                        <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
                            <Input id={'affiliateURL'} value={affiliateURL} readOnly={true}/>

                        </Flex>
                        <Flex alignContent="center" mb={3}>
                            <CopyToClipboard
                                text={affiliateURL}
                                onCopy={() => {
                                    toast({
                                        title: "Success!",
                                        description: "??? Link copied to clipboard!",
                                        status: "success",
                                        duration: 9000,
                                        isClosable: true,
                                        position: "top",
                                    })
                                    setCopied(true);
                                }}>


                                <Button
                                    variant="link"
                                    color="gray.400"
                                    fontWeight="normal"
                                    fontSize="sm"
                                    _hover={{
                                        textDecoration: "none",
                                        color: "whiteAlpha.800",
                                    }}
                                >
                                    <CopyIcon mr={1}/>
                                    Copy URL
                                </Button>

                            </CopyToClipboard>
                            {copied &&
							<Text color="green.400" fontSize="md" ml={20}>Copied.</Text>

                            }
                        </Flex>
                    </Box>
                </ModalBody>

                <ModalFooter
                    justifyContent="end"
                    background="gray.700"
                    borderBottomLeftRadius="3xl"
                    borderBottomRightRadius="3xl"
                    p={6}
                >
                    <Text
                        color="white"
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="md"
                    >
                        Earn 10% for each NFT purchased through your referral URL.
                    </Text>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
