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
            backgroundColor={"white"}
            backdropBlur={"12px"}
        >
            <HStack spacing={"50px"}>
                <Logo />
                <TextItem text="세무서비스" path="/" />
                <TextItem text="더낸세금" path="/overtax" />
            </HStack>
            <BlueButton text="상담 신청하기" />
        </Box>
    );
}
