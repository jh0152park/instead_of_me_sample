import { HStack } from "@chakra-ui/react";
import Logo from "./logo";
import Menus from "./menus";
import Buttons from "./buttons";

export default function Header() {
    return (
        <HStack
            w="100%"
            h="100px"
            pt="30px"
            px="40px"
            position="fixed"
            top={0}
            justifyContent="space-between"
        >
            <Logo />
            <Menus />
            <Buttons />
        </HStack>
    );
}
