import { Text, Center } from "@chakra-ui/react";

export default function BlueSection() {
    return (
        <Center w={"100dvw"} h={"400px"} backgroundColor={"#1265F5"}>
            <Text
                fontSize={"60px"}
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
