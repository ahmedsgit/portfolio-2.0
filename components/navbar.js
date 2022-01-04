import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem,
    MenuList, Stack, useColorMode, useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from './logo';
import SocialMediaIcon from './socialMediaIcon';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children, ...props }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
    return (
        <NextLink href={ href } passHref>
            <Link
                p={ 2 }
                bg={ active ? 'grassTeal' : undefined }
                color={ active ? '#202023' : inactiveColor }
                { ...props }
            >
                { children }
            </Link>
        </NextLink>
    );
};

const Navbar = props => {
    const { path } = props;
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={ useColorModeValue('#ffffff40', '#20202380') }
            css={ { backdropFilter: 'blur(10px)' } }
            zIndex={ 1 }
            { ...props }
        >
            <Container
                display="flex"
                p={ 2 }
                maxW="container.xl"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center">
                    <Heading as="h1" size="md" letterSpacing={ 'tighter' }>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={ { base: 'column', md: 'row' } }
                    display={ { base: 'none', md: 'flex' } }
                    width={ { base: 'full', md: 'auto' } }
                    alignItems="center"
                    flexGrow={ 1 }
                    mt={ { base: 4, md: 0 } }
                    justifyContent={{base:'center', md:'flex-end'}}
                >
                    <LinkItem href="/ " path={ path } color={ isDark ? 'white' : 'Black' } _hover={ { textDecoration: 'none' } } _focus={ { color: 'cyan' } }_active={ { color:'gray.400'}}>
                        Home
                    </LinkItem>
                    <LinkItem href="/works" path={ path } color={ isDark ? 'white' : 'Black' } _hover={ { textDecoration: 'none' } } _focus={ { color: 'cyan' } } _active={ { color:'gray.400'}}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={ path } color={ isDark ? 'white' : 'Black' } _hover={ { textDecoration: 'none' } } _focus={ { color: 'cyan' } }_active={ { color:'gray.400'}}>
                        Posts
                    </LinkItem>
                    <LinkItem
                        _target="_blank"
                        href="https://github.com/ahmedsgit"
                        path={ path }
                        display="inline-flex"
                        color={ isDark ? 'white' : 'Black' }
                        alignItems="center"
                        style={ { gap: 4 } }
                        pl={ 2 }
                        _hover={ { textDecoration: 'none' } } _focus={ { color: 'cyan' } }
                        _active={ { color: 'gray.400' } }
                    >
                        <FaGithub />Source
                    </LinkItem>
                </Stack>

                <Box flex={ 1 } align="right">
                    <SocialMediaIcon logo={ <FaInstagram /> } linkAdd="https://instagram.com"/>
                    <SocialMediaIcon logo={ <FaGithub /> } linkAdd="https://github.com/ahmedsgit"/>
                    <SocialMediaIcon logo={ <FaLinkedin /> } linkAdd="https://instagram.com"/>
                    <ThemeToggleButton />
                    <Box ml={ 2 } display={ { base: 'inline-block', md: 'none' } }>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={ IconButton }
                                icon={ <HamburgerIcon /> }
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem _hover={ { textDecoration: 'none', boxShadow: 'dark-lg', bgColor:'#999999',color:'#fff'}} as={ Link }>About</MenuItem>
                                </NextLink>
                                <NextLink  href="/works" passHref>
                                    <MenuItem _hover={ { textDecoration: 'none', boxShadow: 'dark-lg', bgColor:'#999999',color:'#fff'}} as={ Link }>Works</MenuItem>
                                </NextLink>
                                <NextLink  href="/posts" passHref>
                                    <MenuItem _hover={ { textDecoration: 'none', boxShadow: 'dark-lg', bgColor:'#999999',color:'#fff'}} as={ Link }>Posts</MenuItem>
                                </NextLink>
                                <MenuItem  _hover={ { textDecoration: 'none', boxShadow: 'dark-lg', bgColor:'#999999',color:'#fff'}}
                                    as={ Link }
                                    href="https://github.com/ahmedsgit?tab=repositories"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;