import { Box, HStack, Text } from "@chakra-ui/react";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

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
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <HStack
            spacing={displayResolution === "web" ? "30px" : "15px"}
            w={"100%"}
            h={"50px"}
        >
            <Text
                color={textColor}
                fontSize={displayResolution === "web" ? "18px" : "12px"}
                fontWeight={"extrabold"}
                w={displayResolution === "web" ? "200px" : "160px"}
                textAlign={"end"}
            >
                {text}
            </Text>
            <Box
                w={lineWidth}
                h={displayResolution === "web" ? "25px" : "15px"}
                background={
                    isGradient
                        ? "linear-gradient(90deg, #F8DD08, #1265F5)"
                        : "gray.100"
                }
                borderTopRightRadius={"20px"}
                borderBottomRightRadius={"20px"}
            />
            <Text
                color={"#1265F5"}
                fontSize={displayResolution === "web" ? "60px" : "20px"}
                fontWeight={"extrabold"}
                transform={
                    displayResolution === "web" ? "none" : "rotate(90deg)"
                }
            >
                {percentText}
            </Text>
        </HStack>
    );
}
