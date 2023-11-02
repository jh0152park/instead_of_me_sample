import { Center, Text } from "@chakra-ui/react";

export default function NumberCircle({ num }: { num: number }) {
    return (
        <Center
            w={"50px"}
            h={"50px"}
            borderRadius={"50%"}
            backgroundColor={"#1265F5"}
        >
            <Text
                color={"white"}
                fontSize={"24px"}
                fontWeight={"extrabold"}
                textAlign={"center"}
            >
                {num}
            </Text>
        </Center>
    );
}
