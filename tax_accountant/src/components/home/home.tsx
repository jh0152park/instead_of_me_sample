import Banner from "./banner";
import Worry from "./worry";
import BlueSection from "./blueSection";
import { Box, VStack } from "@chakra-ui/react";
import NumberOne from "./numberOne";
import NumberTwo from "./numberTwo";
import NumberThree from "./numberThree";
import Pay from "./pay";
import Consulting from "./consulting";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../../global/recoil";
import BannerMobile from "./bannerMobile";
import WorryMobile from "./worryMobile";
import NumberOneMobile from "./numberOneMobile";
import NumberTwoMobile from "./numberTwoMobile";
import NumberThreeMobile from "./numberThreeMobile";
import PayMobile from "./payMobile";
import ConsultingMobile from "./consultingMobile";

export default function Home() {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <div>
            <Box h={"100px"} />
            {displayResolution === "web" ? (
                <>
                    <Banner />
                    <Worry />
                    <BlueSection />
                    <VStack spacing={0}>
                        <NumberOne />
                        <NumberTwo />
                        <NumberThree />
                    </VStack>
                    <Pay />
                    <Consulting />
                </>
            ) : (
                <>
                    <BannerMobile />
                    <WorryMobile />
                    <BlueSection />
                    <VStack spacing={0}>
                        <NumberOneMobile />
                        <NumberTwoMobile />
                        <NumberThreeMobile />
                    </VStack>
                    <PayMobile />
                    <ConsultingMobile />
                </>
            )}
        </div>
    );
}
