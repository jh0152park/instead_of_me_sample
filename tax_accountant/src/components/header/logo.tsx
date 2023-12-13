import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
    const navigate = useNavigate();

    function onClickLogo() {
        navigate("/");
    }

    return (
        <Box
            w={"70px"}
            h={"70px"}
            cursor={"pointer"}
            onClick={onClickLogo}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Image src={require("../../assets/logo.png")} objectFit={"cover"} />
        </Box>
    );
}
