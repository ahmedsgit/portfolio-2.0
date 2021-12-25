import { Box, Button, Circle, Flex, Image, Spacer, Stack, Text, useColorMode } from "@chakra-ui/react";
import AnimatedText from "./TextAnimationHeader";

const Header = ()=>{
    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Stack mb={5} ml={10}>
            <Circle
                position="absolute"
                bg={ isDark ? "whiteAlpha.600" : "gray.400" }
                opacity="0.1"
                w="300px"
                h="300px"
                alignSelf="flex-end"
            />
            <Flex direction={{base:"column",md:"row"}} spacing="200px" p={{base:32,md:0}} alignItems="center">
                <Box align="flex-start" m={20}>
                    <Text fontSize="3xl" fontWeight="semibold"> Hi I&apos;m</Text>
                    <Text fontSize="5xl" fontWeight="semibold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text"> Ahmed Sazzad</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>
                        <AnimatedText/>
                    </Text>
                    <Button ml={5} mt={8} colorScheme="teal" onClick="#" mr={5}>Hire Me</Button>
                    <Button mt={8} variant="outline" border="2px" borderColor={isDark? "teal" : "gray.400"} onClick="#">Resume</Button>
                </Box>
                <Spacer/> 
                <Image mr={ 12 } borderRadius="full" backgroundColor="transparent" boxShadow="2xl" border='4px' borderColor={ isDark ? "cyan.400" : "gray.300" } boxSize="300px" src="/images/ahmed.jpg" />

            </Flex>
        </Stack>
    )
}

export default Header;