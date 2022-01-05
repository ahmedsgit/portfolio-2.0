import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/gridItem";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import getData from "../utiles/data";
const Works = () =>{
    const data = getData.projects;
    return (
        <Layout>
            <Container maxW="container.xl" mt={ 10 } >
                <Heading as="h3" fontSize={ 20 } mb={ 4 }>
                    Projects
                </Heading>
                <SimpleGrid columns={ [1, 2, 3, 4] } gap={ 6 } >
                        {data.map(project=>(
                            <Section>
                                <WorkGridItem LiveLink={ project.liveLink } CodeLink={ project.codeLink } id={ project.id } title={ project.title } thumbnile={ project.thumbnile }/>
                            </Section>
                        ))}
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;