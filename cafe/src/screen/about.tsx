import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { go_to_top } from "../utils/util";

export default function About() {
    const image = require("../../src/resources/images/about_main_image.jpg");

    useEffect(() => {
        go_to_top(0);
    }, []);

    return (
        <>
            <Helmet>
                <title>About us</title>
            </Helmet>

            <Box w="100%" mt="100px" p="50px">
                <Image w="100%" objectFit="cover" src={image} />
            </Box>
            <Center mt="200px">
                <VStack>
                    <Heading>친근하고 아늑한 분위기를 찾아오다</Heading>
                    <Text>
                        "우리 카페는 친근하고 아늑한 분위기로 고객들을
                        맞이합니다.
                    </Text>
                    <Text>
                        따뜻한 음료와 함께 편안한 시간을 보낼 수 있는 공간을
                        제공합니다."
                    </Text>

                    <Heading mt="50px">신선하고 맛있는 커피와 음료</Heading>
                    <Text>
                        "우리는 최상의 원두로 항상 신선하고 맛있는 커피와 음료를
                        제공합니다.
                    </Text>
                    <Text>
                        고객들이 최고의 맛을 경험하실 수 있도록 끊임없이
                        노력하고 있습니다."
                    </Text>

                    <Heading mt="50px">커뮤니티와 연결</Heading>
                    <Text>
                        "우리 카페는 지역 커뮤니티와 함께 성장하고 있습니다.
                    </Text>
                    <Text>
                        지역 아티스트와 협업하며 문화와 예술을 지원합니다."
                    </Text>

                    <Heading mt="50px">친환경과 지속가능성</Heading>
                    <Text>
                        "우리는 카페 운영에 있어 친환경 및 지속가능한 가치를
                        중요시하고 있습니다.
                    </Text>
                    <Text>
                        재활용 제품을 사용하고 환경을 보호하는 노력을 지속하고
                        있습니다."
                    </Text>

                    <Heading mt="50px">고객 서비스와 웃음</Heading>
                    <Text>
                        "우리의 스탭은 항상 고객에게 웃음과 친절한 서비스를
                        제공합니다.
                    </Text>
                    <Text>당신을 환영합니다!"</Text>

                    <Heading mt="50px">우리의 미션</Heading>
                    <Text>
                        "우리의 미션은 고객들에게 최고의 커피와 음료를
                        제공하면서 커뮤니티와 환경에 기여하는 것입니다.
                    </Text>
                    <Text mb="200px">
                        우리와 함께 어떤 이야기를 나누어보시겠어요?"
                    </Text>
                </VStack>
            </Center>
        </>
    );
}
