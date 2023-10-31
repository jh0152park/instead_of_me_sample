import { Center, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Cafes() {
    const image =
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image5.jpg?raw=true";

    return (
        <Center w="100%" h="100vh" mt="100px">
            <HStack alignItems="flex-start">
                <Image w="700px" h="450px" objectFit="cover" src={image} />
                <VStack ml="60px" alignItems="flex-start">
                    <Heading>CAFES</Heading>
                    <HStack spacing="20px" mt="10px">
                        <Text>서울본점</Text>
                        <Text>분당점</Text>
                        <Text>수원점</Text>
                        <Text>일산점</Text>
                        <Text>하남점</Text>
                    </HStack>

                    <VStack
                        alignItems="flex-start"
                        mt="20px"
                        color="rgba(255, 255, 255, 0.5)"
                        fontSize="13px"
                    >
                        <Text my="20px">
                            서울특별시 강남구 강남로 123 카페 서울본점
                        </Text>
                        <Text>평일/주말 00:00 ~ 00:00</Text>
                    </VStack>

                    <VStack fontSize="13px" alignItems="flex-start" mt="30px">
                        <Text>1F - 카페 공간</Text>
                        <Text>2F - 루프탑 공간</Text>
                    </VStack>

                    <Text mt="50px" fontSize="13px">
                        단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/녀 화장실
                        구분
                    </Text>
                </VStack>
            </HStack>
        </Center>
    );
}
