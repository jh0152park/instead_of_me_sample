import {
    Box,
    Center,
    HStack,
    Image,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import RadioButton from "./radioButton";
import { useEffect, useState } from "react";
import CheckBoxLabel from "./checkBoxLabel";
import BlueButton from "../common/blueButton";
import { go_to_scroll_position } from "../../utils/utils";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../../global/recoil";

export default function Consulting() {
    const [selectedRadio, setSelectedRadio] = useState(0);
    const displayResolution = useRecoilValue(DisplayResolution);

    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            <Box h={"100px"} />
            <Box
                w={"100%"}
                h={displayResolution === "web" ? "500px" : "300px"}
                position={"relative"}
                py={displayResolution === "web" ? "100px" : "80px"}
                px={"30px"}
                display={"flex"}
            >
                <Image
                    w={"100%"}
                    h={"100%"}
                    src={require("../../assets/consulting_image.jpg")}
                    objectFit={"cover"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    zIndex={-1}
                    opacity={displayResolution === "web" ? 1 : 0.7}
                />

                <VStack
                    w={"100%"}
                    h={"100%"}
                    justifyContent={
                        displayResolution === "web" ? "flex-end" : "center"
                    }
                    spacing={"15px"}
                >
                    <Text
                        fontSize={displayResolution === "web" ? "40px" : "20px"}
                        fontWeight={"extrabold"}
                    >
                        세무사와 상담하기
                    </Text>
                    <Text
                        fontSize={displayResolution === "web" ? "28px" : "14px"}
                        lineHeight={"1.5"}
                        textAlign={"center"}
                    >
                        전화번호를 남기시면 세무사가 직접 상담해드립니다.
                        <br />
                        궁금한 점을 세무사에게 바로 물어보세요!
                    </Text>
                </VStack>
            </Box>
            <Center>
                <VStack
                    w={displayResolution === "web" ? "450px" : "100%"}
                    py={"30px"}
                    px={displayResolution === "web" ? 0 : "20px"}
                    spacing={"20px"}
                >
                    <VStack w={"100%"} spacing={"15px"}>
                        <HStack w={"100%"} justifyContent={"space-between"}>
                            <Text>상담 유형</Text>

                            <Text color={"gray.500"}>더낸세금 문의</Text>
                        </HStack>

                        <VStack w={"100%"} spacing={"10px"}>
                            <RadioButton
                                title="사업 관련 세무 상담"
                                description="사업자 세금 신고, 사업장 절세 관련 문의, 법인전환 문의"
                                isChecked={selectedRadio === 1}
                                onClick={() => setSelectedRadio(1)}
                            />
                            <RadioButton
                                title="기타 세무 상담 (유료상담)"
                                description="양도, 상속, 증여, 기타 비사업자 세무 문의"
                                isChecked={selectedRadio === 2}
                                onClick={() => setSelectedRadio(2)}
                            />
                        </VStack>
                    </VStack>

                    <VStack
                        w={"100%"}
                        alignItems={"flex-start"}
                        spacing={"15px"}
                    >
                        <Text>전화번호</Text>
                        <Input
                            placeholder="전화번호를 입력해주세요."
                            px={"20px"}
                            py={"25px"}
                            backgroundColor={"#F9F9F9"}
                            border={"1px solid #CACBCE"}
                        />
                    </VStack>

                    <VStack
                        w={"100%"}
                        alignItems={"flex-start"}
                        px={"10px"}
                        spacing={"15px"}
                    >
                        <CheckBoxLabel text="서비스 이용약관 동의" />
                        <CheckBoxLabel text="개인정보 수집/이용 동의" />
                        <CheckBoxLabel text="마케팅 수신 동의 (선택)" />
                    </VStack>

                    <BlueButton text="상담 신청하기" widthType="100%" />
                </VStack>
            </Center>
        </div>
    );
}
