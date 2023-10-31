import { Box } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function More() {
    return (
        <Box
            fontSize="30px"
            fontWeight={"bold"}
            _hover={{
                cursor: "pointer",
                color: "rgba(255, 255, 255, 0.4)",
                transition: "all 0.2s linear",
            }}
        >
            <AiOutlineMenu />
        </Box>
    );
}
