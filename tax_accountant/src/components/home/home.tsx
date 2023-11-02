import Banner from "./banner";
import Worry from "./worry";
import BlueSection from "./blueSection";
import { Box } from "@chakra-ui/react";

export default function Home() {
    return (
        <div>
            <Box h={"100px"} />
            <Banner />
            <Worry />
            <BlueSection />
        </div>
    );
}
