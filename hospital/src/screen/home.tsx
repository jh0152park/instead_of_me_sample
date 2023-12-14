import { Helmet } from "react-helmet";
import MainBannerTest from "./home/main_banner_test";
import MainBanner from "./home/main_banner";
import { FirstOverView } from "./home/main_overview/first_overview";
import { SecondOverview } from "./home/main_overview/second_overview";
import { ThirdOverView } from "./home/main_overview/third_overview";
import { FourthOverView } from "./home/main_overview/fourth_overview";

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
