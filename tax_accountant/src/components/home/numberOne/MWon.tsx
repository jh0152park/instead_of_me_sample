import { HStack, Text, VStack } from "@chakra-ui/react";
import NumberBox from "./numberBox";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";
import { useEffect, useMemo, useRef, useState } from "react";
import useOnScreen from "../../../hooks/useOnScreen";

export default function MWon({ text, num }: { text: string; num: number }) {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [intervals, setIntervals] = useState<NodeJS.Timer | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const displayResolution = useRecoilValue(DisplayResolution);
    const isVisible = useOnScreen(textRef);

    function currentNumberChange() {
        if (currentNumber >= num) {
            setCurrentNumber(num);
        } else {
            setCurrentNumber((prev) => prev + 1);
        }
    }

    const numArray = useMemo<number[]>(() => {
        if (num >= 1000) {
            const thousandDigit = Math.floor(currentNumber / 1000);
            const hundredsDigit = Math.floor(
                (currentNumber - thousandDigit * 1000) / 100
            );
            const tensDigit = Math.floor(
                (currentNumber - thousandDigit * 1000 - hundredsDigit * 100) /
                    10
            );
            const onesDigit = currentNumber % 10;
            return [thousandDigit, hundredsDigit, tensDigit, onesDigit];
        } else {
            const hundredsDigit = Math.floor(currentNumber / 100);
            const tensDigit = Math.floor(
                (currentNumber - hundredsDigit * 100) / 10
            );
            const onesDigit = currentNumber % 10;
            return [hundredsDigit, tensDigit, onesDigit];
        }
    }, [currentNumber]);

    useEffect(() => {
        if (!intervals && isVisible && currentNumber < num) {
            setIntervals(
                setInterval(() => {
                    currentNumberChange();
                }, 3)
            );
        } else if (intervals && currentNumber >= num) {
            clearInterval(intervals);
        }
    }, [currentNumber, intervals, isVisible]);

    return (
        <VStack
            color={"#1265F5"}
            fontWeight={"extrabold"}
            fontSize={displayResolution === "web" ? "36px" : "20px"}
            spacing={displayResolution === "web" ? "30px" : "15px"}
        >
            <Text ref={textRef}>{text}</Text>
            <HStack alignItems={"flex-end"} spacing={"0"}>
                {numArray.map((num, index) => (
                    <NumberBox num={num} key={index} />
                ))}
                <Text ml={"10px"}>만원</Text>
            </HStack>
        </VStack>
    );
}
