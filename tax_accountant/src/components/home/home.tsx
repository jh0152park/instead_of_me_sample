import Banner from "./banner";
import Worry from "./worry";
import BlueSection from "./blueSection";
import { Box, VStack } from "@chakra-ui/react";
import NumberOne from "./numberOne";

export default function Home() {
    return (
        <div>
            <Box h={"100px"} />
            <Banner />
            <Worry />
            <BlueSection />
            <VStack>
                <NumberOne />
            </VStack>
        </div>
    );
}
