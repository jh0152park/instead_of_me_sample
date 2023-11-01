import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";

interface IProps {
    product: string;
    price: number;
    image: string;
}

export default function Product({ product, price, image }: IProps) {
    return (
        <VStack>
            <Box w="410px" h="410px">
                <Image w="100%" h="100%" objectFit="cover" src={image} />
            </Box>
            <Center w="410px" h="100px">
                <VStack>
                    <Text fontFamily={"Cormorant"} fontSize={"20px"}>
                        {product}
                    </Text>
                    <Text fontFamily={"Cormorant"}>
                        {price.toLocaleString("ko-KR")}원
                    </Text>
                </VStack>
            </Center>
        </VStack>
    );
}
