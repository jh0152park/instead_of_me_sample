import { Box, Text } from "@chakra-ui/react";

export default function QuotoButton() {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundColor={"#FC6307"}
            px={"15px"}
            py={"15px"}
            borderRadius={"10px"}
            cursor={"pointer"}
            _hover={{ backgroundColor: "#FC6307" }}
        >
            <Text fontSize={"16px"} fontWeight={"semibold"}>
                Get a Quoto
            </Text>
        </Box>
    );
}
