import { GrNext } from "react-icons/gr";
import { Box, Image, chakra } from "@chakra-ui/react";
import { BannerText } from "../../components/banner/banner_text";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const BannerImg = ["dentist5.jpg", "dentist2.jpg", "clinic.jpg"];

const Wrapper = styled.div`
    width: 100%;
    height: 800px;
    position: relative;
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
const MotionBox = motion(Box);
export default function MainBanner() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    console.log(index, dir);

    return (
        <Wrapper>
            <GrNext
                style={{
                    fill: "white",
                    position: "absolute",
                    top: "500px",
                    right: "25%",
                    fontSize: "48px",
                    zIndex: "2",
                }}
                cursor="pointer"
                onClick={() => setIndex((prev) => (prev === 2 ? 0 : prev + 1))}
            />
            <AnimatePresence custom={dir}>
                <MotionBox
                    style={{ width: "100%" }}
                    position="absolute"
                    variants={BannerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={dir}
                    key={index}
                    transition={{ duration: 0.5 }}
                >
                    {BannerImg.slice(index, index + 1).map((current) => (
                        <>
                            <Image
                                key={current}
                                mt="152px"
                                w="100%"
                                h="800px"
                                objectFit="cover"
                                src={require(`../../resource/images/${current}`)}
                            />
                            {index === 0 ? (
                                <BannerText index={index}></BannerText>
                            ) : null}
                        </>
                    ))}
                </MotionBox>
            </AnimatePresence>
        </Wrapper>
    );
}
