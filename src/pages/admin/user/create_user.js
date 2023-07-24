import '@aws-amplify/ui-react/styles.css';
import { useState, useEffect } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);
import { Card, View, Flex, TextField, Button, useTheme, SelectField, Text, Loader } from '@aws-amplify/ui-react';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { MGroup } from '../../../models';
import { Authenticator } from '@aws-amplify/ui-react';
import HamburgerMenu from "../../HamburgerMenu"
import Header from "../../Header"
import Link from 'next/link'

const CreateUser = (props) => {
    const [email, setEmail] = useState("")
    const [groups, setGroups] = useState([])
    const [user_group, setUserGroup] = useState("")
    const [group_id, setGroupId] = useState("")
    
    const { tokens } = useTheme();
    
    // 初期処理
    useEffect(() => {
        doInit()
    }, []);

    // 初期処理
    async function doInit() {
        // 以下では'custom:group'が取得できないのでユーザー情報取得APIを実行する。
        const user = await Auth.currentAuthenticatedUser()
        const apiUrl = `/api/user/${user.username}`
        const response = await fetch(apiUrl)
        const login_user = await response.json()
        
        // ログインユーザーのグループマスタを取得
        const groupResults = await DataStore.query(MGroup, (c) => c.id.eq(login_user.user.custom_group))
        setUserGroup(groupResults[0])
        setGroupId(groupResults[0].id)
        
        // グループマスタ取得（管理者の場合）
        if (groupResults[0].admin_flag) {
            const m_group = await DataStore.query(MGroup, Predicates.ALL, {
                sort:(s) => s.sort(SortDirection.ASCENDING),
            })
            setGroups(m_group)
        } else {
            setGroups(groupResults)
        }
    }

    // 登録ボタンクリック
    const onUClick = async (e) => {
        e.preventDefault();
        try {
            // ログインユーザーでアクセストークン作成（TODO：管理者であることを確認要）。
            const currentSession = await Auth.currentSession();
            const accessToken = currentSession.getAccessToken().getJwtToken();
            const response = await fetch('/api/user/create_user', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": 'application/json',
                    "Authorization": accessToken,
                },
                body: JSON.stringify({
                    email: email,
                    group_id: group_id,
                }),
            })
            const jsonData = await response.json()
            if (response.status === 200) {
                alert('ユーザーの登録が成功しました。')
            }
            else {
                alert('ユーザーの登録に失敗しました。')
                console.log("insert error message.name=", jsonData.message.name)
            }
        } catch (error) {
            console.error('ユーザーの登録時にエラーが発生しました:', error);
        }
    }

    return (
        <Authenticator.Provider>
        <Header />
        <HamburgerMenu />
        <Authenticator hideSignUp={true}>
        {({ signOut, user }) => ( 
            <>
            <Flex direction="row" alignItems="baseline" gap="4em">
            <h2>ユーザー登録</h2>
            {
                    user_group ? 
                    <h5>所属グループ：{user_group.group_name}（{user.attributes.email}）</h5>
                    :
                    <Loader />
            }
            </Flex>
            
            <Flex direction="row" gap="10rem" alignItems="right">
                <Link href="/admin/user/userlist">ユーザー一覧に戻る</Link>
            </Flex>
            <Flex>&nbsp;</Flex>
            <div>
                <View
                    backgroundColor={tokens.colors.background.secondary}
                    padding={tokens.space.medium}
                    >
                    <Card>
                        <Flex direction="column" alignItems="flex-start">
                            <TextField
                                placeholder="xxx@gmail.com"
                                label="メールアドレス"
                                errorMessage="There is an error"
                                width="300px"
                                onChange={e => setEmail(e.target.value)}
                            />
                            {
                                    user_group.admin_flag ? 
                                    <SelectField
                                        label="グループ企業名"
                                        size="default"
                                        defaultValue={user_group.id}
                                        onChange={(e) => setGroupId(e.target.value)}
                                    >
                                        {
                                            groups.map(item => (
                                                <option key={item.id} value={item.id}>{item.group_name}</option>
                                            ))
                                        }
                                    </SelectField>
                                    :
                                    <SelectField
                                        label="グループ企業名"
                                        size="default"
                                        defaultValue={user_group.id}
                                        isDisabled={true}
                                        width="300px"
                                    >
                                        {
                                            groups.map(item => (
                                                <option key={item.id} value={item.id}>{item.group_name}</option>
                                            ))
                                        }
                                    </SelectField>
                            }
                            
                            <Flex direction="row" alignItems="center" gap="1em">
                                <Button variation="primary" onClick={onUClick}>登録する</Button>
                                <Text fontSize="0.7em">※「登録する」と、入力したメールアドレスに仮パスワードが送られます。</Text>
                            </Flex>
                        </Flex>
                    </Card>
                </View>
            </div>
        </>
        )}
        </Authenticator>
        </Authenticator.Provider>
    )
}

export default CreateUser
