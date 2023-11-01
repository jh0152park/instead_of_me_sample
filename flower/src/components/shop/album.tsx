import { Box, Center, Image, Text } from "@chakra-ui/react";

interface IProps {
    image: string;
    name: string;
}

export default function Album({ image, name }: IProps) {
    return (
        <Box
            w="410px"
            h="410px"
            position="relative"
            overflow="hidden"
            boxSizing="border-box"
        >
            <Image w="100%" h="100%" objectFit="cover" src={image} />

            <Center
                id="overlay"
                w="100%"
                h="100%"
                bgColor="rgba(0, 0, 0, 0.3)"
                position="absolute"
                top="0"
                left="0"
            >
                <Text fontSize="18px" fontFamily="Cormorant">
                    {name}
                </Text>
            </Center>
        </Box>
    );
}
