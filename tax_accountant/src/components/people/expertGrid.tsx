import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function ExpertGrid({
    reverse = false,
    text1,
    text2,
    text3,
    description,
    image,
}: {
    reverse?: boolean;
    text1: string;
    text2: string;
    text3: string;
    description: string;
    image: any;
}) {
    return (
        <HStack spacing={"50px"}>
            {reverse ? (
                <>
                    <Image
                        src={image}
                        w={"500px"}
                        h={"400px"}
                        objectFit={"cover"}
                    />
                    <VStack
                        w={"500px"}
                        spacing={"30px"}
                        alignItems={"flex-start"}
                        pr={"50px"}
                    >
                        <Box w={"50px"} borderTop={"3px solid #1265F5"} />
                        <Box
                            fontSize={"36px"}
                            fontWeight={"medium"}
                            lineHeight={"1.2"}
                        >
                            <Text>{text1}</Text>
                            <Text>{text2}</Text>
                            <Text>{text3}</Text>
                        </Box>
                        <Text fontSize={"20px"} lineHeight={"1.5"}>
                            {description}
                        </Text>
                    </VStack>
                </>
            ) : (
                <>
                    <VStack
                        w={"500px"}
                        spacing={"30px"}
                        alignItems={"flex-start"}
                        pr={"50px"}
                    >
                        <Box w={"50px"} borderTop={"3px solid #1265F5"} />
                        <Box
                            fontSize={"36px"}
                            fontWeight={"medium"}
                            lineHeight={"1.2"}
                        >
                            <Text>{text1}</Text>
                            <Text>{text2}</Text>
                            <Text>{text3}</Text>
                        </Box>
                        <Text fontSize={"20px"} lineHeight={"1.5"}>
                            {description}
                        </Text>
                    </VStack>
                    <Image
                        src={image}
                        w={"500px"}
                        h={"400px"}
                        objectFit={"cover"}
                    />
                </>
            )}
        </HStack>
    );
}
