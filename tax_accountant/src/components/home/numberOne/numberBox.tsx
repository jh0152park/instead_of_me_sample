import { Center, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../../../global/recoil";

export default function NumberBox({ num }: { num: number }) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <Center
            w={displayResolution === "web" ? "70px" : "50px"}
            h={displayResolution === "web" ? "80px" : "60px"}
            px={displayResolution === "web" ? "10px" : "5px"}
            py={displayResolution === "web" ? "10px" : "5px"}
            backgroundColor={"gray.100"}
            border={"0.5px solid #00000050"}
            boxShadow={"7px 7px 0px 0px"}
            color={"gray.200"}
        >
            <Text
                fontSize={displayResolution === "web" ? "60px" : "40px"}
                color={"#1265F5"}
                textAlign={"center"}
            >
                {num}
            </Text>
        </Center>
    );
}
