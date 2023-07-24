import React from 'react';
import { useAuthenticator, View } from '@aws-amplify/ui-react';
import { Menu, MenuItem, Divider, Badge } from '@aws-amplify/ui-react';
import { Flex } from '@aws-amplify/ui-react';

const HamburgerMenu = () => {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  
  return (
    <>
      <Flex direction="column" gap="1rem" alignItems="flex-end">
        {
          route === 'authenticated' ? 
          <Menu menuAlign="end" size="small">
            <MenuItem onClick={() => window.location.href = '/search'}>
              Dog&nbsp;<Badge size="small" variation="warning">承認待ち:3</Badge>
            </MenuItem>
            <MenuItem isDisabled>
              Cat
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => window.location.href = '/admin/user/userlist'}>
              ユーザー
            </MenuItem>
            <MenuItem isDisabled>
              店舗
            </MenuItem>
            <MenuItem isDisabled>
              グループ
            </MenuItem>
            <Divider />
            <MenuItem onClick={signOut}>
              ログアウト
            </MenuItem>
          </Menu>
          :
          <Menu menuAlign="end" size="small">
            <MenuItem onClick={() => window.location.href = '/search'}>
              ログイン
            </MenuItem>
          </Menu>
        }
      </Flex>
      <Flex direction="column" gap="1rem" alignItems="center">
        {
          route !== 'authenticated' ? 
          <View padding="0.5rem">
            {/* ※未ログイン時のメッセージを表示するエリアです。 */}
          </View>
          :
          ''
        }
        
      </Flex>
    </>
  );
}

export default HamburgerMenu;
