import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

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
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <VStack
            w={"100%"}
            h={"27%"}
            spacing={displayResolution === "web" ? "20px" : "10px"}
        >
            <HStack
                spacing={"10px"}
                fontSize={displayResolution === "web" ? "30px" : "15px"}
                fontWeight={"extrabold"}
                color={"gray.500"}
            >
                <Icon
                    fontSize={displayResolution === "web" ? "40px" : "20px"}
                />
                <Text>{title}</Text>
            </HStack>

            <Text
                color={"gray.500"}
                fontSize={displayResolution === "web" ? "20px" : "10px"}
            >
                {description}
            </Text>

            <Image
                src={image}
                objectFit={"cover"}
                w={displayResolution === "web" ? "70%" : "90%"}
                borderRadius={"15px"}
                mt={displayResolution === "web" ? "40px" : "15px"}
            />
        </VStack>
    );
}
