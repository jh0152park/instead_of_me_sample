import { VStack } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { go_to_id, sleep } from "../../utils/util";
import Layer1 from "./layer1";
import Layer2 from "./layer2";
import Layer3 from "./layer3";
import Layer4 from "./layer4";

export default function Layers() {
    const images = [
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image1.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image2.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image3.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image4.jpg?raw=true",
    ];

    return (
        <VStack w="100%">
            <Layer1 />
            <Layer2 />
            <Layer3 />
            <Layer4 />
        </VStack>
    );
}
