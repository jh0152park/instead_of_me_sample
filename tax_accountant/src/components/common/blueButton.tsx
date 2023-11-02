import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function BlueButton({ text }: { text: string }) {
    const navigate = useNavigate();

    function onClickBox() {
        navigate("/consulting");
    }

    return (
        <Box
            px={"20px"}
            py={"15px"}
            bg={"#1265F5"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={"18px"}
            borderRadius={"10px"}
            cursor={"pointer"}
            onClick={onClickBox}
        >
            <Text>{text}</Text>
        </Box>
    );
}
