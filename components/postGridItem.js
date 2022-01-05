import { Box, Button, LinkBox, LinkOverlay, Image, Spacer, Text, useColorMode, AspectRatio, Container, space } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import NextLink from "next/link";


export const GridItemVideo = ({ id, title, src}) => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <AspectRatio w='360px' mr={10} ratio={ 2 }>
            <iframe 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                src={src} 
                allowfullscreen
            />
        </AspectRatio>

    );
}
export const GridItemStyle = () => (
    <Global styles={ `
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
    />
)