import { Container,Box,Heading } from "@chakra-ui/react";
const page = ()=>{
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello I&apos;m a full-stack Web developer based in Bangladesh!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Ahmed Sazzad
                    </Heading>
                    <p>Web Lover (UI/UX Designer | Developer | Designer) </p>
                </Box>

            </Box>
        </Container>
    )
}

export default page;