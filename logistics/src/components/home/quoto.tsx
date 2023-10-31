import { Box, Image } from "@chakra-ui/react";

export default function Quoto() {
    const imagePath =
        "https://github.com/jh0152park/instead_of_me_sample/blob/yuhyeon/logistics/images/quoto.png?raw=true";

    return (
        <Box w={"100dvw"} height={"900px"}>
            <Image src={imagePath} w={"100%"} h={"100%"} objectFit={"cover"} />
        </Box>
    );
}
