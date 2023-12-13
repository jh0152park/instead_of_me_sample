import { Center, Text, VStack } from "@chakra-ui/react";
import ServiceItem from "./serviceItem";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineCalculator } from "react-icons/hi";
import { FaHubspot } from "react-icons/fa";
import { TbReceiptTax } from "react-icons/tb";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

export default function TaxService() {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <VStack
            w={displayResolution === "web" ? "300px" : "220px"}
            h={displayResolution === "web" ? "300px" : "220px"}
            backgroundColor={"white"}
            borderRadius={"15px"}
            display={"flex"}
            overflow={"hidden"}
            border={"1px solid #1265F5"}
        >
            <Center w={"100%"} flex={1} backgroundColor={"#1265F5"}>
                <Text
                    color={"white"}
                    fontSize={displayResolution === "web" ? "18px" : "12px"}
                    fontWeight={"bold"}
                >
                    기본 세무 서비스
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
                    icon={IoChatbubblesOutline}
                    description="실시간 카톡/전화/방문 채널"
                />
                <ServiceItem
                    icon={HiOutlineCalculator}
                    description="세무 상담 및 장부 작성"
                />
                <ServiceItem
                    icon={FaHubspot}
                    description="급여, 원천세, 4대 보험 신고"
                />
                <ServiceItem icon={TbReceiptTax} description="세무신고 대행" />
            </VStack>
        </VStack>
    );
}
