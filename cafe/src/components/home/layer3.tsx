import { Box, Image } from "@chakra-ui/react";

export default function Layer3() {
    const image =
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image3.jpg?raw=true";

    return (
        <Box w="100%" id="layer3">
            <Image w="100%" src={image} />
        </Box>
    );
}
