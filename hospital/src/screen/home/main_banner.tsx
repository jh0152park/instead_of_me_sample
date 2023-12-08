import { Box, Image, Text } from "@chakra-ui/react";
import { BannerText } from "../../components/banner/banner_text";

export default function MainBanner() {
    return (
        <Box w="100%" h="800px" position="relative">
            <Image
                mt="153px"
                w="100%"
                h="100%"
                objectFit="cover"
                src={require("../../resource/images/dentist5.jpg")}
            />
            <BannerText></BannerText>
        </Box>
    );
}
