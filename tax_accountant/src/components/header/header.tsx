import { Box, HStack } from "@chakra-ui/react";
import Logo from "./logo";
import TextItem from "./textItem";
import BlueButton from "../common/blueButton";

export default function Header() {
    return (
        <Box
            w="100dvw"
            h="100px"
            px={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            position={"fixed"}
            top={0}
            left={0}
            backgroundColor={"rgba(255,255,255,0.97)"}
            zIndex={10}
        >
            <HStack spacing={"50px"}>
                <Logo />
                <TextItem text="세무서비스" path="/" />
                <TextItem text="IOM피플" path="/people" />
            </HStack>
            <BlueButton text="상담 신청하기" />
        </Box>
    );
}
