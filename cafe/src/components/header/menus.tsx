import { Center, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Menus() {
    const navigate = useNavigate();

    return (
        <HStack spacing="30px">
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s linear",
                }}
                onClick={() => {
                    navigate("/about");
                }}
            >
                <Text fontWeight="bold">ABOUT</Text>
            </Center>
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s linear",
                }}
            >
                <Text fontWeight="bold">CAFES</Text>
            </Center>
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s linear",
                }}
            >
                <Text fontWeight="bold">CONTACT</Text>
            </Center>
        </HStack>
    );
}
