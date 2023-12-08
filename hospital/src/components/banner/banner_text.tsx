import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const BannerBox = styled(motion.div)`
    position: absolute;
    top: 37%;
    margin-left: -600px;
    left: 52%;
`;
const BannerH2 = styled(motion.h2)`
    font-size: 42px;
    color: #333;
    p {
        font-style: italic;
    }
`;
const BannerH1 = styled(motion.h1)`
    font-size: 64px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 3rem;
    color: #603988;
`;
const BannerH3 = styled(motion.h3)`
    font-size: 28px;
    color: #333;
`;
const BannerVariants = {
    start: { opacity: 0, x: -700 },
    end: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1.5,
            delayChildren: 0.4,
            staggerChildren: 0.3,
        },
    },
};
export function BannerText() {
    return (
        <>
            <BannerBox variants={BannerVariants} initial="start" animate="end">
                <BannerH2 variants={BannerVariants}>
                    <p>Since 2013</p>
                    <span>10년 이상 한자리를 지켜온</span>
                </BannerH2>
                <BannerH1 variants={BannerVariants}>대한민국치과</BannerH1>
                <BannerH3 variants={BannerVariants}>
                    - 서울대 출신 의학박사 교정전문의
                </BannerH3>
                <BannerH3 variants={BannerVariants}>
                    - 1인 대표원장 1:1 책임진료
                </BannerH3>
            </BannerBox>
        </>
    );
}
