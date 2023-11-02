import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function Bubble({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <Box w={"400px"} h={"350px"} position={"relative"} zIndex={2}>
            <Image
                src={require("../../../assets/message_box.png")}
                position={"absolute"}
                top={0}
                left={0}
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                zIndex={-1}
            />

            <VStack
                w={"100%"}
                h={"100%"}
                pt={"50px"}
                pb={"150px"}
                px={"50px"}
                justifyContent={"space-between"}
                textAlign={"center"}
            >
                <Text
                    color={"#1265F5"}
                    fontSize={"36px"}
                    fontWeight={"extrabold"}
                >
                    {title}
                </Text>

                <Text
                    color={"gray.400"}
                    fontSize={"24px"}
                    fontWeight={"medium"}
                >
                    {description}
                </Text>
            </VStack>
        </Box>
    );
}
