import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Banner from "../components/home/banner";
import Products from "../components/home/products";
import Instagram from "../components/home/instagram";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>김병섭커피로스터즈 공식홈페이지</title>
            </Helmet>

            <Banner />
            <Products />
            <Instagram />
        </>
    );
}
