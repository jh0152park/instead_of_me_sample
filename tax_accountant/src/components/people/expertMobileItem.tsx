import { Box, VStack, Image, Text } from "@chakra-ui/react";

export default function ExpertMobileItem({
    text1,
    text2,
    text3,
    description,
    image,
}: {
    text1: string;
    text2: string;
    text3: string;
    description: string;
    image: any;
}) {
    return (
        <Box w={"100%"} position={"relative"}>
            <Image
                src={image}
                position={"absolute"}
                zIndex={-1}
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                opacity={0.5}
            />

            <VStack
                px={"30px"}
                py={"50px"}
                spacing={"20px"}
                alignItems={"flex-start"}
            >
                <Text fontSize={"24px"} fontWeight={"bold"} lineHeight={"1.2"}>
                    {text1}
                    <br />
                    {text2}
                    <br />
                    {text3}
                </Text>

                <Text fontSize={"12px"} lineHeight={"1.5"}>
                    {description}
                </Text>
            </VStack>
        </Box>
    );
}
