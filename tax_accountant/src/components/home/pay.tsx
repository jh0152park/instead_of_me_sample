import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import TaxService from "./pay/taxService";
import { FaPlus } from "react-icons/fa";
import PlusService from "./pay/plusService";
import BlueButton from "../common/blueButton";

export default function Pay() {
    return (
        <Center w={"100dvw"} h={"800px"} backgroundColor={"#eff6ff"}>
            <VStack spacing={"80px"}>
                <Text
                    fontSize={"60px"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    월 8만부터 시작하는{" "}
                    <span style={{ color: "#1265F5" }}>합리적인 가격</span>에
                    <br />
                    각종 부가 서비스까지!
                </Text>

                <HStack spacing={"50px"}>
                    <TaxService />
                    <FaPlus fontSize={"30px"} color="#1265F5" />
                    <PlusService />
                </HStack>

                <BlueButton text="무료 세무 상담받기" />
            </VStack>
        </Center>
    );
}
