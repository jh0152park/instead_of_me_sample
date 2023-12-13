import { Box, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { DisplayResolution } from "../../global/recoil";
import { useRecoilValue } from "recoil";

export default function TextItem({
    text,
    path,
}: {
    text: string;
    path: string;
}) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const displayResolution = useRecoilValue(DisplayResolution);

    function onClickBox() {
        navigate(path);
    }

    return (
        <Box
            cursor={"pointer"}
            fontWeight={pathname === path ? "bold" : "medium"}
            fontSize={displayResolution === "web" ? "18px" : "14px"}
            onClick={onClickBox}
            transition={"0.2s linear"}
            transitionProperty={"font-weight"}
        >
            <Text>{text}</Text>
        </Box>
    );
}
