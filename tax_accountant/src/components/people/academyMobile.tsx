import { Image, Text, VStack } from "@chakra-ui/react";

export default function AcademyMobile() {
    return (
        <VStack
            w={"100%"}
            px={"30px"}
            py={"50px"}
            spacing={"20px"}
            backgroundColor={"whitesmoke"}
        >
            <Image
                src={require("../../assets/academy.jpg")}
                w={"200px"}
                h={"200px"}
                objectFit={"cover"}
                borderRadius={"50%"}
            />

            <VStack spacing={"10px"} lineHeight={"1.4"}>
                <Text color={"#1265F5"} fontSize={"12px"}>
                    IOM 아카데미 / 김철수 팀장
                </Text>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                    “교육을 통한 직원의 역량 강화는 고객의 서비스 만족으로
                    이어집니다.”
                </Text>
                <Text fontSize={"12px"}>
                    IOM은 업계에서 드물게 내부 직원 교육 프로그램을 운영
                    중입니다. 고객의 사업을 다루는 직원들의 능력이 곧 IOM이
                    제공하는 서비스의 질과 직결되기 때문입니다. 고객과 함께
                    만족할 수 있는 'IOM형 인재'를 만들어내기 위해 노력하고
                    있습니다.
                </Text>
            </VStack>
        </VStack>
    );
}
