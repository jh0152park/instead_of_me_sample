import { Box, Center, Flex, HStack, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Promise } from "./about/promise";

const InnerBox = styled.div<{ index?: number | null }>`
    width: 100%;
    border-right: 1px solid #bfbfbf;
    padding: 8px 20px;
    cursor: pointer;
    text-align: center;

    &:last-child {
        border-right: none;
    }
    &:hover {
        background-color: #36353d;
        color: white;
    }
    &:nth-child(${(props) => props.index}) {
        background-color: #36353d;
        color: white;
    }
`;

export function About() {
    const location = useLocation().pathname;
    let index: number | null = 0;
    index = location === "/about" ? 1 : null;
    return (
        <>
            <Box
                position="relative"
                mt="154px"
                w="100%"
                h="300px"
                backgroundSize="cover"
                backgroundImage={require("../resource/images/work/work4.jpg")}
            >
                <Center
                    maxWidth="1200px"
                    h="100%"
                    m=" auto"
                    justifyContent="space-between"
                    py="60px"
                    flexDir="column"
                >
                    <Heading
                        mt="30px"
                        fontSize="32px"
                        color="#bfbfbf"
                        letterSpacing="14px"
                        fontWeight="200"
                    >
                        KOREA ORTHODONTIC CLINIC
                    </Heading>
                    <Flex backgroundColor="white" w="80%" fontSize="20px">
                        <InnerBox index={index}>우리의 약속</InnerBox>
                        <InnerBox>진료시간 안내</InnerBox>
                        <InnerBox>인테리어</InnerBox>
                        <InnerBox>오시는길</InnerBox>
                        <InnerBox>주차안내</InnerBox>
                    </Flex>
                </Center>
            </Box>
            <Promise />
        </>
    );
}
