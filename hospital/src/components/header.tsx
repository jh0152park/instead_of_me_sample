import { Box, Center } from "@chakra-ui/react";
import Logo from "./header/logo";
import { HeaderTab } from "./header/header_tab";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [hideHeader, setHideHeader] = useState(0);
    const [tabHeight, setTabHeight] = useState("60px");
    useMotionValueEvent(scrollY, "change", (y) => {
        console.log(y);
        if (y >= 200) {
            setHideHeader(-100);
            setTabHeight("90px");
        } else {
            setHideHeader(0);
            setTabHeight("60px");
        }
    });
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
                <Center mt={hideHeader} transition=" 0.3s">
                    <Logo />
                </Center>
                <HeaderTab></HeaderTab>
            </Box>
        </>
    );
}
