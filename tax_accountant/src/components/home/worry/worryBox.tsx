import { Box, Image, VStack } from "@chakra-ui/react";
import Bubble from "./bubble";

export default function WorryBox({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <VStack mt={"40px"} spacing={"20px"}>
            <Bubble title={title} description={description} />
            <Box w={"100px"} h={"100px"}>
                <Image
                    src={require("../../../assets/person_circle.png")}
                    objectFit={"cover"}
                />
            </Box>
        </VStack>
    );
}
