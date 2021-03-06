import { Box, Heading, IconButton, Link, Text, Tooltip } from '@chakra-ui/react';
import { FaArrowRight, FaBolt, FaDyalog, FaInfinity, FaMaxcdn, FaNeos, FaNodeJs, FaPython, FaReact, FaTumblr, FaXing } from 'react-icons/fa';
import React from 'react'

export default function Experience() {
    return (
        <Box>
            <Heading as="h3" variant="section-title">Experience With</Heading>
            <Box display="flex" flexDirection="column" mb={ 10 } mx={ 10 } mt={ 5 }>
                <Box display="flex" boxShadow="dark-lg" p={ 5 } borderRadius="lg">
                    <Box display="flex" pl={ 3 } mr={ 3 } border="2px" borderColor="green.300" borderRadius="lg">
                        <Text pt={ 2 } pr={ 3 }>Language</Text>
                        <IconButton colorScheme="green" size="sm" mt={ 2 } mr={ 1 } icon={ <FaArrowRight /> } />
                    </Box>
                    <Link href="https://en.wikipedia.org/wiki/JavaScript" isExternal>
                        <Tooltip bg='gray.900' color='green.500' label="JavaScript">
                            <IconButton colorScheme="green" size="lg" icon={ <FaNodeJs /> } isRound='true' variant="outline" />
                        </Tooltip>
                    </Link>
                    <Link href="https://en.wikipedia.org/wiki/Python_(programming_language)" isExternal>
                        <Tooltip bg='gray.900' color='purple.500' label="Python">
                            <IconButton ml={ 3 } colorScheme="purple" size="lg" icon={ <FaPython /> } isRound='true' variant="outline" />
                        </Tooltip>
                    </Link>
                </Box>
                <Box my={ 2 } display="flex" boxShadow="dark-lg" p={ 5 } borderRadius="lg">
                    <Box display="flex" pl={ 3 } mr={ 3 } border="2px" borderColor="green.300" borderRadius="lg">
                        <Text pt={ 2 } pr={ 3 }>Library</Text>
                        <IconButton colorScheme="green" size="sm" mt={ 2 } mr={ 1 } icon={ <FaArrowRight /> } />
                    </Box>
                    <Link href="https://reactjs.org/" isExternal>
                        <Tooltip bg='gray.900' color='teal.500' label="React JS">
                            <IconButton mr={ 3 } colorScheme="teal" size="lg" icon={ <FaReact /> } variant="outline" />
                        </Tooltip>
                    </Link>
                </Box>
                <Box display="flex" boxShadow="dark-lg" p={ 5 } borderRadius="lg">
                    <Box display="flex" pl={ 3 } mr={ 3 } border="2px" borderColor="green.300" borderRadius="lg">
                        <Text pt={ 2 } pr={ 3 }>Frame-Work</Text>
                        <IconButton colorScheme="green" size="sm" mt={ 2 } mr={ 1 } icon={ <FaArrowRight /> } />
                    </Box>
                    <Link href="https://nextjs.org/" isExternal>
                        <Tooltip bg='gray.200' color='blackAlpha.900' label="Next JS">
                            <IconButton mr={ 3 } colorScheme="Black" size="lg" icon={ <FaNeos /> } variant="outline" />
                        </Tooltip>
                    </Link>
                    <Link href="https://chakra-ui.com/" isExternal>
                        <Tooltip bg='gray.900' color='teal.500' label="Chakra UI">
                            <IconButton mr={ 3 } colorScheme="teal" size="lg" icon={ <FaBolt /> } variant="outline" />
                        </Tooltip>
                    </Link>
                    <Link href="https://mui.com/" isExternal>
                        <Tooltip bg='gray.900' color='blue.500' label="Material UI">
                            <IconButton mr={ 3 } colorScheme="blue" size="lg" icon={ <FaMaxcdn /> } variant="outline" />
                        </Tooltip>
                    </Link>
                    <Link href="https://tailwindcss.com/" isExternal>
                        <Tooltip bg='gray.900' color='teal.500' label="Tailwind CSS">
                            <IconButton mr={ 3 } colorScheme="teal" size="lg" icon={ <FaTumblr /> } variant="outline" />
                        </Tooltip>
                    </Link>
                    <Link href="https://www.djangoproject.com/" isExternal>
                        <Tooltip bg='gray.900' color='teal.500' label="Django">
                            <IconButton mr={ 3 } colorScheme="green" size="lg" icon={ <FaDyalog /> } variant="outline" />
                        </Tooltip>
                    </Link>
                </Box>
                <Box my={ 2 } display="flex" boxShadow="dark-lg" p={ 5 } borderRadius="lg">
                    <Box display="flex" pl={ 3 } mr={ 3 } border="2px" borderColor="green.300" borderRadius="lg">
                        <Text pt={ 2 } pr={ 3 }>Tools</Text>
                        <IconButton colorScheme="green" size="sm" mt={ 2 } mr={ 1 } icon={ <FaArrowRight /> } />
                    </Box>
                    <Link href="https://code.visualstudio.com/" isExternal>
                        <Tooltip bg='gray.900' color='blue.500' label="Visual Studio Code">
                            <IconButton mr={ 3 } colorScheme="blue" size="lg" icon={ <FaInfinity /> } variant="outline" />
                        </Tooltip>
                    </Link>
                    <Link href="https://code.visualstudio.com/" isExternal>
                        <Tooltip bg='gray.900' color='orange.700' label="Abode XD">
                            <IconButton mr={ 3 } colorScheme="orange" size="lg" icon={ <FaXing /> } variant="outline" />
                        </Tooltip>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
