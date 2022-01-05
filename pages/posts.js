import { Box, Button, Container, Heading, IconButton, Link, SimpleGrid, Tooltip, useColorMode } from '@chakra-ui/react';
import getData from '../utiles/data'
import Layout from '../components/layouts/article';
import { GridItemVideo } from '../components/postGridItem';
import { FaArrowRight } from 'react-icons/fa';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function posts() {
    const data = getData.hobby;
    const postData = getData.posts;
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Layout title="posts">
            <Box display="flex" flexDirection="column">
                <Heading as="h4" fontSize={20} mb={4}>My Posts</Heading>
                <SimpleGrid columns={ [1, 1, 2, 3] } gap={ 6 } >   
                    <Box display="flex" flexDirection="column">
                        { postData.map(video => (
                            <GridItemVideo id={ video.id } title={ video.title } src={ video.src } link={ data.link } />
                        )) }
                        <Link href="https://www.facebook.com/100002421342047/videos/2983090461781636/ " isExternal>
                            <Tooltip bg='gray.900' color='purple.500' label="Read &amp; watch full video &amp; post">
                                <Button w="90%" mt={ 2 } colorScheme={ isDark ? 'teal' : 'green' } rightIcon={ <ChevronRightIcon /> } variant='outline'>
                                    Learn More
                                </Button>
                            </Tooltip>
                        </Link>
                    </Box>
                </SimpleGrid>
                
            </Box>
            <Box mt={7} display="flex" flexDirection="column">
                <Heading as="h4" fontSize={20} mb={4}>My Hobby</Heading>
                <SimpleGrid columns={ [1, 1, 2, 3] } gap={ 6 } >   
                    {data.map(video=>(
                        <GridItemVideo id={ video.id } title={ video.title } src={ video.src } link={ data.link } />
                    ))}
                </SimpleGrid>
            </Box>
        </Layout>
    )
}
