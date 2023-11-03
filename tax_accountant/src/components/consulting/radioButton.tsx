import { Box, HStack, Text, VStack } from "@chakra-ui/react";

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
    return (
        <HStack
            w={"450px"}
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
                    w={"10px"}
                    h={"10px"}
                    borderRadius={"50%"}
                    backgroundColor={isChecked ? "#1265F5" : "#F9F9F9"}
                />
            </Box>

            <VStack alignItems={"flex-start"} spacing={"15px"}>
                <Text fontSize={"16px"} fontWeight={"bold"}>
                    {title}
                </Text>
                <Text fontSize={"14px"}>{description}</Text>
            </VStack>
        </HStack>
    );
}
