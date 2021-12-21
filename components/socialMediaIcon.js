import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = ({logo,linkAdd}) => {
    return (
        <Link href={ linkAdd } isExternal>
            <a>
                <IconButton icon={logo} isRound='true' size="xs" mx={1} variant="outline"/>
            </a>
        </Link>
    );
};

export default Logo;