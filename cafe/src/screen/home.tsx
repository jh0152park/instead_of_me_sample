import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Banner from "../components/home/banner";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>김병섭커피로스터즈 공식홈페이지</title>
            </Helmet>

            <Banner />
        </>
    );
}
