import {
    AbsoluteCenter,
    Box,
    Center,
    Divider,
    HStack,
    Heading,
    Text,
} from "@chakra-ui/react";

const SCREEN_WIDTH = window.innerWidth;

export default function Products() {
    return (
        <Center w="100%" h="100vh" bgColor="whiteAlpha.200">
            <Box>
                <HStack w="100%">
                    <Box
                        w={`${SCREEN_WIDTH * 0.15}px`}
                        border="1px solid white"
                    />
                    <Heading>Products</Heading>
                    <Box
                        w={`${SCREEN_WIDTH * 0.15}px`}
                        border="1px solid white"
                    />
                </HStack>
            </Box>
        </Center>
    );
}
