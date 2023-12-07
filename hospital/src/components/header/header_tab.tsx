import { Box, Flex } from "@chakra-ui/react";
import { Category } from "./categoty";
import { useState } from "react";

export function HeaderTab({ height }: any) {
    const [ishover, setIshover] = useState(false);
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
                    onMouseEnter={() => setIshover(true)}
                    onMouseLeave={() => setIshover(false)}
                >
                    <Category
                        title="병원소개"
                        index={0}
                        ishover={ishover}
                    ></Category>
                    <Category
                        title="프리미엄 교정"
                        index={1}
                        ishover={ishover}
                    ></Category>
                    <Category
                        title="치아교정"
                        index={2}
                        ishover={ishover}
                    ></Category>
                    <Category
                        title="커뮤니티"
                        index={3}
                        ishover={ishover}
                    ></Category>
                    <Category
                        title="온라인상담"
                        index={4}
                        ishover={ishover}
                    ></Category>
                </Flex>
            </nav>
        </>
    );
}
