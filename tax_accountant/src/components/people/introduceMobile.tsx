import { Box, Center, VStack, Text, Image } from "@chakra-ui/react";

export default function IntroduceMobile() {
    return (
        <Box
            w={"100%"}
            h={"300px"}
            background={
                "linear-gradient(-150deg, #c9c9c960,#c9c9c980, #00000030, #00000050 ,#00000080 )"
            }
            position={"relative"}
            px={"30px"}
            py={"50px"}
        >
            <VStack alignItems={"flex-start"} spacing={"15px"}>
                <Text fontSize={"12px"}>홍길동 대표 세무사</Text>
                <Text fontSize={"24px"} lineHeight={"1.2"} fontWeight={"bold"}>
                    꿈을 찾아주는
                    <br />
                    세무가 되려합니다.
                </Text>

                <Center
                    w={"80px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"5px"}
                    cursor={"pointer"}
                >
                    <Text fontSize={"10px"}>자세히 보기</Text>
                </Center>
            </VStack>
            <Image
                src={require("../../assets/business_man.png")}
                w={"150px"}
                objectFit={"cover"}
                position={"absolute"}
                bottom={0}
                right={30}
            />
        </Box>
    );
}
