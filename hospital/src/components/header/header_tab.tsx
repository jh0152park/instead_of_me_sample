import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import styled from "styled-components";
import { Category } from "./categoty";

const category = [
    "병원소개",
    "프리미엄 교정",
    "치아교정",
    "커뮤니티",
    "온라인상담",
];

export function HeaderTab() {
    return (
        <>
            <HStack
                w="100%"
                h="60px"
                gap={0}
                borderTop="1px"
                borderStyle="solid"
                borderColor="#c1c1c1"
            >
                <HStack maxWidth="1240px" margin="auto" h="100%">
                    {category.map((current) => (
                        <Category title={current}></Category>
                    ))}
                </HStack>
            </HStack>
        </>
    );
}
