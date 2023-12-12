import { HStack } from "@chakra-ui/react";
import SearchButton from "./buttons/search";
import Cart from "./buttons/cart";
import More from "./buttons/more";

export default function Buttons() {
    return (
        <HStack position="absolute" right="40px">
            {/* <SearchButton />
            <Cart /> */}
            <More />
        </HStack>
    );
}
