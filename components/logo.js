import { useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';


const LogoBox = styled.span`
    font-weight: bold
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: rotate(20deg);
    }
`

const Logo = () =>{
    const myLogo = `/images/ahmedsazzadlogo${useColorModeValue('','-dark')}.png`
    return(
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={ myLogo} width={20} height={20} alt="Logo"/>
                    {/* <Text color={useColorModeValue('gray.800','whiteAlpha.900')} fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={3}>
                        Ahmed Sazzad
                    </Text> */}
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;