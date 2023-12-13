import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { DisplayResolution } from "../../global/recoil";
import { useRecoilValue } from "recoil";

export default function RadioButton({
    title,
    description,
    isChecked,
    onClick,
}: {
    title: string;
    description: string;
    isChecked: boolean;
    onClick: () => void;
}) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <HStack
            w={displayResolution === "web" ? "450px" : "100%"}
            h={"80px"}
            backgroundColor={isChecked ? "#E0EEFD" : "#F9F9F9"}
            px={"20px"}
            spacing={"15px"}
            border={isChecked ? "1px solid #1265F5" : "1px solid #CACBCE"}
            borderRadius={"10px"}
            _hover={{
                backgroundColor: "#E0EEFD",
                border: "1px solid #1265F5",
            }}
            transition={"0.2s linear"}
            transitionProperty={["background-color", "border"]}
            cursor={"pointer"}
            onClick={onClick}
        >
            <Box
                w={"15px"}
                h={"15px"}
                borderRadius={"50%"}
                border={"0.5px solid gray"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Box
                    w={"7px"}
                    h={"7px"}
                    borderRadius={"50%"}
                    backgroundColor={isChecked ? "#1265F5" : "transparent"}
                />
            </Box>

            <VStack
                alignItems={"flex-start"}
                spacing={displayResolution === "web" ? "15px" : "8px"}
            >
                <Text
                    fontSize={displayResolution === "web" ? "16px" : "14px"}
                    fontWeight={"bold"}
                >
                    {title}
                </Text>
                <Text fontSize={displayResolution === "web" ? "14px" : "10px"}>
                    {description}
                </Text>
            </VStack>
        </HStack>
    );
}
