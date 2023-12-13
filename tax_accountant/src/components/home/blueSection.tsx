import { Text, Center } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../../global/recoil";

export default function BlueSection() {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <Center
            w={"100dvw"}
            h={displayResolution === "web" ? "400px" : "150px"}
            backgroundColor={"#1265F5"}
        >
            <Text
                fontSize={displayResolution === "web" ? "60px" : "20px"}
                fontWeight={"extrabold"}
                color={"white"}
                textAlign={"center"}
                lineHeight={"1.5"}
            >
                까다롭고 귀찮은 세금, 신경 쓰지 않도록
                <br />
                비서처럼 챙겨드립니다
            </Text>
        </Center>
    );
}
