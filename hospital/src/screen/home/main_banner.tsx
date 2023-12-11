import { Box, Center } from "@chakra-ui/react";
import { BannerText } from "../../components/banner/banner_text";
import { useState } from "react";
import styled from "styled-components";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";

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
export const PageDots = styled.button<{ index: number }>`
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    margin: 0 8px;
    padding: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
    &:nth-child(${(props) => props.index + 1}) {
        width: 50px;
        height: 15px;
        border-radius: 5px;
        background-color: #603988;
    }
`;
export default function MainBanner() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    const [leaving, setLeaving] = useState(false);
    function toggleLeaving() {
        setLeaving((prev) => !prev);
    }
    function onClickNext() {
        if (leaving) return;
        setLeaving(true);
        setDir(1);
        setIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }
    function onClickPrev() {
        if (leaving) return;
        setLeaving(true);
        setDir(-1);
        setIndex((prev) => (prev === 0 ? 2 : prev - 1));
    }
    function changeIndex(pageNumber: number) {
        if (pageNumber > index) setDir(1);
        else setDir(-1);
        setLeaving((prev) => !prev);
        setIndex(pageNumber);
    }
    return (
        <>
            <Box w="100%" h="800px" position="relative">
                <Btn
                    onClick={onClickNext}
                    style={{
                        right: "20%",
                    }}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline points="7 2 17 12 7 22"></polyline>
                </Btn>
                <AnimatePresence
                    custom={dir}
                    initial={false}
                    onExitComplete={toggleLeaving}
                >
                    <Box
                        as={motion.div}
                        // drag="x"
                        // style={{ x: xValue }}
                        w="100%"
                        position="absolute"
                        variants={BannerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={dir}
                        key={index}
                        transition="0.2s linear"
                        cursor="pointer"
                    >
                        {BannerImg.slice(index, index + 1).map((current) => (
                            <>
                                <Box
                                    key={current}
                                    mt="152px"
                                    h="800px"
                                    backgroundSize="cover"
                                    backgroundImage={require(`../../resource/images/${current}`)}
                                >
                                    {index === 0 ? (
                                        <BannerText index={index}></BannerText>
                                    ) : null}
                                </Box>
                            </>
                        ))}
                        <Center
                            position="absolute"
                            bottom="20px"
                            left="50%"
                            ml="-100px"
                        >
                            <>
                                {[0, 1, 2].map((i) => (
                                    <PageDots
                                        index={index}
                                        onClick={() => changeIndex(i)}
                                    ></PageDots>
                                ))}
                            </>
                        </Center>
                    </Box>
                </AnimatePresence>

                <Btn
                    onClick={onClickPrev}
                    style={{
                        left: "20%",
                    }}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline
                        points="7 2 17 12 7 22"
                        transform="matrix(-1 0 0 1 24 0)"
                    ></polyline>
                </Btn>
            </Box>
        </>
    );
}
