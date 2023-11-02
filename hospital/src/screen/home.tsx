import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Buffer from "./home/buffer";
import MainBanner from "./home/main_banner";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>My Hospital</title>
            </Helmet>

            <Buffer />
            <MainBanner />
        </>
    );
}
