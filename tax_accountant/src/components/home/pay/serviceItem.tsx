import { HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

export default function ServiceItem({
    icon: Icon,
    description,
}: {
    icon: IconType;
    description: string;
}) {
    return (
        <HStack w={"100%"} h={"100%"} spacing={"20px"}>
            <Icon fontSize={"30px"} color="#1265F5" />
            <Text fontSize={"18px"} fontWeight={"bold"} color={"gray.500"}>
                {description}
            </Text>
        </HStack>
    );
}
