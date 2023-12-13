import { Box, HStack } from "@chakra-ui/react";
import Logo from "./logo";
import TextItem from "./textItem";

export default function HeaderMobile() {
    return (
        <Box
            w="100%"
            h="100px"
            px={"20px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            position={"fixed"}
            top={0}
            left={0}
            backgroundColor={"rgba(255,255,255,0.97)"}
            zIndex={10}
            // style={{
            //     WebkitBackfaceVisibility: "hidden",
            // }}
        >
            <HStack flex={1} display={"flex"} alignItems={"center"}>
                <Box flex={1}>
                    <Logo />
                </Box>
                <HStack spacing={7}>
                    <TextItem text="세무서비스" path="/" />
                    <TextItem text="IOM피플" path="/people" />
                </HStack>
            </HStack>
        </Box>
    );
}
