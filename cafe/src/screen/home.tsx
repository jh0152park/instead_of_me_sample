import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Layer from "../components/home/layer";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>김병섭커피로스터즈 공식홈페이지</title>
            </Helmet>

            <Layer />
        </>
    );
}
