import { VStack } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { go_to_id, sleep } from "../../utils/util";
import Layer1 from "./layer1";
import Layer2 from "./layer2";
import Layer3 from "./layer3";
import Layer4 from "./layer4";

let currentLayer = 1;
let lastScrollY = 0;
let lastDirection = "";
let scrollStack = 0;
const scrollTH = 10;
export default function Layers() {
    // window.addEventListener("scroll", (e) => {
    //     const scrollY = window.scrollY;
    //     const direction = scrollY > lastScrollY ? "down" : "up";

    //     if (direction === lastDirection) {
    //         scrollStack++;
    //     } else {
    //         scrollStack = 0;
    //     }

    //     if (scrollStack > scrollTH) {
    //         scrollStack = 0;
    //         if (direction === "down") {
    //             currentLayer =
    //                 currentLayer < 4 ? currentLayer + 1 : currentLayer;
    //         } else {
    //             currentLayer =
    //                 currentLayer > 1 ? currentLayer - 1 : currentLayer;
    //         }
    //         go_to_id(`layer${currentLayer}`);
    //         console.log(`detected, go to layer${currentLayer}`);
    //     }
    //     lastScrollY = scrollY;
    //     lastDirection = direction;
    // });

    return (
        <VStack w="100%">
            <Layer1 />
            <Layer2 />
            <Layer3 />
            <Layer4 />
        </VStack>
    );
}
