import { Box, Image, Text, VStack } from "@chakra-ui/react";
import BlueButton from "../common/blueButton";

export default function BannerMobile() {
    return (
        <Box w={"100%"} h={"300px"} position={"relative"}>
            <Image
                src={require("../../assets/home_image.jpg")}
                objectFit={"cover"}
                w={"100%"}
                h={"100%"}
                position={"absolute"}
                top={0}
                left={0}
                zIndex={-1}
                opacity={0.9}
            />

            <VStack
                w={"100%"}
                h={"100%"}
                pt={"40px"}
                spacing={"30px"}
                px={"30px"}
            >
                <Text
                    fontSize={"20px"}
                    fontWeight={"extrabold"}
                    textAlign={"center"}
                    color={"white"}
                    lineHeight={"1.2"}
                >
                    세무 서비스, 10분만 비교해보세요
                    <br />
                    당신의 사업이 달라집니다
                </Text>

                <BlueButton text="무료 세무 상담 받기" />
            </VStack>
        </Box>
    );
}
