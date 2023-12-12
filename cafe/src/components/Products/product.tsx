import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface IProps {
    productImage: string;
    productName: string;
    productCost: number;
    productDescription: string;
}

export default function Product({
    productImage,
    productName,
    productCost,
    productDescription,
}: IProps) {
    return (
        <VStack alignItems="flex-start">
            <Box
                w="300px"
                h="300px"
                mb="20px"
                borderColor="rgba(255, 255, 255, 0.2)"
            >
                <Image w="100%" h="100%" objectFit="cover" src={productImage} />
            </Box>
            <Text fontWeight="bold">{productName}</Text>
            <Text fontSize="12px" my="10px">
                {productDescription}
            </Text>
            <Text>{productCost.toLocaleString()}원</Text>
        </VStack>
    );
}
