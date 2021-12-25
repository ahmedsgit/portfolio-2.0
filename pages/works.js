import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/gridItem";
import thumbHulu from "../public/images/works/hulu-clone.jpg";

const Works = () =>{
    return (
        <Container maxW="container.xl" mt={10} >
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={ [1, 2, 3, 4] } gap={ 6 } >
                <Section>
                    <WorkGridItem id="huluClone007" title="Hulu Clone" thumbnile={thumbHulu}>
                        Simple Clone of Hulu Movie App Website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="huluClone007" title="Hulu Clone" thumbnile={thumbHulu}>
                        Simple Clone of Hulu Movie App Website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="huluClone007" title="Hulu Clone" thumbnile={thumbHulu}>
                        Simple Clone of Hulu Movie App Website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="huluClone007" title="Hulu Clone" thumbnile={thumbHulu}>
                        Simple Clone of Hulu Movie App Website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="huluClone007" title="Hulu Clone" thumbnile={thumbHulu}>
                        Simple Clone of Hulu Movie App Website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="huluClone007" title="Hulu Clone" thumbnile={thumbHulu}>
                        Simple Clone of Hulu Movie App Website
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;