import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/Bio";
import Layout from "../components/layouts/article";
import Paragraph from '../components/paragraph';
import Section from '../components/section';

const page = ()=>{
    return (
        <Layout>
            <Container maxW="container.xl">
                <Flex alignItems="center" justifyContent="center">
                    <Box w="md" borderTopLeftRadius="lg" borderBottomRightRadius="lg" bg={ useColorModeValue('whiteAlpha.500', 'whiteAlpha.200') } p={ 3 } mb={ 6 } align="center">
                        Hello I&apos;m a full-stack Web Developer based in Bangladesh!
                    </Box>
                </Flex>

                <Section delay={ 0.1 }>
                    <Heading as="h3" variant="section-title">About</Heading>
                    <Paragraph>
                        I'm a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop.
                    </Paragraph>
                    <Box align="center" my={ 4 }>
                        <NextLink href="/works">
                            <Button rightIcon={ <ChevronRightIcon /> } colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
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