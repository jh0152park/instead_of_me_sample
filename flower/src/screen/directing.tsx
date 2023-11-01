import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import Product from "../components/product";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";

export default function Directing() {
    return (
        <>
            <Helmet>
                <title>Directing</title>
            </Helmet>
            <Center
                bgColor="white"
                color="black"
                w="100%"
                minH="100vh"
                pb="100px"
                pt="150px"
                px="95px"
            >
                <VStack w="100%">
                    <HStack justifyContent="flex-start" w="100%">
                        <Product
                            product="공간장식"
                            price={"문의필요"}
                            image={require("../resources/images/directing/space.jpg")}
                        />
                    </HStack>
                </VStack>
            </Center>

            <Footer />
        </>
    );
}
