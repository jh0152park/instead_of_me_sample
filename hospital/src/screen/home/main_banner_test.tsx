import { Box, Image, chakra } from "@chakra-ui/react";
import { BannerText } from "../../components/banner/banner_text";
import { useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const BannerImg = ["dentist5.jpg", "dentist2.jpg", "clinic.jpg"];

const Btn = styled.svg`
    position: absolute;
    top: 500px;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 2;
    polyline {
        fill: transparent;
        stroke: white;
        stroke-width: 2;
    }
`;
const BannerVariants = {
    hidden: (dir: number) => ({
        x: window.outerWidth * dir,
    }),
    visible: {
        x: 0,
    },
    exit: (dir: number) => ({
        x: -window.outerWidth * dir,
    }),
};
export default function MainBannerTest() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    function onClickNext() {
        setDir(1);
        setIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }
    function onClickPrev() {
        setDir(-1);
        setIndex((prev) => (prev === 0 ? 2 : prev - 1));
    }

    return (
        <>
            <Box
                as={motion.div}
                h="800px"
                w="100%"
                position="relative"
                drag="x"
                zIndex="22"
                top="152px"
            >
                <AnimatePresence custom={dir} initial={false}>
                    <Box
                        as={motion.div}
                        w="100%"
                        position="absolute"
                        variants={BannerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={dir}
                        transition="0.2s linear"
                        cursor="pointer"
                        backgroundColor="blue"
                    >
                        <Box
                            w="100%"
                            h="800px"
                            backgroundSize="cover"
                            backgroundImage={require(`../../resource/images/dentist5.jpg`)}
                        />
                    </Box>
                </AnimatePresence>
            </Box>
        </>
    );
}
