import { Box } from "@chakra-ui/react";
import Introduce from "./introduce";
import Academy from "./academy";

export default function People() {
    return (
        <div>
            <Box h={"100px"} />
            <Introduce />
            <Academy />
        </div>
    );
}
