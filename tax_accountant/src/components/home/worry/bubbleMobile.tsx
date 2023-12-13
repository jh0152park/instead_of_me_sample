import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function BubbleMobile({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <Box w={"300px"} h={"250px"} position={"relative"} zIndex={2}>
            <Image
                src={require("../../../assets/message_box.png")}
                position={"absolute"}
                top={0}
                left={0}
                w={"100%"}
                h={"100%"}
                objectFit={"fill"}
                zIndex={-1}
            />

            <VStack
                w={"100%"}
                h={"100%"}
                pt={"40px"}
                px={"30px"}
                pb={"120px"}
                justifyContent={"space-between"}
                textAlign={"center"}
            >
                <Text
                    color={"#1265F5"}
                    fontSize={"24px"}
                    fontWeight={"extrabold"}
                >
                    {title}
                </Text>

                <Text
                    color={"gray.500"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                >
                    {description}
                </Text>
            </VStack>
        </Box>
    );
}
