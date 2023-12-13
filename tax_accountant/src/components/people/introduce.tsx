import { Center, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Introduce() {
    return (
        <HStack
            w={"100dvw"}
            h={"700px"}
            background={
                "linear-gradient(-150deg, #c9c9c960,#c9c9c980, #00000020, #00000050 ,#00000080 )"
            }
            justifyContent={"space-between"}
            px={"350px"}
            position={"relative"}
        >
            <VStack alignItems={"flex-start"} spacing={"25px"}>
                <Text fontSize={"24px"}>홍길동 대표 세무사</Text>
                <Text fontSize={"48px"} lineHeight={"1.2"} fontWeight={"bold"}>
                    꿈을 찾아주는
                    <br />
                    세무가 되려합니다.
                </Text>

                <Center
                    w={"120px"}
                    h={"60px"}
                    border={"1px solid black"}
                    borderRadius={"10px"}
                    cursor={"pointer"}
                >
                    <Text>자세히 보기</Text>
                </Center>
            </VStack>
            <Image
                src={require("../../assets/business_man.png")}
                w={"400px"}
                objectFit={"cover"}
            />
        </HStack>
    );
}
