import { HStack } from "@chakra-ui/react";
import Logo from "./logo";

export default function Header() {
    return (
        <HStack w="100%" h="100px" pt="30px" px="20px" position="fixed" top={0}>
            <Logo />
        </HStack>
    );
}
