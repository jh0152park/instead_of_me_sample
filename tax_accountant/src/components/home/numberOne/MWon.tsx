import { HStack, Text, VStack } from "@chakra-ui/react";
import NumberBox from "./numberBox";

export default function MWon({
    text,
    numArray,
}: {
    text: string;
    numArray: number[];
}) {
    return (
        <VStack
            color={"#1265F5"}
            fontWeight={"extrabold"}
            fontSize={"36px"}
            spacing={"30px"}
        >
            <Text>{text}</Text>
            <HStack alignItems={"flex-end"} spacing={"0"}>
                {numArray.map((num, index) => (
                    <NumberBox num={num} key={index} />
                ))}
                <Text ml={"10px"}>만원</Text>
            </HStack>
        </VStack>
    );
}
