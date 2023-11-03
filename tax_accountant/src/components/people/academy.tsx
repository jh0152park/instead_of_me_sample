import { Center, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Academy() {
    return (
        <Center w={"100dvw"} h={"500px"} backgroundColor={"whitesmoke"}>
            <HStack spacing={"50px"}>
                <Image
                    src={require("../../assets/academy.jpg")}
                    w={"300px"}
                    h={"300px"}
                    objectFit={"cover"}
                    borderRadius={"50%"}
                />

                <VStack w={"600px"} alignItems={"flex-start"} spacing={"20px"}>
                    <Text color={"#1265F5"} fontSize={"20px"}>
                        IOM 아카데미 / 김철수 팀장
                    </Text>
                    <Text fontSize={"36px"} fontWeight={"bold"}>
                        “교육을 통한 직원의 역량 강화는 고객의 서비스 만족으로
                        이어집니다.”
                    </Text>
                    <Text fontSize={"20px"}>
                        혜움은 업계에서 드물게 내부 직원 교육 프로그램을 운영
                        중입니다. 고객의 사업을 다루는 직원들의 능력이 곧 혜움이
                        제공하는 서비스의 질과 직결되기 때문입니다. 고객과 함께
                        만족할 수 있는 '혜움형 인재'를 만들어내기 위해 노력하고
                        있습니다.
                    </Text>
                </VStack>
            </HStack>
        </Center>
    );
}
