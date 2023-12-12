import { Box, Image, VStack } from "@chakra-ui/react";

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
        <VStack>
            <Box w="300px" h="300px" borderColor="rgba(255, 255, 255, 0.2)">
                <Image w="100%" h="100%" objectFit="cover" src={productImage} />
            </Box>
        </VStack>
    );
}
