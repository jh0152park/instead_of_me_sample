import { HStack, Text, VStack } from "@chakra-ui/react";
import NumberBox from "./numberBox";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

export default function MWon({
    text,
    numArray,
}: {
    text: string;
    numArray: number[];
}) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <VStack
            color={"#1265F5"}
            fontWeight={"extrabold"}
            fontSize={displayResolution === "web" ? "36px" : "20px"}
            spacing={displayResolution === "web" ? "30px" : "15px"}
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
