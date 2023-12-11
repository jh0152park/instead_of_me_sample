import { Box, Button, Center } from "@chakra-ui/react";
import styled from "styled-components";

export const PageDots = styled.button<{ index: number }>`
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    margin: 0 8px;
    padding: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
    &:nth-child(${(props) => props.index + 1}) {
        width: 50px;
        height: 15px;
        border-radius: 5px;
        background-color: purple;
    }
`;
export function BannerDots({ index }: any) {
    return (
        <>
            <Center position="absolute" bottom="20px" left="50%">
                <>
                    {[0, 1, 2].map((i) => (
                        <PageDots index={index}></PageDots>
                    ))}
                </>
            </Center>
        </>
    );
}
