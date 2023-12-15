import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import Product from "../components/product";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";

export default function Order() {
    return (
        <>
            <Helmet>
                <title>Products</title>
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
                            product="Flower basket"
                            price={100000}
                            image={require("../resources/images/order/basket.jpg")}
                        />
                        <Product
                            product="Hand tied"
                            price={100000}
                            image={require("../resources/images/order/hand tied.jpg")}
                        />
                        <Product
                            product="Cenerpiece"
                            price={100000}
                            image={require("../resources/images/order/centerpiece.jpg")}
                        />
                        <Product
                            product="Plant"
                            price={100000}
                            image={require("../resources/images/order/plant.jpg")}
                        />
                    </HStack>

                    <HStack justifyContent="flex-start" w="100%">
                        <Product
                            product="Bouquet"
                            price={"가격문의"}
                            image={require("../resources/images/order/bouquet.jpg")}
                        />
                    </HStack>
                </VStack>
            </Center>

            <Footer />
        </>
    );
}
