import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function Circle({ per, image }: { per: number; image: any }) {
    return (
        <VStack spacing={"20px"}>
            <Box
                w={"300px"}
                h={"300px"}
                position={"relative"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Image
                    src={image}
                    objectFit={"cover"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    zIndex={1}
                />
                <Text
                    position={"relative"}
                    zIndex={2}
                    textAlign={"center"}
                    fontSize={"72px"}
                    color={"#797979"}
                    fontWeight={"extrabold"}
                >
                    {per} <span style={{ fontSize: 36 }}>%</span>
                </Text>
            </Box>
        </VStack>
    );
}
