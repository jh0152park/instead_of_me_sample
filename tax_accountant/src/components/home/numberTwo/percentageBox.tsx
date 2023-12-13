import { VStack } from "@chakra-ui/react";
import PercentageLine from "./percentageLine";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

export default function PercentageBox() {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <VStack
            transform={displayResolution === "web" ? "none" : "rotate(-90deg)"}
            mt={displayResolution === "web" ? "0" : "100px"}
        >
            <PercentageLine
                textColor="#1265F5"
                isGradient
                percentText="40%"
                lineWidth={displayResolution === "web" ? "500px" : "200px"}
                text="실시간 카톡 등 편리한 소통"
            />
            <PercentageLine
                textColor="#1265F5"
                isGradient
                percentText="27%"
                lineWidth={displayResolution === "web" ? "350px" : "140px"}
                text="잘 챙겨주는 업무 처리"
            />
            <PercentageLine
                lineWidth={displayResolution === "web" ? "270px" : "108px"}
                text="IT 서비스를 통한 편리함"
            />
            <PercentageLine
                lineWidth={displayResolution === "web" ? "180px" : "72px"}
                text="체계적인 관리"
            />
            <PercentageLine
                lineWidth={displayResolution === "web" ? "100px" : "40px"}
                text="부가 서비스"
            />
        </VStack>
    );
}
