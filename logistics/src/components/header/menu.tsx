import { HStack } from "@chakra-ui/react";
import React from "react";
import MenuItem from "./menuItem";

export default function Menu() {
    return (
        <HStack justifyContent={"space-between"}>
            <MenuItem label="Company Overview" />
            <MenuItem label="Service Plan" />
            <MenuItem label="Contact" />
            <MenuItem label="Careers" />
        </HStack>
    );
}
