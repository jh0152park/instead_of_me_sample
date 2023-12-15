import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import Product from "../components/product";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";

export default function Class() {
    return (
        <>
            <Helmet>
                <title>Classes</title>
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
                <HStack justifyContent="flex-start" w="100%">
                    <Product
                        product="Hobby class"
                        price={"가격문의"}
                        image={require("../resources/images/class/hobby.jpg")}
                    />
                    <Product
                        product="Basic class"
                        price={"가격문의"}
                        image={require("../resources/images/class/basic.jpg")}
                    />
                    <Product
                        product="Florist class"
                        price={"가격문의"}
                        image={require("../resources/images/class/florist.jpg")}
                    />
                    <Product
                        product="Business class"
                        price={"가격문의"}
                        image={require("../resources/images/class/business.jpg")}
                    />
                </HStack>
                {/* <VStack w="100%">
                    <HStack justifyContent="flex-start" w="100%">
                        <Product
                            product="Hobby class"
                            price={"가격문의"}
                            image={require("../resources/images/class/hobby.jpg")}
                        />
                        <Product
                            product="Basic class"
                            price={"가격문의"}
                            image={require("../resources/images/class/basic.jpg")}
                        />
                        <Product
                            product="Florist class"
                            price={"가격문의"}
                            image={require("../resources/images/class/florist.jpg")}
                        />
                    </HStack>

                    <HStack justifyContent="flex-start" w="100%">
                        <Product
                            product="Business class"
                            price={"가격문의"}
                            image={require("../resources/images/class/business.jpg")}
                        />
                    </HStack>
                </VStack> */}
            </Center>

            <Footer />
        </>
    );
}
