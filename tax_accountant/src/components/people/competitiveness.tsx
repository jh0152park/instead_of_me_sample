import { Text, VStack } from "@chakra-ui/react";
import BlueButton from "../common/blueButton";

export default function Competitiveness() {
    return (
        <VStack
            w={"100dvw"}
            h={"300px"}
            justifyContent={"center"}
            spacing={"50px"}
            backgroundColor={"#E7EFFE"}
        >
            <Text fontSize={"36px"}>
                IOM 서비스의 가장 큰 경쟁력은 사람입니다.
            </Text>
            <BlueButton text="상담 신청하기" />
        </VStack>
    );
}
