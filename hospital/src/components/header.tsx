import { Box, Center, Text } from "@chakra-ui/react";
import Logo from "./header/logo";
import { HeaderTab } from "./header/header_tab";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [hideHeader, setHideHeader] = useState(0);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 200) {
            setHideHeader(-100);
        } else {
            setHideHeader(0);
        }
    });
    return (
        <>
            <Box
                zIndex="99"
                w="100%"
                position="fixed"
                top="0"
                backgroundColor="white"
                borderBottom="1px"
                borderStyle="solid"
                borderColor="#c1c1c1"
            >
                <Center h="90px" mt={hideHeader} transition=" 0.3s">
                    <Logo text="대한민국치과"></Logo>
                </Center>
                <HeaderTab hideHeader={hideHeader}></HeaderTab>
            </Box>
        </>
    );
}
