import { Center, Text } from "@chakra-ui/react";
export function Category({ title }: any) {
    return (
        <>
            <Center
                w="170px"
                h="100%"
                cursor="pointer"
                color="#404041"
                _hover={{ backgroundColor: "#8C6AAE", color: "white" }}
            >
                <Text fontSize="20px">{title}</Text>
            </Center>
        </>
    );
}
