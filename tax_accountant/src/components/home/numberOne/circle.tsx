import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

export default function Circle({ per, image }: { per: number; image: any }) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <VStack spacing={"20px"}>
            <Box
                w={displayResolution === "web" ? "300px" : "200px"}
                h={displayResolution === "web" ? "300px" : "200px"}
                position={"relative"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Image
                    src={image}
                    objectFit={"cover"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    zIndex={1}
                />
                <Text
                    position={"relative"}
                    zIndex={2}
                    textAlign={"center"}
                    fontSize={displayResolution === "web" ? "72px" : "50px"}
                    color={"#797979"}
                    fontWeight={"extrabold"}
                >
                    {per}{" "}
                    <span
                        style={{
                            fontSize: displayResolution === "web" ? 36 : 25,
                        }}
                    >
                        %
                    </span>
                </Text>
            </Box>
        </VStack>
    );
}
