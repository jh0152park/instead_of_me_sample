import { Box } from "@chakra-ui/react";
import Introduce from "./introduce";
import Academy from "./academy";
import Expert from "./expert";
import Competitiveness from "./\bcompetitiveness";

export default function People() {
    return (
        <div>
            <Box h={"100px"} />
            <Introduce />
            <Academy />
            <Expert />
            <Competitiveness />
        </div>
    );
}
