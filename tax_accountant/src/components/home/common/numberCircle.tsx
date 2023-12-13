import { Center, Text } from "@chakra-ui/react";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

export default function NumberCircle({ num }: { num: number }) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <Center
            w={displayResolution === "web" ? "50px" : "30px"}
            h={displayResolution === "web" ? "50px" : "30px"}
            borderRadius={"50%"}
            backgroundColor={"#1265F5"}
        >
            <Text
                color={"white"}
                fontSize={displayResolution === "web" ? "24px" : "14px"}
                fontWeight={"extrabold"}
                textAlign={"center"}
            >
                {num}
            </Text>
        </Center>
    );
}
