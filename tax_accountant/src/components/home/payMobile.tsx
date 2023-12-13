import { Text, VStack } from "@chakra-ui/react";
import BlueButton from "../common/blueButton";
import { FaPlus } from "react-icons/fa";
import TaxService from "./pay/taxService";
import PlusService from "./pay/plusService";

export default function PayMobile() {
    return (
        <VStack
            w={"100%"}
            backgroundColor={"#eff6ff"}
            spacing={"30px"}
            px={"30px"}
            py={"50px"}
        >
            <Text fontSize={"20px"} fontWeight={"bold"} textAlign={"center"}>
                월 8만부터 시작하는{" "}
                <span style={{ color: "#1265F5" }}>합리적인 가격</span>에
                <br />
                각종 부가 서비스까지!
            </Text>

            <VStack spacing={"20px"}>
                <TaxService />
                <FaPlus fontSize={"20px"} color="#1265F5" />
                <PlusService />
            </VStack>

            <BlueButton text="무료 세무 상담받기" />
        </VStack>
    );
}
