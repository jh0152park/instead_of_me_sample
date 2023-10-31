import { Box, Text } from "@chakra-ui/react";

export default function MenuItem({ label }: { label: string }) {
    return (
        <Box
            _hover={{ color: "#ffffff60" }}
            cursor={"pointer"}
            px={"20px"}
            py={"10px"}
        >
            <Text fontSize={"16px"} fontWeight={"semibold"}>
                {label}
            </Text>
        </Box>
    );
}
