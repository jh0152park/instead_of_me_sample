import { HStack } from "@chakra-ui/react";
import Logo from "./logo";
import Menus from "./menus";
import Buttons from "./buttons";

export default function Header() {
    return (
        <HStack
            w="100%"
            h="70px"
            pt="10px"
            position="fixed"
            top={0}
            justifyContent="center"
            zIndex={99}
        >
            <Logo />
            <Menus />
            <Buttons />
        </HStack>
    );
}
