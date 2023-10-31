import { Button, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Box = styled(motion.div)`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
`;

const ImageVariants = {
    initial: {
        y: -window.screen.availHeight - 5,
        opacity: 0.1,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: window.screen.availHeight + 5,
        opacity: 0.1,
    },
};

export default function Home() {
    const images = [
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/flower/images/image1.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/flower/images/image2.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/flower/images/image3.jpg?raw=true",
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/flower/images/image4.jpg?raw=true",
    ];

    const [imageIndex, setImageIndex] = useState<number>(0);

    function updateImageIndex() {
        if (imageIndex >= 3) setImageIndex(0);
        else setImageIndex((prev) => prev + 1);
        return;
    }

    useEffect(() => {
        setTimeout(updateImageIndex, 5000);
    }, [imageIndex]);

    return (
        <>
            <Helmet>
                <title>My Flower</title>
            </Helmet>

            <Box>
                <AnimatePresence initial={false}>
                    {images.map((image, index) =>
                        index === imageIndex ? (
                            <Image
                                key={index}
                                src={image}
                                variants={ImageVariants}
                                initial="initial"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "tween", duration: 2 }}
                            />
                        ) : null
                    )}
                </AnimatePresence>

                <Button
                    onClick={updateImageIndex}
                    position="absolute"
                    top={"100px"}
                    left={"100px"}
                >
                    Change
                </Button>

                <Center w="100%" position="absolute" top="50px">
                    <Text fontFamily={"Cormorant"} fontSize={"50px"}>
                        My Flower
                    </Text>
                </Center>
            </Box>
        </>
    );
}
