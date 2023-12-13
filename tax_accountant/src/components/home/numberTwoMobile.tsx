import { HStack, VStack, Text } from "@chakra-ui/react";
import NumberCircle from "./common/numberCircle";
import PercentageBox from "./numberTwo/percentageBox";

export default function NumberTwoMobile() {
    return (
        <VStack
            w={"100%"}
            backgroundColor={"white"}
            justifyContent={"center"}
            pt={"50px"}
            pb={"100px"}
            px={"20px"}
            spacing={"20px"}
        >
            <HStack spacing={"15px"}>
                <NumberCircle num={2} />

                <VStack alignItems={"flex-start"} spacing={"5px"}>
                    <Text
                        color={"black"}
                        fontSize={"22px"}
                        fontWeight={"extrabold"}
                    >
                        비서처럼 꼼꼼하게 챙겨드립니다
                    </Text>
                    <Text
                        color={"gray.500"}
                        fontSize={"10px"}
                        fontWeight={"semibold"}
                    >
                        IOM 고객의 67%가 친절한 상담과 잘 챙겨줌을 장점으로
                        뽑았습니다.
                    </Text>
                </VStack>
            </HStack>

            <PercentageBox />
        </VStack>
    );
}
