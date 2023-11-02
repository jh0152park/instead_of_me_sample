import { HStack } from "@chakra-ui/react";
import Logo from "./header/logo";

export default function Header() {
    return (
        <HStack
            w="100%"
            h="100px"
            bgColor="white"
            position="fixed"
            top={0}
            alignItems="center"
            justifyContent="space-between"
            px="90px"
        >
            <Logo />
        </HStack>
    );
}
