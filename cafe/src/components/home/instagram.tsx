import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";

const SCREEN_WIDTH = window.innerWidth;

export default function Instagram() {
    return (
        <Center w="100%" h="100vh" bgColor="whiteAlpha.200">
            <VStack>
                <Box mb="200px">
                    <HStack w="100%">
                        <Box
                            w={`${SCREEN_WIDTH * 0.15}px`}
                            border="1px solid white"
                        />
                        <Heading mx="20px">About us</Heading>
                        <Box
                            w={`${SCREEN_WIDTH * 0.15}px`}
                            border="1px solid white"
                        />
                    </HStack>
                </Box>
            </VStack>
        </Center>
    );
}
