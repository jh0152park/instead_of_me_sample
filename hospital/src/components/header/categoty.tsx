import { Center, Text } from "@chakra-ui/react";
export function Category({ title }: any) {
    return (
        <>
            <Center
                w="170px"
                h="100%"
                cursor="pointer"
                _hover={{ backgroundColor: "#8C6AAE" }}
            >
                <Text fontSize="20px" color="#404041">
                    {title}
                </Text>
            </Center>
        </>
    );
}
