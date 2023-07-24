import React from 'react';
import { Heading, Flex, Link } from '@aws-amplify/ui-react';

const Header = () => {
  
  return (
    <>
      <Flex direction="column" gap="1rem" alignItems="center">
        <Heading level={5}><Link href="/">Twin kangaroos</Link></Heading>
      </Flex>
    </>
  );
}

export default Header;
