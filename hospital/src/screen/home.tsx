import { Helmet } from "react-helmet";
import MainBannerTest from "./home/main_banner_test";
import MainBanner from "./home/main_banner";
import { FirstOverView } from "./home/first_overview";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>대한민국치과</title>
            </Helmet>
            <MainBanner />
            <FirstOverView />
        </>
    );
}
