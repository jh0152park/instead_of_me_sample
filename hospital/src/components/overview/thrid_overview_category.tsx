import { Box, Center, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
    width: 370px;
    height: 370px;
    position: relative;
    color: #666;
    cursor: pointer;
    overflow: hidden;
`;
const Wrapper = styled(motion.div)`
    width: 370px;
    height: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const InnerBox = styled(motion.div)`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    color: white;
    background-color: rgba(64, 58, 57, 0.8);
    font-size: 24px;
`;
const InnerText = styled.p`
    position: absolute;
    top: 22px;
    left: 13px;
    font-size: 32px;
    font-weight: 100;
`;
const hoverVariant = {
    initial: { scale: 1 },
    hover: {
        scale: 1.1,
        width: "100%",
        height: "100%",
        transition: {
            duration: 0.5,
        },
    },
    exit: { scale: 1 },
};

export function ThirdOverviewCategory() {
    return (
        <>
            <Center mt="20px" gap="40px">
                <Container>
                    <Wrapper
                        variants={hoverVariant}
                        whileHover="hover"
                        initial="initial"
                        layoutId="first"
                    >
                        <Image
                            w="100%"
                            h="100%"
                            src={require(`../../resource/images/work/overview-5.jpg`)}
                        />
                        <InnerBox>
                            <Text as={motion.p} layoutId="first" pt="10px">
                                교정전후사진
                            </Text>
                        </InnerBox>
                    </Wrapper>
                </Container>
                <Container>
                    <Image
                        as={motion.img}
                        variants={hoverVariant}
                        whileHover="hover"
                        initial="initial"
                        w="100%"
                        h="100%"
                        src={require(`../../resource/images/work/overview-6.jpg`)}
                    />
                    <InnerBox></InnerBox>
                </Container>
                <Container>
                    <Image
                        as={motion.img}
                        variants={hoverVariant}
                        whileHover="hover"
                        initial="initial"
                        w="100%"
                        h="100%"
                        src={require(`../../resource/images/work/overview-7.jpg`)}
                    />
                    <InnerBox></InnerBox>
                </Container>
                <Container>
                    <Image
                        as={motion.img}
                        variants={hoverVariant}
                        whileHover="hover"
                        initial="initial"
                        w="100%"
                        h="100%"
                        src={require(`../../resource/images/work/overview-8.jpg`)}
                    />
                    <InnerBox></InnerBox>
                </Container>
            </Center>
        </>
    );
}
