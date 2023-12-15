import { Box, Center, Grid, HStack, VStack } from "@chakra-ui/react";
import Product from "../components/product";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";

export default function Order() {
    const productData = [
        {
            name: "Flower basket",
            price: 100000,
            image: require("../resources/images/order/basket.jpg"),
        },
        {
            name: "Hand tied",
            price: 100000,
            image: require("../resources/images/order/hand tied.jpg"),
        },
        {
            name: "Cenerpiece",
            price: 100000,
            image: require("../resources/images/order/centerpiece.jpg"),
        },
        {
            name: "Plant",
            price: 100000,
            image: require("../resources/images/order/plant.jpg"),
        },
        {
            name: "Bouquet",
            price: "가격문의",
            image: require("../resources/images/order/bouquet.jpg"),
        },
    ];

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
                <Grid templateColumns="repeat(4, 1fr)" gap="10px">
                    {productData.map((data, index) => (
                        <Product
                            key={index}
                            product={data.name}
                            price={data.price}
                            image={data.image}
                        />
                    ))}
                </Grid>
            </Center>

            <Footer />
        </>
    );
}
