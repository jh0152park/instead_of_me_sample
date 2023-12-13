import { Box } from "@chakra-ui/react";
import Introduce from "./introduce";
import Academy from "./academy";
import Expert from "./expert";
import Competitiveness from "./competitiveness";
import { DisplayResolution } from "../../global/recoil";
import { useRecoilValue } from "recoil";

export default function People() {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <div>
            <Box h={"100px"} />
            {displayResolution === "web" ? (
                <>
                    <Introduce />
                    <Academy />
                    <Expert />
                    <Competitiveness />
                </>
            ) : (
                <></>
            )}
        </div>
    );
}
