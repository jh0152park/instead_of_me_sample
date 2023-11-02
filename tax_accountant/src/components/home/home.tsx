import Banner from "./banner";
import Worry from "./worry";
import BlueSection from "./blueSection";
import { Box, VStack } from "@chakra-ui/react";
import NumberOne from "./numberOne";
import NumberTwo from "./numberTwo";

export default function Home() {
    return (
        <div>
            <Box h={"100px"} />
            <Banner />
            <Worry />
            <BlueSection />
            <VStack spacing={0}>
                <NumberOne />
                <NumberTwo />
            </VStack>
        </div>
    );
}
