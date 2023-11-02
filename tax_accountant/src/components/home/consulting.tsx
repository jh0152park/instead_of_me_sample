import { Center, Text, VStack } from "@chakra-ui/react";
import BlueButton from "../common/blueButton";
import SearchTextBox from "./consulting/searchTextBox";

export default function Consulting() {
    return (
        <Center w={"100dvw"} h={"800px"} backgroundColor={"whitesmoke"}>
            <VStack spacing={"80px"}>
                <Text
                    fontSize={"60px"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    전문 세무사가 무료로 상담해 드립니다
                </Text>

                <VStack spacing={"20px"}>
                    <SearchTextBox text="절세는 기본입니다. 지원금도 잘 챙겨주는지 확인해 보세요." />
                    <SearchTextBox text="전화와 메일로만 소통하고 계신가요?" />
                    <SearchTextBox text="투자없는 혁신이 있을까요? 서비스 개선을 위해 어떤 노력을 하는지 확인해 보세요." />
                </VStack>

                <BlueButton text="무료 세무 상담받기" />
            </VStack>
        </Center>
    );
}
