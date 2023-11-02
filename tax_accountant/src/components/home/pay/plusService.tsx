import { Center, Text, VStack } from "@chakra-ui/react";
import ServiceItem from "./serviceItem";
import { LuHelpingHand } from "react-icons/lu";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { GiSandsOfTime } from "react-icons/gi";
import { TfiMedall } from "react-icons/tfi";

export default function PlusService() {
    return (
        <VStack
            w={"600px"}
            h={"300px"}
            backgroundColor={"white"}
            borderRadius={"15px"}
            display={"flex"}
            overflow={"hidden"}
            border={"1px solid #1265F5"}
        >
            <Center w={"100%"} flex={1} backgroundColor={"#1265F5"}>
                <Text color={"white"} fontSize={"18px"} fontWeight={"bold"}>
                    무료 부가 서비스
                </Text>
            </Center>

            <VStack
                w={"100%"}
                flex={4}
                justifyContent={"center"}
                alignItems={"center"}
                px={"20px"}
                py={"10px"}
            >
                <ServiceItem
                    icon={HiOutlineChartSquareBar}
                    description="자체 세무 서비스 : 보고서, 급여처리, 세무 조회, 거래관리, 증명 발급"
                />
                <ServiceItem
                    icon={LuHelpingHand}
                    description="IOM 지원금 Curation : 정기 절세 진단 및 노무 지원금 추천"
                />
                <ServiceItem
                    icon={GiSandsOfTime}
                    description="그룹 컨설팅 제공 : 노무사, 변호사 등 전문 무료 컨설팅"
                />
                <ServiceItem
                    icon={TfiMedall}
                    description="IOM Benefit 제공 : Google Workplace 15% 등 각종 서비스 할인"
                />
            </VStack>
        </VStack>
    );
}
