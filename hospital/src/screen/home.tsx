import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import MainBanner from "./home/main_banner";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>대한민국치과</title>
            </Helmet>
            <MainBanner />
        </>
    );
}
