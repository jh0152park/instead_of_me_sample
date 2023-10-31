import { HStack } from "@chakra-ui/react";
import Menu from "./menu";
import YelloButton from "../common/yelloButton";
import Logo from "./logo";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [backgroundColor, setBackgroundColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300) {
            setBackgroundColor("white");
            setTextColor("black");
        } else {
            setBackgroundColor("transparent");
            setTextColor("white");
        }
    });

    return (
        <HStack
            backgroundColor={backgroundColor}
            color={textColor}
            w={"100dvw"}
            h={"100px"}
            position={"fixed"}
            px={"40px"}
            top={0}
            justifyContent={"space-between"}
            zIndex={10}
            transition={"0.3s linear"}
        >
            <Logo />
            <HStack spacing={15}>
                <Menu />
                <YelloButton text="Get a Quoto" />
            </HStack>
        </HStack>
    );
}
