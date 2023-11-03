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
import { useState } from "react";
import CheckBoxLabel from "./checkBoxLabel";
import BlueButton from "../common/blueButton";

export default function Consulting() {
    const [selectedRadio, setSelectedRadio] = useState(0);

    return (
        <div>
            <Box h={"100px"} />
            <Box w={"100dvw"} h={"500px"} position={"relative"} pb={"100px"}>
                <Image
                    w={"100%"}
                    h={"100%"}
                    src={require("../../assets/consulting_image.jpg")}
                    objectFit={"cover"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    zIndex={-1}
                />

                <VStack
                    w={"100%"}
                    h={"100%"}
                    justifyContent={"flex-end"}
                    spacing={"15px"}
                >
                    <Text fontSize={"40px"} fontWeight={"extrabold"}>
                        세무사와 상담하기
                    </Text>
                    <Text
                        fontSize={"28px"}
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
                <VStack w={"450px"} py={"30px"} spacing={"20px"}>
                    <VStack w={"100%"} spacing={"15px"}>
                        <HStack w={"100%"} justifyContent={"space-between"}>
                            <Text>상담 유형</Text>

                            <Text color={"gray.500"}>더낸세금 문의</Text>
                        </HStack>

                        <VStack spacing={"10px"}>
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
