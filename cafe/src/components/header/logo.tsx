import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { go_to_top } from "../../utils/util";

export default function Logo() {
    return (
        <Center
            _hover={{
                cursor: "pointer",
                color: "rgba(0, 0, 0, 0.7)",
                transition: "all 0.2s linear",
            }}
            onClick={() => {
                go_to_top(0);
            }}
        >
            <VStack h="100%" spacing={0}>
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
