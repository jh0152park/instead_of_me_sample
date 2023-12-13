import { Box } from "@chakra-ui/react";
import Introduce from "./introduce";
import Academy from "./academy";
import Expert from "./expert";
import Competitiveness from "./competitiveness";
import { DisplayResolution } from "../../global/recoil";
import { useRecoilValue } from "recoil";
import IntroduceMobile from "./introduceMobile";
import AcademyMobile from "./academyMobile";
import { useEffect } from "react";
import { go_to_scroll_position } from "../../utils/utils";
import ExpertMobile from "./expertMobile";

export default function People() {
    const displayResolution = useRecoilValue(DisplayResolution);

    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            <Box h={"100px"} />
            {displayResolution === "web" ? (
                <>
                    <Introduce />
                    <Academy />
                    <Expert />
                </>
            ) : (
                <>
                    <IntroduceMobile />
                    <AcademyMobile />
                    <ExpertMobile />
                </>
            )}
            <Competitiveness />
        </div>
    );
}
