import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { FirstOverviewCategory } from "../../components/overview/first_overview_category";

export function FirstOverView() {
    return (
        <>
            <Box
                position="relative"
                top="152px"
                mt="100px"
                w="100%"
                h="800px"
                textAlign="center"
            >
                <Box
                    w="1200px"
                    margin="0 auto"
                    position="relative"
                    textAlign="center"
                >
                    <Box
                        w="100%"
                        position="absolute"
                        top="40px"
                        borderBottom="2px"
                        borderStyle="solid"
                        borderColor="#c1c1c1"
                    ></Box>
                    <Center
                        position="relative"
                        left="30%"
                        w="500px"
                        backgroundColor="white"
                        px="20px"
                        fontSize="40px"
                        fontWeight="100"
                        color="#603988"
                    >
                        <Text
                            verticalAlign="middle"
                            lineHeight="1em"
                            px="15px"
                            fontSize="78px"
                            color="white"
                            backgroundColor="#603988"
                            fontWeight="600"
                        >
                            1
                            <em style={{ fontSize: "41px", fontWeight: "400" }}>
                                %
                            </em>
                        </Text>
                        <Text mx="10px">의</Text>
                        <Text fontWeight="600" mr="10px">
                            프리미엄
                        </Text>
                        의료진
                    </Center>
                    <Text
                        color="#bfbfbf"
                        fontWeight="100"
                        letterSpacing="12px"
                        margin="15px 0 60px 50px"
                    >
                        KOREA ORTHODONTIC CLINIC
                    </Text>
                </Box>
                <Heading
                    color="#444"
                    fontWeight="700"
                    fontSize="22px"
                    mb="20px"
                >
                    치과 진료만 2003년부터...
                </Heading>
                <Text fontSize="18px" color="#444" display="block">
                    연세대 치대 출신 의학박사 치과전문의가 경험을 바탕으로
                    <br></br>
                    환자분들이 만족하실 수 있는 최상의 치료결과를 약속드립니다.
                </Text>
                <FirstOverviewCategory></FirstOverviewCategory>
            </Box>
        </>
    );
}