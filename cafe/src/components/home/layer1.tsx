import { Box, Image } from "@chakra-ui/react";

export default function Layer1() {
    const image =
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image1.jpg?raw=true";

    return (
        <Box w="100%" id="layer1">
            <Image w="100%" src={image} />
        </Box>
    );
}
