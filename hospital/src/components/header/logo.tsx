import { Center, Text, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { go_to_top } from "../../utils/util";

export default function Logo() {
    const navigate = useNavigate();
    const location = useLocation();

    function onLogoClicked() {
        if (location.pathname === "/") go_to_top(0);
        else navigate("/");
    }

    return (
        <Center
            _hover={{
                cursor: "pointer",
            }}
            onClick={onLogoClicked}
            position="absolute"
            left="90px"
        >
            <VStack>
                <Text fontSize="20px" fontWeight="bold" color="teal">
                    대한민국 치과
                </Text>
                <Text fontSize="15px">치과교정과치과의원</Text>
            </VStack>
        </Center>
    );
}
