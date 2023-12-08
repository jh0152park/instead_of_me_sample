import {
    Box,
    Center,
    Collapse,
    Flex,
    ListItem,
    Text,
    UnorderedList,
    useDisclosure,
} from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const detailList = [
    [
        ["8가지 약속"],
        ["의료진소개"],
        ["진료시간 안내"],
        ["인테리어"],
        ["오시는길"],
        ["주차안내"],
    ],
    [
        ["인비절라인"],
        ["설측교정"],
        ["비발치교정"],
        ["성장기 턱교정"],
        ["비수술교정"],
        ["수술교정"],
    ],
    [
        ["셀프교정진단"],
        ["증상별 교정"],
        ["장치별 교정"],
        ["교정치료 진행과정"],
        ["어린이 교정"],
    ],
    [
        ["교정전후사진"],
        ["언론보도"],
        ["전문의 칼럼"],
        ["치료후기"],
        ["병원일상"],
        ["공지사항"],
    ],
    [["온라인상담"], ["카톡상담"]],
];

export function Category({ title, index, ishover }: any) {
    const [hoverTab, setHoverTab] = useState(false);
    const [tabHeight, setTabHeight] = useState("60px");
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 200) {
            setTabHeight("90px");
        } else {
            setTabHeight("60px");
        }
    });
    return (
        <>
            <Flex
                width="100%"
                textAlign="center"
                flexDir="column"
                align="center"
                justify="center"
                onMouseEnter={() => setHoverTab(true)}
                onMouseLeave={() => setHoverTab(false)}
            >
                <Center
                    cursor="pointer"
                    height={tabHeight}
                    width="100%"
                    backgroundColor={hoverTab ? "#8C6AAE" : "white"}
                    transition="0.3s"
                >
                    <Text
                        fontSize="20px"
                        color={hoverTab ? "white" : "#404041"}
                        fontWeight="600"
                        verticalAlign="middle"
                    >
                        {title}
                    </Text>
                </Center>
                <Collapse
                    in={ishover}
                    transition={{
                        exit: { delay: 0 },
                        enter: { duration: 0.3 },
                    }}
                >
                    <UnorderedList
                        width="100%"
                        height="220px"
                        margin="10px 0 30px 0"
                        borderRight="1px"
                        borderStyle="solid"
                        borderColor="#c1c1c1"
                        listStyleType="none"
                    >
                        {" "}
                        {detailList[index].map((i, index) => (
                            <ListItem
                                listStyleType="none"
                                padding="5px 0"
                                margin="6px 0"
                                color="#666"
                                cursor="pointer"
                            >
                                {i}
                            </ListItem>
                        ))}
                    </UnorderedList>
                </Collapse>
            </Flex>
        </>
    );
}
