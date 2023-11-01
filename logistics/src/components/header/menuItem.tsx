import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MenuItem({
    label,
    path,
    menuHoverColor,
}: {
    label: string;
    path: string;
    menuHoverColor: string;
}) {
    const navigate = useNavigate();

    function onClickMenu() {
        navigate(path);
    }

    return (
        <Box
            _hover={{ color: menuHoverColor }}
            transition={"0.2s linear"}
            cursor={"pointer"}
            px={"20px"}
            py={"10px"}
            onClick={onClickMenu}
        >
            <Text fontSize={"16px"} fontWeight={"semibold"}>
                {label}
            </Text>
        </Box>
    );
}
