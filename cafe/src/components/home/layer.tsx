import { Box, Image, VStack } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { go_to_id, sleep } from "../../utils/util";

export default function Layer() {
    const images = [
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image1.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image2.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image3.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image4.jpg?raw=true",
    ];

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

    console.log(`scroll stack: ${scrollStack}`);
    console.log(`layer: ${layer}`);
    return (
        <VStack w="100%">
            <Box w="100%" id="layer1">
                <Image w="100%" objectFit="cover" src={images[0]} />
            </Box>
            <Box w="100%" id="layer2">
                <Image w="100%" objectFit="cover" src={images[1]} />
            </Box>
            <Box w="100%" id="layer3">
                <Image w="100%" objectFit="cover" src={images[2]} />
            </Box>
            <Box w="100%" id="layer4">
                <Image w="100%" objectFit="cover" src={images[3]} />
            </Box>
        </VStack>
    );
}
