import { Box, Center, HStack, Heading } from "@chakra-ui/react";
import Album from "../components/shop/album";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Shop() {
    return (
        <>
            <Helmet>
                <title>Shop</title>
            </Helmet>

            <Center w="100%" h="100vh" bgColor="white">
                <HStack w="100%" justifyContent="space-between" px="95px">
                    <Album
                        name="Class"
                        image={require("../resources/images/class.jpg")}
                    />
                    <Album
                        name="Order"
                        image={require("../resources/images/order.jpg")}
                    />
                    <Album
                        name="Directing"
                        image={require("../resources/images/directing.jpg")}
                    />
                </HStack>
            </Center>

            <Footer />
        </>
    );
}
