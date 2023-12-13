import { HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { DisplayResolution } from "../../../global/recoil";
import { useRecoilValue } from "recoil";

export default function ServiceItem({
    icon: Icon,
    description,
}: {
    icon: IconType;
    description: string;
}) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <HStack w={"100%"} h={"100%"} spacing={"20px"} display={"flex"}>
            <Icon
                fontSize={displayResolution === "web" ? "30px" : "24px"}
                color="#1265F5"
            />
            <Text
                fontSize={displayResolution === "web" ? "18px" : "12px"}
                fontWeight={"bold"}
                color={"gray.500"}
            >
                {description}
            </Text>
        </HStack>
    );
}
