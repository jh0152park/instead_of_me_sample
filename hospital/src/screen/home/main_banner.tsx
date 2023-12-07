import { Box, Image } from "@chakra-ui/react";

export default function MainBanner() {
    return (
        <Box w="100%" h="800px">
            <Image
                mt="152px"
                w="100%"
                h="100%"
                objectFit="cover"
                src={require("../../resource/images/dentist3.jpg")}
            />
        </Box>
    );
}
