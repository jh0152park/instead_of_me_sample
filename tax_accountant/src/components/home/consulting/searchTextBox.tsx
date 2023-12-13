import { HStack, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

export default function SearchTextBox({ text }: { text: string }) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <HStack
            w={displayResolution === "web" ? "1000px" : "300px"}
            backgroundColor={"white"}
            px={displayResolution === "web" ? "20px" : "15px"}
            py={displayResolution === "web" ? "30px" : "20px"}
            display={"flex"}
        >
            <Text
                flex={1}
                fontSize={displayResolution === "web" ? "24px" : "12px"}
                fontWeight={"medium"}
            >
                {text}
            </Text>

            <FaSearch
                style={{
                    fontSize: displayResolution === "web" ? 28 : 14,
                    color: "#1265F5",
                }}
            />
        </HStack>
    );
}
