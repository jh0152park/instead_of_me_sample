import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import Logo from "./header/logo";
import { HeaderTab } from "./header/header_tab";

export default function Header() {
    return (
        <>
            <Box w="100%" h="100px" position="fixed" top="0">
                <Center>
                    <Center>
                        <Logo />
                    </Center>
                </Center>
                <HeaderTab></HeaderTab>
            </Box>
        </>
    );
}
