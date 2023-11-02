import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

export default function Content({
    icon: Icon,
    title,
    description,
    image,
}: {
    icon: IconType;
    title: string;
    description: string;
    image: any;
}) {
    return (
        <VStack w={"100%"} h={"27%"} spacing={"20px"}>
            <HStack
                spacing={"10px"}
                fontSize={"30px"}
                fontWeight={"extrabold"}
                color={"gray.500"}
            >
                <Icon fontSize={"40px"} />
                <Text>{title}</Text>
            </HStack>

            <Text color={"gray.500"} fontSize={"20px"}>
                {description}
            </Text>

            <Image
                src={image}
                objectFit={"cover"}
                w={"70%"}
                h={"70%"}
                borderRadius={"15px"}
                mt={"40px"}
            />
        </VStack>
    );
}
