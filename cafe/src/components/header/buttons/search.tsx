import { Box } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchButton() {
    return (
        <Box
            fontSize="25px"
            _hover={{
                cursor: "pointer",
                color: "rgba(0, 0, 0, 0.7)",
                transition: "all 0.2s linear",
            }}
        >
            <FaSearch />
        </Box>
    );
}
