import { Box, Image } from "@chakra-ui/react";

export default function Layer4() {
    const image =
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image4.jpg?raw=true";

    return (
        <Box w="100%" id="layer4">
            <Image w="100%" src={image} />
        </Box>
    );
}
