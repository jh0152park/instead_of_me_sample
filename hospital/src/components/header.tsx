import { HStack } from "@chakra-ui/react";
import Logo from "./header/logo";
import Button from "./header/button";

export default function Header() {
    return (
        <HStack
            w="100%"
            h="100px"
            px="90px"
            position="fixed"
            top={0}
            alignItems="center"
            justifyContent="center"
        >
            <Logo />
            <HStack mr="180px" spacing="15px">
                <Button name="병원소개" />
                <Button name="의료진 소개" />
                <Button name="진료안내" />
            </HStack>
        </HStack>
    );
}
