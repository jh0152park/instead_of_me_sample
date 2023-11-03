import { Box, Image, Text, VStack } from "@chakra-ui/react";
import BlueButton from "../common/blueButton";

export default function Banner() {
    return (
        <Box w={"100dvw"} h={"800px"} position={"relative"}>
            <Image
                src={require("../../assets/home_image.jpg")}
                objectFit={"cover"}
                w={"100%"}
                h={"100%"}
                position={"absolute"}
                top={0}
                left={0}
                zIndex={-1}
            />

            <VStack
                w={"100%"}
                h={"100%"}
                display={"flex"}
                pt={"100px"}
                spacing={"50px"}
            >
                <Text
                    fontSize={"60px"}
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
