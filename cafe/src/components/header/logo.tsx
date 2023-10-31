import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Center>
            <VStack w="250px" h="100%" spacing={0}>
                <Heading h="70%" fontSize="25px">
                    KIMBYEONGSEOP
                </Heading>
                <Text h="30%" fontSize="10px">
                    COFFEE ROASTERS
                </Text>
            </VStack>
        </Center>
    );
}
