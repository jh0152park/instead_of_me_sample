import { Center, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { go_to_top } from "../utils/util";

export default function Cafes() {
    const cafes = [
        {
            name: "서울본점",
            address: "서울특별시 강남구 강남로 123 카페 서울본점",
            worktime: "평일/주말 00:00 ~ 00:00",
            description:
                "단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/여 화장실 구분",
            image: require("../resources/images/image1.jpg"),
            map: require("../resources/images/locations/seoul.png"),
            information: ["1F - 카페 공간", "2F - 루프탑 공간"],
        },
        {
            name: "분당점",
            address: "경기 성남시 분당구 분당로 50 분당점",
            worktime: "평일/주말 09:00 ~ 22:00",
            description:
                "단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/여 화장실 구분",
            image: require("../resources/images/image2.jpg"),
            map: require("../resources/images/locations/boondang.png"),
            information: ["1F - 카페 공간", "2F - 카페 공간", "3F - 카페 공간"],
        },
        {
            name: "수원점",
            address: "경기 수원시 영통구 효원로 407 수원점",
            worktime: "평일/주말 12:00 ~ 22:00",
            description:
                "핸드드립, 단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/여 화장실 구분",
            image: require("../resources/images/image3.jpg"),
            map: require("../resources/images/locations/suwon.png"),
            information: [
                "B1 - 주차장, 1F - 로스팅 룸",
                "2F - 카페 공간 공간",
                "3F - 아카데미",
                "4F - 루프탑 공간",
            ],
        },
        {
            name: "일산점",
            address: "경기 고양시 일산서구 경의로 672 일산점",
            worktime: "평일/주말 12:00 ~ 20:00",
            description:
                "단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/여 화장실 구분",
            image: require("../resources/images/image4.jpg"),
            map: require("../resources/images/locations/ilsan.png"),
            information: ["1F - 커피바 / 카페 공간", "2F - 루프탑 공간"],
        },
        {
            name: "하남점",
            address: "경기 하남시 미사대로 750 하남점",
            worktime: "평일/주말 10:00 ~ 22:00",
            description: "단체석, 포장, 테이크아웃, 남/여 화장실 구분",
            image: require("../resources/images/image5.jpg"),
            map: require("../resources/images/locations/hanam.png"),
            information: ["1F - 카페 공간"],
        },
    ];

    const image =
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image5.jpg?raw=true";

    useEffect(() => {
        go_to_top(0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Cafes</title>
            </Helmet>

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

                        <VStack
                            fontSize="13px"
                            alignItems="flex-start"
                            mt="30px"
                        >
                            <Text>1F - 카페 공간</Text>
                            <Text>2F - 루프탑 공간</Text>
                        </VStack>

                        <Text mt="50px" fontSize="13px">
                            단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/녀
                            화장실 구분
                        </Text>
                    </VStack>
                </HStack>
            </Center>
        </>
    );
}
