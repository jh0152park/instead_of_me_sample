import { VStack, Text } from "@chakra-ui/react";
import WorryBoxMobile from "./worry/worryBoxMobile";

export default function WorryMobile() {
    return (
        <VStack
            w={"100%"}
            px={"30px"}
            py={"50px"}
            backgroundColor={"whitesmoke"}
        >
            <Text fontSize={"20px"} fontWeight={"bold"}>
                세무 서비스, 혹시 이런{" "}
                <span style={{ color: "#1265F5" }}>고민</span> 없으세요?
            </Text>

            <VStack spacing={0}>
                <WorryBoxMobile
                    title="세금 및 지원금 돌봄"
                    description="지원금 안내를 잘 받고, 세금 누락 없이 신고하고 싶어요"
                />
                <WorryBoxMobile
                    title="원활한 소통"
                    description="담당자와 바로 연락하고 편하게 이야기하고 싶어요"
                />
                <WorryBoxMobile
                    title="체계적인 세금 관리"
                    description="신고 하기 전에 미리 알아서 급하지 않게 챙기고 싶어요"
                />
            </VStack>
        </VStack>
    );
}
