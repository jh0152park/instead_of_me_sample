import { Helmet } from "react-helmet";
import MainBannerTest from "./home/main_banner_test";
import MainBanner from "./home/main_banner";
import { FirstOverView } from "./home/overview/first_overview";
import { SecondOverview } from "./home/overview/second_overview";
import { ThirdOverView } from "./home/overview/third_overview";
import { FourthOverView } from "./home/overview/fourth_overview";
import { Footer } from "../components/footer";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>대한민국치과</title>
            </Helmet>
            <MainBanner />
            <FirstOverView />
            <SecondOverview />
            <ThirdOverView />
            <FourthOverView />
        </>
    );
}
