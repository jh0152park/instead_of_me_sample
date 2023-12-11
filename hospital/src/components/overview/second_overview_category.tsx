import { Box, Center, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
    color: #666;
    cursor: pointer;
    overflow: hidden;
    transition: 0.2s ease;
    &:hover {
        div {
            img {
                scale: 1.1;
                transition: 0.3s ease;
            }
        }
    }
`;
const hoverVariant = {
    initial: { scale: 1 },
    // hover :
};

export function SecondOverviewCategory() {
    return (
        <>
            <Center mt="50px" gap="40px">
                <Wrapper>
                    <Center w="375px" h="470px">
                        <Image
                            w="100%"
                            h="100%"
                            backgroundSize="80% 80%"
                            src={require(`../../resource/images/work/overview-1.jpg`)}
                        />
                    </Center>
                </Wrapper>
                <Wrapper>
                    <Center w="375px" h="470px">
                        <Image
                            w="100%"
                            h="100%"
                            backgroundSize="80% 80%"
                            src={require(`../../resource/images/work/overview-2.jpg`)}
                        />
                    </Center>
                </Wrapper>
                <Wrapper>
                    <Center w="375px" h="470px">
                        <Image
                            w="100%"
                            h="100%"
                            src={require(`../../resource/images/work/overview-3.jpg`)}
                        />
                    </Center>
                </Wrapper>
                <Wrapper>
                    <Center w="375px" h="470px">
                        <Image
                            w="100%"
                            h="100%"
                            backgroundSize="80% 80%"
                            src={require(`../../resource/images/work/overview-4.jpg`)}
                        />
                    </Center>
                </Wrapper>
            </Center>
        </>
    );
}
