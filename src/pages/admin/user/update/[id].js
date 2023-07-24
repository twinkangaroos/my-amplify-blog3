import '@aws-amplify/ui-react/styles.css';
import { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../../../aws-exports';
Amplify.configure(awsconfig);
import { Card, View, Text, Flex, Badge, TextField, Button, useTheme, SelectField, SwitchField, Loader } from '@aws-amplify/ui-react';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { MGroup } from '../../../../models';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import HamburgerMenu from "../../../HamburgerMenu"
import Header from "../../../Header"
import Link from 'next/link'

const UpdateUser = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [groups, setGroups] = useState([])
    const [user_group, setUserGroup] = useState("")
    const [group_id, setGroupId] = useState("")
    const [user_enabled, setUserEnabled] = useState("")
    
    const { tokens } = useTheme();
    
    // 初期ロード時の処理
    useEffect(() => {
        doInit()
    }, [])
    
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

        // グループ リストボックス用マスタ取得（管理者の場合）
        if (groupResults[0].admin_flag) {
            const m_group = await DataStore.query(MGroup, Predicates.ALL, {
                sort:(s) => s.sort(SortDirection.ASCENDING),
            })
            setGroups(m_group)
        }
        else {
            // （管理者でない場合）
            setGroups(groupResults)
        }
        // 選択したユーザーの情報をセット
        setGroupId(props.user.custom_group)
        setUsername(props.user.Username)
        setEmail(props.user.email)
        setUserEnabled(props.user.Enabled)
    }

    // 更新ボタンクリック
    const onUClick = async (e) => {
        e.preventDefault();
        try {
            // ログインユーザーでアクセストークン作成（TODO：管理者であることを確認要）。
            const currentSession = await Auth.currentSession();
            const accessToken = currentSession.getAccessToken().getJwtToken();

            // 別のユーザーでログインしてアクセストークンを作ろうとすると、以下のエラーが発生するので使えない。
            // InvalidParameterException: Custom auth lambda trigger is not configured for the user pool.
            //const res = await Auth.signIn(username);
            //const accessToken = res.signInUserSession.getAccessToken().getJwtToken();
            
            const response = await fetch('/api/user/update_user', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": 'application/json',
                    "Authorization": accessToken,
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    group_id: group_id,
                    enabled: user_enabled,
                }),
            })
            const jsonData = await response.json()
            if (response.status === 200) {
                alert('ユーザーの更新が成功しました。')
            }
            else {
                alert('ユーザーの更新に失敗しました。')
                console.log("update error message.name=", jsonData.message.name)
            }
        } catch (error) {
            console.error('ユーザー属性の更新時にエラーが発生しました:', error);
        }
    }

    // 削除ボタンクリック
    const onDClick = () => {
        console.log("TODO:delete...")
    }

    // TODO:共通化
    // 日付を成形する関数
    const extractDateAndTimeChars = (dateString) => {
        return dateString.substring(0, 10) + " " + dateString.substring(11, 19)
    }

    return (
        <Authenticator.Provider>
        <Header />
        <HamburgerMenu />
        <Authenticator hideSignUp={true}>
        {({ signOut, user }) => ( 
            <>
            <Flex direction="row" alignItems="baseline" gap="4em">
            <h2>ユーザー編集</h2>
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
                                defaultValue={props.user.email}
                                width="300px"
                                onChange={e => setEmail(e.target.value)}
                                isDisabled
                            />
                            <Flex direction="row" alignItems="flex-start">
                                {props.user.email_verified === 'true' ? (
                                    <Badge size="small" variation="success">メールアドレス検証済み</Badge>
                                ) : (
                                    <Badge size="small" variation="warning">メールアドレス未検証</Badge>
                                )}
                                {props.user.UserStatus === 'FORCE_CHANGE_PASSWORD' ? (
                                    <Badge size="small" variation="info">パスワードを強制的に変更</Badge>
                                ) : props.user.UserStatus === 'CONFIRMED' ? (
                                    <Badge size="small" variation="success">確認済み</Badge>
                                ) : (
                                    <Badge size="small" variation="success">？</Badge>
                                )}
                            </Flex>
                            
                            <SwitchField
                                label="アカウント有効化"
                                labelPosition="start"
                                trackColor="#ccc"
                                trackCheckedColor={tokens.colors.gray}
                                defaultChecked={props.user.Enabled}
                                onChange={(e) => setUserEnabled(e.target.checked)}
                            />
                            
                            {
                                    groups && user_group && user_group.admin_flag ? 
                                    <SelectField
                                        label="グループ企業名"
                                        size="default"
                                        value={group_id}
                                        onChange={(e) => setGroupId(e.target.value)}
                                        width="300px"
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
                                        value={group_id}
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
                            <Text>
                                作成時刻：{extractDateAndTimeChars(props.user.UserCreateDate)}
                            </Text>
                            <Text>
                                最終更新時刻：{extractDateAndTimeChars(props.user.UserLastModifiedDate)}
                            </Text>
                            <Flex direction="row" alignItems="flex-start">
                                <Button variation="primary" onClick={onUClick}>更新する</Button>
                                <Button variation="warning" onClick={onDClick}>削除する</Button>
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

export default UpdateUser

// 先にAPIが実行される
export const getServerSideProps = async(context) => {
    const { req } = context
    let protocol = req.headers["x-forwarded-proto"] || "https"
    // Hostingすると「https, http」と入る対策
    protocol = protocol.includes("https") ? "https" : "http"
    const host = req.headers["x-forwarded-host"] || req.headers.host // ホストを取得 (リバースプロキシを考慮)
    const apiUrl = `${protocol}://${host}/api/user/${context.query.id}`
    const response = await fetch(apiUrl)
    const user = await response.json()
    /*
        const user = 
        {
            message: 'ユーザー取得成功',
            user: {
                Username: '37b48ad8-c0b1-7043-beb4-d8affd973f64',
                email: 'xxxxxxxx@gmail.com',
                email_verified: '',
                custom_group: '',
                UserStatus: 'FORCE_CHANGE_PASSWORD',
                Enabled: true,
                UserCreateDate: '2023-07-14T14:35:22.006Z',
                UserLastModifiedDate: '2023-07-14T14:35:22.006Z'
            }
        }
    */
    return {
        props: user
    }
}
