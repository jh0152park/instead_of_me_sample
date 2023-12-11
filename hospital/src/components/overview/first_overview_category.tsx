import { Box, Center, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
    color: #666;
    cursor: pointer;
    &:hover {
        div {
            border: 5px solid #603988;
            p {
                font-size: 68px;
                transition: 0.2s linear;
            }
            img {
                filter: grayscale(0%);
                scale: 1.4;
                transition: 0.3s linear;
            }
            transition: 0.2s linear;
        }

        color: #603988;
    }
`;

export function FirstOverviewCategory() {
    return (
        <>
            <Center mt="100px" gap="30px">
                <Wrapper>
                    <Center w="210px" h="210px" border="1px solid #c1c1c1">
                        <Text fontSize="60px" lineHeight="1" fontWeight="700">
                            20
                            <Text fontWeight="400">YEARS</Text>
                        </Text>
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        치과 진료만 20년 이상
                    </Text>
                </Wrapper>
                <Wrapper>
                    <Center w="210px" h="210px" border="1px solid #c1c1c1">
                        <Text fontSize="60px" lineHeight="1" fontWeight="400">
                            SINCE
                            <Text fontWeight="700">2003</Text>
                        </Text>
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        2003년부터 지켜온 치과
                    </Text>
                </Wrapper>
                <Wrapper>
                    <Center w="210px" h="210px" border="1px solid #c1c1c1">
                        <Image
                            w="100%"
                            h="100%"
                            filter="grayscale(100%)"
                            src={require(`../../resource/images/yonsei_logo.png`)}
                        />
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        연세대학교 / 의학박사
                    </Text>
                </Wrapper>
                <Wrapper>
                    <Center w="210px" h="210px" border="1px solid #c1c1c1">
                        <Image
                            w="100%"
                            h="100%"
                            filter="grayscale(100%)"
                            src={require(`../../resource/images/보건복지부_로고.png`)}
                        />
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        치과 전문의
                    </Text>
                </Wrapper>
            </Center>
        </>
    );
}
