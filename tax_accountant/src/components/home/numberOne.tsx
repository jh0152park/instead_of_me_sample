import { HStack, Text, VStack } from "@chakra-ui/react";
import NumberCircle from "./common/numberCircle";
import Circle from "./numberOne/circle";
import MWon from "./numberOne/MWon";

export default function NumberOne() {
    return (
        <VStack
            w={"100dvw"}
            h={"900px"}
            backgroundColor={"white"}
            justifyContent={"center"}
            spacing={"100px"}
        >
            <HStack spacing={"25px"}>
                <NumberCircle num={1} />

                <VStack alignItems={"flex-start"} spacing={"15px"}>
                    <Text
                        color={"black"}
                        fontSize={"48px"}
                        fontWeight={"extrabold"}
                    >
                        새는 돈을 챙겨드립니다
                    </Text>
                    <Text
                        color={"#c9c9c9"}
                        fontSize={"20px"}
                        fontWeight={"semibold"}
                    >
                        IOM의 새로운 고객 중 44%가 더낸세금을 돌려받았고, 16%가
                        신규 지원금을 찾으셨습니다.
                    </Text>
                </VStack>
            </HStack>

            <HStack spacing={"100px"}>
                <VStack spacing={"50px"}>
                    <Circle
                        image={require("../../assets/44Circle.png")}
                        per={44}
                    />
                    <MWon text="더 낸 세금" numArray={[7, 3, 0]} />
                </VStack>
                <VStack spacing={"50px"}>
                    <Circle
                        image={require("../../assets/16Circle.png")}
                        per={16}
                    />
                    <MWon text="못 받은 지원금" numArray={[1, 4, 0, 6]} />
                </VStack>
            </HStack>
        </VStack>
    );
}
