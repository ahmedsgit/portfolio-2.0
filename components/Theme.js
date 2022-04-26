import React from 'react'

function Theme() {
  return (

      <Box flex={ 1 } align="right">
          <SocialMediaIcon logo={ <FaInstagram /> } linkAdd="https://instagram.com" />
          <SocialMediaIcon logo={ <FaGithub /> } linkAdd="https://github.com/ahmedsgit" />
          <SocialMediaIcon logo={ <FaLinkedin /> } linkAdd="https://instagram.com" />
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
                          <MenuItem _hover={ { textDecoration: 'none', boxShadow: 'dark-lg', bgColor: '#999999', color: '#fff' } } as={ Link }>About</MenuItem>
                      </NextLink>
                      <NextLink href="/works" passHref>
                          <MenuItem _hover={ { textDecoration: 'none', boxShadow: 'dark-lg', bgColor: '#999999', color: '#fff' } } as={ Link }>Works</MenuItem>
                      </NextLink>
                      <NextLink href="/posts" passHref>
                          <MenuItem _hover={ { textDecoration: 'none', boxShadow: 'dark-lg', bgColor: '#999999', color: '#fff' } } as={ Link }>Posts</MenuItem>
                      </NextLink>
                      <MenuItem _hover={ { textDecoration: 'none', boxShadow: 'dark-lg', bgColor: '#999999', color: '#fff' } }
                          as={ Link }
                          href="https://github.com/ahmedsgit?tab=repositories"
                      >
                          View Source
                      </MenuItem>
                  </MenuList>
              </Menu>
          </Box>
      </Box>
  )
}

export default Theme