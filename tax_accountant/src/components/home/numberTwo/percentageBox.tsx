import { VStack } from "@chakra-ui/react";
import PercentageLine from "./percentageLine";

export default function PercentageBox() {
    return (
        <VStack>
            <PercentageLine
                textColor="#1265F5"
                isGradient
                percentText="40%"
                lineWidth="500px"
                text="실시간 카톡 등 편리한 소통"
            />
            <PercentageLine
                textColor="#1265F5"
                isGradient
                percentText="27%"
                lineWidth="350px"
                text="잘 챙겨주는 업무 처리"
            />
            <PercentageLine lineWidth="270px" text="IT 서비스를 통한 편리함" />
            <PercentageLine lineWidth="180px" text="체계적인 관리" />
            <PercentageLine lineWidth="100px" text="부가 서비스" />
        </VStack>
    );
}
