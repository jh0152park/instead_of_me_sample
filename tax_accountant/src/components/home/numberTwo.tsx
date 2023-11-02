import { HStack, Text, VStack } from "@chakra-ui/react";
import NumberCircle from "./common/numberCircle";
import PercentageBox from "./numberTwo/percentageBox";

export default function NumberTwo() {
    return (
        <VStack
            w={"100dvw"}
            h={"900px"}
            backgroundColor={"white"}
            justifyContent={"center"}
            spacing={"100px"}
        >
            <HStack spacing={"25px"}>
                <NumberCircle num={2} />

                <VStack alignItems={"flex-start"} spacing={"15px"}>
                    <Text
                        color={"black"}
                        fontSize={"48px"}
                        fontWeight={"extrabold"}
                    >
                        비서처럼 꼼꼼하게 챙겨드립니다
                    </Text>
                    <Text
                        color={"#c9c9c9"}
                        fontSize={"20px"}
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
