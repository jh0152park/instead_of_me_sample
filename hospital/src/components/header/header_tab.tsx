import { Box, Flex } from "@chakra-ui/react";
import { Category } from "./categoty";

export function HeaderTab({ height }: any) {
    return (
        <>
            <nav
                style={{
                    borderTop: "1px solid #c1c1c1 ",
                }}
            >
                <Flex
                    maxWidth="1240px"
                    justifyContent="space-between"
                    margin="auto"
                    textAlign="center"
                >
                    <Category title="병원소개" index={0}></Category>
                    <Category title="프리미엄 교정" index={1}></Category>
                    <Category title="치아교정" index={2}></Category>
                    <Category title="커뮤니티" index={3}></Category>
                    <Category title="온라인상담" index={4}></Category>
                </Flex>
            </nav>
        </>
    );
}
