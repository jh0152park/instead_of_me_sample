import { Box, Center, Grid, HStack, VStack } from "@chakra-ui/react";
import Product from "../components/product";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";

export default function Class() {
    const images = [
        require("../resources/images/class/hobby.jpg"),
        require("../resources/images/class/basic.jpg"),
        require("../resources/images/class/florist.jpg"),
        require("../resources/images/class/business.jpg"),
    ];

    const className = [
        "Hobby Class",
        "Basic Class",
        "Florist Class",
        "Business Class",
    ];

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
                <Grid templateColumns="repeat(4, 1fr)" gap="10px">
                    {images.map((image, index) => (
                        <Product
                            key={index}
                            product={className[index]}
                            price={"가격문의"}
                            image={image}
                        />
                    ))}
                </Grid>
            </Center>

            <Footer />
        </>
    );
}
