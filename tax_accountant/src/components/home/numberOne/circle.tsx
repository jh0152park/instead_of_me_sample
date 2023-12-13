import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";
import { useEffect, useMemo, useRef, useState } from "react";
import useOnScreen from "../../../hooks/useOnScreen";

export default function Circle({
    per,
    image,
    time,
}: {
    per: number;
    image: any;
    time: number;
}) {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [intervals, setIntervals] = useState<NodeJS.Timer | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const displayResolution = useRecoilValue(DisplayResolution);
    const isVisible = useOnScreen(imageRef);

    const currentPer = useMemo(() => {
        if (currentNumber >= per) return per;
        else return currentNumber;
    }, [currentNumber]);

    function currentNumberChange() {
        if (currentNumber >= per) {
            setCurrentNumber(per);
        } else {
            setCurrentNumber((prev) => prev + 1);
        }
    }

    useEffect(() => {
        if (!intervals && isVisible) {
            setIntervals(
                setInterval(() => {
                    currentNumberChange();
                }, time)
            );
        } else if (intervals && currentNumber >= per) {
            clearInterval(intervals);
        }
    }, [isVisible]);

    return (
        <VStack spacing={"20px"}>
            <Box
                w={displayResolution === "web" ? "300px" : "200px"}
                h={displayResolution === "web" ? "300px" : "200px"}
                position={"relative"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Image
                    ref={imageRef}
                    src={image}
                    objectFit={"cover"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    zIndex={1}
                />
                <Text
                    position={"relative"}
                    zIndex={2}
                    textAlign={"center"}
                    fontSize={displayResolution === "web" ? "72px" : "50px"}
                    color={"#797979"}
                    fontWeight={"extrabold"}
                >
                    {currentPer}{" "}
                    <span
                        style={{
                            fontSize: displayResolution === "web" ? 36 : 25,
                        }}
                    >
                        %
                    </span>
                </Text>
            </Box>
        </VStack>
    );
}
