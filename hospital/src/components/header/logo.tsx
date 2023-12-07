import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { go_to_top } from "../../utils/util";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Logo() {
    const navigate = useNavigate();
    const location = useLocation();

    const { scrollY } = useScroll();
    const [hideHeader, setHideHeader] = useState(0);
    useMotionValueEvent(scrollY, "change", (y) => {
        console.log(y);
        if (y >= 200) setHideHeader(-100);
        else setHideHeader(0);
    });

    function onLogoClicked() {
        if (location.pathname === "/") go_to_top(0);
        else navigate("/");
    }

    return (
        <Center
            mt={hideHeader}
            transition="margin 0.3s linear"
            _hover={{
                cursor: "pointer",
            }}
            onClick={onLogoClicked}
            h="90px"
        >
            <Box>
                <Image
                    w="60px"
                    h="60px"
                    src={require("../../resource/images/태극기.png")}
                ></Image>
            </Box>
            <Text fontSize="24px" fontWeight="bold" color="rgba(0,0,0,0.7)">
                대한민국치과
            </Text>
        </Center>
    );
}
