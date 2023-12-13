import { Text, VStack } from "@chakra-ui/react";
import BlueButton from "../common/blueButton";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../../global/recoil";

export default function Competitiveness() {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <VStack
            w={"100%"}
            h={displayResolution === "web" ? "300px" : "150px"}
            justifyContent={"space-between"}
            px={"30px"}
            py={displayResolution === "web" ? "80px" : "40px"}
            backgroundColor={"#E7EFFE"}
        >
            <Text
                fontSize={displayResolution === "web" ? "36px" : "18px"}
                fontWeight={"bold"}
            >
                IOM 서비스의 가장 큰 경쟁력은 사람입니다.
            </Text>
            <BlueButton text="상담 신청하기" />
        </VStack>
    );
}
