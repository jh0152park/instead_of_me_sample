import { Box, Text, VStack } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Box>
            <VStack
                alignItems={"flex-start"}
                fontSize={"20px"}
                fontWeight={"bold"}
            >
                <Text>INSTEADOFME</Text>
                <Text>LOGISTICS</Text>
            </VStack>
        </Box>
    );
}
