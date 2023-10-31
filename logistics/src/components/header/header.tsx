import { Box, HStack, Text } from "@chakra-ui/react";
import Menu from "./menu";
import QuotoButton from "../common/quotoButton";

export default function Header() {
    return (
        <HStack
            w={"100dvw"}
            h={"100px"}
            position={"fixed"}
            px={"40px"}
            top={0}
            justifyContent={"space-between"}
        >
            <Text>Logo</Text>

            <HStack spacing={15}>
                <Menu />
                <QuotoButton />
            </HStack>
        </HStack>
    );
}
