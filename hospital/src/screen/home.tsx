import { Helmet } from "react-helmet";
import MainBanner from "./home/main_banner";
import { FirstOverView } from "./home/main_overview/first_overview";
import { SecondOverview } from "./home/main_overview/second_overview";
import { ThirdOverView } from "./home/main_overview/third_overview";
import { FourthOverView } from "./home/main_overview/fourth_overview";
import { useRecoilValue } from "recoil";
import { displayResolution } from "../global/project_commin";
import MainBannerMobile from "./home/main_banner_mobile";

export default function Home() {
    const setDisplayResolution = useRecoilValue(displayResolution);
    return (
        <>
            <Helmet>
                <title>대한민국치과</title>
            </Helmet>
            {setDisplayResolution === "web" ? (
                <>
                    <MainBanner />
                    <FirstOverView />
                    <SecondOverview />
                    <ThirdOverView />
                    <FourthOverView />
                </>
            ) : (
                <>
                    <MainBannerMobile />
                </>
            )}
        </>
    );
}
