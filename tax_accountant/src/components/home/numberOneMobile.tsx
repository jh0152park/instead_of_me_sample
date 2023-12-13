import { HStack, VStack, Text } from "@chakra-ui/react";

import NumberCircle from "./common/numberCircle";
import Circle from "./numberOne/circle";
import MWon from "./numberOne/MWon";

export default function NumberOneMobile() {
    return (
        <VStack
            w={"100%"}
            backgroundColor={"white"}
            py={"50px"}
            px={"20px"}
            spacing={"40px"}
        >
            <HStack spacing={"15px"}>
                <NumberCircle num={1} />

                <VStack alignItems={"flex-start"} spacing={"5px"}>
                    <Text
                        color={"black"}
                        fontSize={"22px"}
                        fontWeight={"extrabold"}
                    >
                        새는 돈을 챙겨드립니다
                    </Text>
                    <Text
                        color={"gray.500"}
                        fontSize={"10px"}
                        fontWeight={"semibold"}
                    >
                        IOM의 새로운 고객 중 44%가 더낸세금을 돌려받았고,
                        <br />
                        16%가 신규 지원금을 찾으셨습니다.
                    </Text>
                </VStack>
            </HStack>

            <VStack spacing={"40px"}>
                <VStack spacing={"20px"}>
                    <Circle
                        image={require("../../assets/44Circle.png")}
                        per={44}
                    />
                    <MWon text="더 낸 세금" numArray={[7, 3, 0]} />
                </VStack>

                <VStack spacing={"20px"}>
                    <Circle
                        image={require("../../assets/16Circle.png")}
                        per={16}
                    />
                    <MWon text="못 받은 지원금" numArray={[1, 4, 0, 6]} />
                </VStack>
            </VStack>
        </VStack>
    );
}
