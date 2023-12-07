import {
    Box,
    Center,
    Flex,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
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

export function Category({ title, index }: any) {
    const [ishover, setIshover] = useState(false);
    console.log(ishover);
    return (
        <>
            <Flex
                width="100%"
                textAlign="center"
                flexDir="column"
                align="center"
                justify="center"
                onMouseEnter={() => setIshover(true)}
                onMouseLeave={() => setIshover(false)}
            >
                <Center
                    cursor="pointer"
                    height="60px"
                    width="100%"
                    backgroundColor={ishover ? "#8C6AAE" : "white"}
                    transition="0.3s"
                >
                    <Text
                        fontSize="20px"
                        color={ishover ? "white" : "#404041"}
                        fontWeight="600"
                        verticalAlign="middle"
                    >
                        {title}
                    </Text>
                </Center>
                <UnorderedList
                    display={ishover ? "list-item" : "none"}
                    width="100%"
                    height="220px"
                    margin="10px 0 20px 0"
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
                            margin="3px 0"
                            color="#666"
                            cursor="pointer"
                        >
                            {i}
                        </ListItem>
                    ))}
                </UnorderedList>
            </Flex>
        </>
    );
}
