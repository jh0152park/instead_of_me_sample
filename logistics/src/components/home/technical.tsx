import { Box, Image, Text, VStack } from "@chakra-ui/react";
import YelloButton from "../common/yelloButton";

export default function Technical() {
    const imagePath =
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/logistics/images/axel-hjEesK4KSDs-unsplash.jpg?raw=true";

    return (
        <Box
            position={"relative"}
            w={"100dvw"}
            h={"80dvh"}
            backgroundColor={"white"}
            cursor={"pointer"}
        >
            <Box
                w={"100%"}
                h={"100%"}
                boxSizing="border-box"
                px={"30px"}
                position={"absolute"}
                top={0}
                left={0}
                zIndex={1}
            >
                <Image src={imagePath} objectFit={"cover"} />
            </Box>

            <Box zIndex={2} position={"relative"} pl={"80px"} pt={"70px"}>
                <VStack
                    spacing={7}
                    alignItems={"flex-start"}
                    color={"blackAlpha.700"}
                >
                    <VStack spacing={3} alignItems={"flex-start"}>
                        <Text fontSize={"18px"} fontWeight={"semibold"}>
                            Company Overview
                        </Text>

                        <Text fontSize={"60px"} fontWeight={"extrabold"}>
                            우리는 기술적 가치에
                            <br />큰 중요성을 둡니다.
                        </Text>
                    </VStack>

                    <YelloButton text="About Us" />
                </VStack>
            </Box>
        </Box>
    );
}
