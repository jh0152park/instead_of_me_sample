import { HStack, Text, VStack } from "@chakra-ui/react";
import NumberCircle from "./common/numberCircle";
import Content from "./numberThree/content";
import { HiOutlineCalculator, HiOutlineChartSquareBar } from "react-icons/hi";
import { LuHelpingHand } from "react-icons/lu";

export default function NumberThree() {
    return (
        <VStack
            w={"100dvw"}
            h={"3500px"}
            backgroundColor={"white"}
            justifyContent={"center"}
            spacing={"100px"}
        >
            <HStack spacing={"25px"}>
                <NumberCircle num={3} />

                <VStack alignItems={"flex-start"} spacing={"15px"}>
                    <Text
                        color={"black"}
                        fontSize={"48px"}
                        fontWeight={"extrabold"}
                    >
                        귀찮은 잡일을 줄여드립니다
                    </Text>
                    <Text
                        color={"#c9c9c9"}
                        fontSize={"20px"}
                        fontWeight={"semibold"}
                    >
                        정부와 Top Tier VC로부터 100억을 유치한 세무 IT 연구소가
                        세무업무를 효율화합니다.
                    </Text>
                </VStack>
            </HStack>

            <Content
                icon={HiOutlineCalculator}
                title="급여시스템"
                description="상세명세서를 작성하고 일괄 발송까지 한 번에 할 수 있습니다."
                image={require("../../assets/salary.jpg")}
            />
            <Content
                icon={LuHelpingHand}
                title="지원금 Curation"
                description="받을 수 있는 지원금을 자동으로 추천해드립니다."
                image={require("../../assets/curation.jpg")}
            />
            <Content
                icon={HiOutlineChartSquareBar}
                title="월간 Report"
                description="매출, 손익현황 등 운영에 필요한 주요 지표를 한눈에 확인할 수 있습니다."
                image={require("../../assets/report.jpg")}
            />
        </VStack>
    );
}
