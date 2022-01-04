import { Box, Button, LinkBox, LinkOverlay,Image, Spacer, Text, useColorMode } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import NextLink from "next/link";


export const GridItem = ({children, href, title,thumbnile}) =>{
    return(
        <Box w="100%" align="center">
            <LinkBox cursor="pointer">
                <Image styles={{}} src={ thumbnile } alt={ title } className="grid-item-thumbnail" loading="lazy" />
                <LinkOverlay href={ href } target="_blank">
                    <Text mt={ 2 }>{ title }</Text>
                </LinkOverlay>
                <Text fontSize={ 14 }>{ children }</Text>
            </LinkBox>
        </Box>
    )
    
}

export const WorkGridItem = ({ id, title, thumbnile, LiveLink="/", CodeLink = "/"}) =>{
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return(
        <Box>
            <Box p={ 2 } borderRadius="xl" boxShadow="dark-lg" w="100%" align="center" position="relative" role="group">
                <NextLink href={ `/works/${id}` } >
                    <LinkBox>
                        <LinkOverlay href={ `/works/${id}` }>
                            <Text color="teal" mt={ 2 } fontSize={ 20 } pb={ 3 }>{ title }</Text>
                        </LinkOverlay>
                        <Image cursor="pointer" src={ thumbnile } alt={ title } className="grid-item-thumbnail" />
                    </LinkBox>
                </NextLink>
                <Box position="absolute" visibility="hidden" _groupHover={ { visibility: "visible", bg: "rgba(140, 140, 140,0.3)" } } top={ 0 } left={ 0 } display="flex" justifyContent="center" alignItems="center" w="100%" h="100%" borderRadius={ "xl" }>
                    <NextLink href={ LiveLink } >
                        <Button _hover={ { bg: isDark ? "teal" : "cyan", border: "2px" } } mr={ 2 }>Live</Button>
                    </NextLink>
                    <NextLink href={ CodeLink } >
                        <Button _hover={ { bg: isDark ? "teal" : "cyan", border: "2px" } } mr={ 2 }>Source</Button>
                    </NextLink>
                </Box>
            </Box>
            <Box mt={4}>
                <NextLink href={ `/works/${id}` } >
                    <Button w="100%" _hover={ { bg: isDark ? "teal" : "cyan", border: "2px" } } mr={ 2 }>Project Details</Button>
                </NextLink>
            </Box>
        </Box>
        
    )
}

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
    />
)