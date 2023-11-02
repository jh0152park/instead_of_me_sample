import { Box, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function TextItem({
    text,
    path,
}: {
    text: string;
    path: string;
}) {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    function onClickBox() {
        navigate(path);
    }

    return (
        <Box
            cursor={"pointer"}
            fontWeight={pathname === path ? "bold" : "medium"}
            fontSize={"18px"}
            onClick={onClickBox}
            transition={"0.2s linear"}
            transitionProperty={"font-weight"}
        >
            <Text>{text}</Text>
        </Box>
    );
}
