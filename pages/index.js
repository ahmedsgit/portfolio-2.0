import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Heading, IconButton, Link, Text, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/Bio";
import Experience from '../components/Experience';
import Layout from "../components/layouts/article";
import Paragraph from '../components/paragraph';
import Section from '../components/section';

const page = ()=>{
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Layout>
            <Container maxW="container.xl">
                <Flex alignItems="center" justifyContent="center">
                    <Box w="md" boxShadow="dark-lg" border="1px" borderColor={isDark ? "teal.500" : "green.300"} borderTopLeftRadius="lg" borderBottomRightRadius="lg" bg={ useColorModeValue('whiteAlpha.500', 'whiteAlpha.200') } p={ 3 } mb={ 6 } align="center">
                        Hello I&apos;m a full-stack Web Developer based in Bangladesh!
                    </Box>
                </Flex>
                <Section delay={ 0.1 }>
                    <Heading as="h3" variant="section-title">About</Heading>
                    <Paragraph>
                        I'm a full-stack web developer. I would like to work in a positive environment and always prepare to take risk in order to fulfill
                        my dream of seeing me in a leadership position and having a challenging career, where I can
                        contribute my knowledge and skills to the organization and enhance my experience and
                        potential by achieving more knowledge through continuous learning, hard work and team work.
                    </Paragraph>
                </Section>
                <Experience/>
                <Box align="center" my={ 4 }>
                    <NextLink href="/works">
                        <Button rightIcon={ <ChevronRightIcon /> } colorScheme="teal">
                            My Projects
                        </Button>
                    </NextLink>
                </Box>
                <Section delay={ 0.2 }>
                    <Heading as="h3" variant="section-title">Bio</Heading>
                    <BioSection>
                        <BioYear>1996 :</BioYear>
                        Born in Madaripur( Bahadurpur ), Dhaka, Bangladesh.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 :</BioYear>
                        Graduation degree ( B.Sc.) in Computer science &amp; Engineering from East West Univeristy, Bangladesh
                    </BioSection>
                    <BioSection>
                        <BioYear>2019-2020 :</BioYear>
                        Works as a Database Engineer in Badsha Group of Industries.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020-Present :</BioYear>
                        Works as a full time Freelancer.
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default page;