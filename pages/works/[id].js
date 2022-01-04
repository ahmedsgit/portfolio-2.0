import NextLink from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Box, Heading, Text, Container, Image, Divider, Button, LinkBox, useColorMode, LinkOverlay } from '@chakra-ui/react';
import data from '../../utiles/data';
import { Global } from "@emotion/react";


const detailPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const project = data.projects.find((project) => project.id === id);
    if(!project) {
        return (
            <Container>
                <Heading as="h1">Project Not Found</Heading>
                <Text>The Project you are looking for is not found!</Text>
                <Divider my={ 6 } />
                <Box my={ 6 } align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Return to Home</Button>
                    </NextLink>
                </Box>
            </Container>
        );
    }
    else{
        const { colorMode } = useColorMode();
        const isDark = colorMode === "dark";
        return (
            <Container maxW="container.xl" mt={ 10 } position="relative">
                <Heading size='md' as="h3">About This Project</Heading>
                <Divider my={ 6 } />
                <Box w="100%" borderRadius="lg" boxShadow="dark-lg" display="flex" direction="row" alignItem="center" justifyContent="center">
                    <Box boxShadow="dark-lg" borderRadius="md" alignItems="left" m={5} >
                        <Image borderRadius="md" src={project.thumbnile} alt={project.title} />
                    </Box>
                    <Box boxShadow="md" alignItems="left" m={ 3 } pl={5}>
                        <GridItemStyle/>
                        <Text className='styledText' letterSpacing="2%" textAlign={ ['left', 'center'] } w="300px" fontWeight="extrabold" color="teal.600">{project.title}</Text>
                        <Text className='small-styledText' letterSpacing="2%" textAlign={ ['left', 'center'] } w="300px" color={ isDark ? 'whiteAlpha.700' : 'gray.900'}>[ {project.stack} Project ]</Text>
                        <Text className='project-tec' textAlign="left" w="300px" color="yellow.600" my={5}>{project.desc}</Text>
                        <Text mt={ 5 } className='project-tec' mx={ 2 } textAlign={ ['left'] } w="300px" color={ isDark ? 'whiteAlpha.700' : 'gray.900'}>Language: {project.language}</Text>
                        <Text mt={ 2 } className='project-tec' mx={ 2 } textAlign={ ['left'] } w="350px" color={ isDark ? 'whiteAlpha.700' : 'gray.900' }>Framework: [ { project.framework.map(data => `${data}, `)}]</Text>
                        <Text mt={ 2 } className='project-tec' mx={ 2 } textAlign={ ['left'] } w="350px" color={ isDark ? 'whiteAlpha.700' : 'gray.900' }>Library: [ { project.library.map(data => ` ${data}, `)}]</Text>
                        <Box display="flex" flexDirection="row">
                            <NextLink href={ project.liveLink }>
                                <Button mt={ 20 } w="50%" bg={ "green.800" } border="2px" borderColor="teal" _hover={ { bg: isDark ? "teal" : "cyan", border: "2px" } } mr={ 2 }>Visit</Button>
                            </NextLink>
                            <NextLink href={ project.codeLink }>
                                <Button mt={ 20 } w="50%" bg={ "yellow.800" } border="2px" borderColor="teal" _hover={ { bg: isDark ? "teal" : "cyan", border: "2px" } } mr={ 2 }>Get Code</Button>
                            </NextLink>
                        </Box>
                        
                    </Box>
                </Box>
            </Container>
        );
    }
    
};

export default detailPage;

export const GridItemStyle = () => (
    <Global styles={ `
        .styledText {
            font-size: 20px;
            font-family: "Arial Black", Gadget, sans-serif;
            text-shadow: 0px 0px 0 rgb(6,91,106),
                        1px 1px  0 rgb(-21,64,79),
                        2px 2px 1px rgba(0,0,0,0.27),
                        2px 2px 1px rgba(0,0,0,0.5),
                        0px 0px 1px rgba(0,0,0,.2);
        }
        .project-tec {
            font-size: 12px;
            font-family: "Arial Black", Gadget, sans-serif;
            letter-spacing: 2px; 
        }
        .small-styledText {
            font-size: 12px;
            font-weight: lighter;
            text-transform: capitalize;
            letter-spacing: 4px; 
            font-family: "Arial Black", Gadget, sans-serif;
            text-shadow: 0px 0px 0 rgb(6,91,106),
                        1px 1px  0 rgb(-21,64,79),
                        1px 1px 1px rgba(0,0,0,0.27),
                        1px 1px 1px rgba(0,0,0,0.5),
                        0px 0px 1px rgba(0,0,0,.2);
        }
    `}
    />
)