import { Box, Image, VStack } from "@chakra-ui/react";
import BubbleMobile from "./bubbleMobile";

export default function WorryBoxMobile({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <VStack mt={"40px"} spacing={"10px"}>
            <BubbleMobile title={title} description={description} />
            <Box w={"70px"} h={"70px"}>
                <Image
                    src={require("../../../assets/person_circle.png")}
                    objectFit={"cover"}
                />
            </Box>
        </VStack>
    );
}
