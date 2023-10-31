import { Center, HStack, Text } from "@chakra-ui/react";

export default function Menus() {
    return (
        <HStack spacing="30px">
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, 0.7)",
                    transition: "all 0.2s linear",
                }}
            >
                <Text fontWeight="bold">ABOUT</Text>
            </Center>
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, 0.7)",
                    transition: "all 0.2s linear",
                }}
            >
                <Text fontWeight="bold">CAFES</Text>
            </Center>
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, 0.7)",
                    transition: "all 0.2s linear",
                }}
            >
                <Text fontWeight="bold">CONTACT</Text>
            </Center>
        </HStack>
    );
}
