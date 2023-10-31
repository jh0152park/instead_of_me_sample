import { HStack } from "@chakra-ui/react";
import Menu from "./menu";
import QuotoButton from "../common/quotoButton";
import Logo from "./logo";

export default function Header() {
    return (
        <HStack
            w={"100dvw"}
            h={"100px"}
            position={"fixed"}
            px={"40px"}
            top={0}
            justifyContent={"space-between"}
            zIndex={10}
        >
            <Logo />
            <HStack spacing={15}>
                <Menu />
                <QuotoButton />
            </HStack>
        </HStack>
    );
}
