import { Box, HStack, Text } from "@chakra-ui/react";

export default function PercentageLine({
    isGradient = false,
    textColor = "gray.500",
    percentText = "",
    lineWidth,
    text,
}: {
    isGradient?: boolean;
    textColor?: string;
    percentText?: string;
    lineWidth: string;
    text: string;
}) {
    return (
        <HStack spacing={"30px"} w={"100%"} h={"50px"}>
            <Text
                color={textColor}
                fontSize={"18px"}
                fontWeight={"extrabold"}
                w={"200px"}
                textAlign={"end"}
            >
                {text}
            </Text>
            <Box
                w={lineWidth}
                h={"25px"}
                background={
                    isGradient
                        ? "linear-gradient(90deg, #F8DD08, #1265F5)"
                        : "gray.100"
                }
                borderTopRightRadius={"20px"}
                borderBottomRightRadius={"20px"}
            />
            <Text color={"#1265F5"} fontSize={"60px"} fontWeight={"extrabold"}>
                {percentText}
            </Text>
        </HStack>
    );
}
