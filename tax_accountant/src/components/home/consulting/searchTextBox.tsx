import { HStack, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchTextBox({ text }: { text: string }) {
    return (
        <HStack
            w={"1000px"}
            backgroundColor={"white"}
            px={"20px"}
            py={"30px"}
            display={"flex"}
        >
            <Text flex={1} fontSize={"24px"} fontWeight={"medium"}>
                {text}
            </Text>

            <FaSearch style={{ fontSize: 28, color: "#1265F5" }} />
        </HStack>
    );
}
