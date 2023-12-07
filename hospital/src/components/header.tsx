import { Box, Center } from "@chakra-ui/react";
import Logo from "./header/logo";
import { HeaderTab } from "./header/header_tab";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Header() {
    return (
        <>
            <Box
                w="100%"
                position="fixed"
                top="0"
                backgroundColor="white"
                borderBottom="1px"
                borderStyle="solid"
                borderColor="#c1c1c1"
            >
                <Center>
                    <Logo />
                </Center>
                <HeaderTab></HeaderTab>
            </Box>
        </>
    );
}
