import React from "react";
import {
    Box,
    BoxProps,
    Circle,
    Flex,
    useColorModeValue
} from "@chakra-ui/react";
import {FiCheckCircle} from "react-icons/fi";

export interface TimelineItemProps extends BoxProps {
    icon?: any;
    boxProps?: BoxProps;
    skipTrail?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> =
    ({
         icon = FiCheckCircle,
         boxProps = {},
         skipTrail = false,
         children,
         ...props
     }) => {
        const color = "gray.100";
        return (
            <Flex minH={20} {...props}>
                <Flex flexDir="column" alignItems="center" mr={4}
                      pos="relative">
                    <Circle
                        size={12}
                        bg={"gray.200"}
                        opacity={0.15}
                        sx={{}}
                    />
                    <Box
                        as={icon}
                        size="1.25rem"
                        color={color}
                        pos="absolute"
                        left="0.875rem"
                        top="0.875rem"
                    />
                    {!skipTrail && <Box w="1px" flex={1} bg={color} my={1}/>}
                </Flex>
                <Box pt={3} {...boxProps} fontSize={'lg'}>
                    {children}
                </Box>
            </Flex>
        );
    };