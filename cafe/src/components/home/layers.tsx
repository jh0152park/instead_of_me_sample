import { VStack } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { go_to_id, sleep } from "../../utils/util";
import Layer1 from "./layer1";
import Layer2 from "./layer2";
import Layer3 from "./layer3";
import Layer4 from "./layer4";

export default function Layers() {
    const { scrollY } = useScroll();

    const scrollTH = 25;
    const [scrollStack, setScrollStack] = useState<number>(0);
    const [prevY, setPrevY] = useState<number>(0);
    const [layer, setLayer] = useState<number>(1);

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(`y: ${latest}`);
        if (latest < 0 || latest > 2800) return;

        setScrollStack((prev) => prev + 1);
        if (scrollStack > scrollTH) {
            if (latest > prevY) {
                // go to down
                if (layer >= 4) {
                    go_to_id("layer4");
                    return;
                }
                go_to_id(`layer${layer + 1}`);
                setLayer((prev) => prev + 1);
            } else {
                //go to up
                if (layer <= 1) {
                    go_to_id("layer1");
                    return;
                }
                go_to_id(`layer${layer - 1}`);
                setLayer((prev) => prev - 1);
            }
            setScrollStack(0);
        }
        setPrevY(latest);
    });

    useEffect(() => {
        if (!scrollStack) sleep(300);
    }, [scrollStack]);

    return (
        <VStack w="100%">
            <Layer1 />
            <Layer2 />
            <Layer3 />
            <Layer4 />
        </VStack>
    );
}
