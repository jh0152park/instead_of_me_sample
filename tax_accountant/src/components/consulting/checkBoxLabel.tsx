import { Checkbox, HStack, Text } from "@chakra-ui/react";

export default function CheckBoxLabel({ text }: { text: string }) {
    return (
        <HStack>
            <Checkbox
                backgroundColor={"white"}
                border={"1px solid #00000060"}
            />
            <Text
                fontSize={"14px"}
                color={"#00000090"}
                textDecoration={"underline"}
            >
                {text}
            </Text>
        </HStack>
    );
}
