import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DisplayResolution } from "../../global/recoil";
import { useRecoilValue } from "recoil";

export default function BlueButton({
    text,
    widthType = "initial",
}: {
    text: string;
    widthType?: string;
}) {
    const navigate = useNavigate();
    const displayResolution = useRecoilValue(DisplayResolution);

    function onClickBox() {
        navigate("/consulting");
    }

    return (
        <Box
            px={displayResolution === "web" ? "20px" : "10px"}
            py={displayResolution === "web" ? "15px" : "8px"}
            bg={"#1265F5"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={displayResolution === "web" ? "18px" : "12px"}
            borderRadius={displayResolution === "web" ? "10px" : "5px"}
            cursor={"pointer"}
            onClick={onClickBox}
            w={widthType}
        >
            <Text textAlign={"center"}>{text}</Text>
        </Box>
    );
}
