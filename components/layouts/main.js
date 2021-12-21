import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from '../navbar';

const Main = ({children,router}) =>{
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Ahmed Sazzad</title>
            </Head>
            <NavBar path={router.asPath}/>
            <Container maxW="container.xl" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main;