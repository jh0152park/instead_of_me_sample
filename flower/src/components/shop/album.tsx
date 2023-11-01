import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
    image: string;
    name: string;
}

export default function Album({ image, name }: IProps) {
    const navigage = useNavigate();
    const [isHover, setIsHover] = useState<boolean>(false);

    function toggleHover() {
        setIsHover((prev) => !prev);
    }

    return (
        <Box
            w="410px"
            h="410px"
            position="relative"
            overflow="hidden"
            boxSizing="border-box"
            onMouseLeave={toggleHover}
            onMouseOver={toggleHover}
            _hover={{
                cursor: "pointer",
            }}
            onClick={() => {
                navigage(`/${name.toLowerCase()}`);
            }}
        >
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={image}
                transform={isHover ? "scale(1.1)" : "scale(1)"}
                transition="all 0.2s linear"
            />

            <Center
                id="overlay"
                w="100%"
                h="100%"
                bgColor="rgba(0, 0, 0, 0.3)"
                position="absolute"
                top="0"
                left="0"
                opacity={isHover ? 0 : 1}
            >
                <Text fontSize="18px" fontFamily="Cormorant">
                    {name}
                </Text>
            </Center>
        </Box>
    );
}
