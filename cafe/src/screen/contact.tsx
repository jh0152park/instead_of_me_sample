import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { go_to_top } from "../utils/util";

export default function Contact() {
    const image =
        "https://github.com/jh0152park/instead_of_me_sample/blob/main/cafe/images/image6.jpg?raw=true";

    useEffect(() => {
        go_to_top(0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <Box w="100%" mt="100px" p="50px">
                <Image w="100%" objectFit="cover" src={image} />
            </Box>

            <Center w="100%" my="100px">
                <VStack>
                    <Text>Instagram. @nameofinstagram</Text>
                    <Text>Email. nameofemail@address.com</Text>
                    <Text>Tel. 012-345-678</Text>
                </VStack>
            </Center>
        </>
    );
}
