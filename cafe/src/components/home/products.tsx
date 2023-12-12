import {
    AbsoluteCenter,
    Box,
    Center,
    Divider,
    Grid,
    HStack,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import Product from "../Products/product";

const SCREEN_WIDTH = window.innerWidth;

export default function Products() {
    const products = [
        require("../../resources/images/shop/product1.jpg"),
        require("../../resources/images/shop/product2.jpg"),
        require("../../resources/images/shop/product3.jpg"),
        require("../../resources/images/shop/product4.jpg"),
    ];

    return (
        <Center w="100%" h="100vh" bgColor="whiteAlpha.200">
            <VStack>
                <Box>
                    <HStack w="100%">
                        <Box
                            w={`${SCREEN_WIDTH * 0.15}px`}
                            border="1px solid white"
                        />
                        <Heading mx="20px">Best Products</Heading>
                        <Box
                            w={`${SCREEN_WIDTH * 0.15}px`}
                            border="1px solid white"
                        />
                    </HStack>
                </Box>

                <Grid templateColumns="repeat(4, 1fr)" gap="30px">
                    {products.map((product) => (
                        <Product
                            productImage={product}
                            productCost={100}
                            productDescription="test"
                            productName="test"
                        />
                    ))}
                </Grid>
            </VStack>
        </Center>
    );
}
