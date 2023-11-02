import { Center, Text } from "@chakra-ui/react";

export default function NumberBox({ num }: { num: number }) {
    return (
        <Center
            px={"10px"}
            py={"10px"}
            backgroundColor={"gray.100"}
            border={"0.5px solid #00000050"}
            boxShadow={"7px 7px 0px 0px"}
            color={"gray.200"}
        >
            <Text fontSize={"60px"} color={"#1265F5"} textAlign={"center"}>
                {num}
            </Text>
        </Center>
    );
}
