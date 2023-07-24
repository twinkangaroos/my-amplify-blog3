import '@aws-amplify/ui-react/styles.css';
import Link from 'next/link'
import { Table, TableCell, TableBody, TableHead, TableRow, Flex, Button, SelectField, Loader } from '@aws-amplify/ui-react';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { MGroup } from '../../../models';
import { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify'
import aws_exports from '../../../aws-exports'
Amplify.configure(aws_exports)

import HamburgerMenu from "../../HamburgerMenu"
import Header from "../../Header"

const UserList = (props) => {
  const [groups, setGroups] = useState([])
  const [user_group, setUserGroup] = useState("")
  const [condition_group, setConditionGroup] = useState("")
  const [user_list, setUserList] = useState([])

  // 初期ロード時の処理
  useEffect(() => {
    doInit()
  }, [])

  useEffect(() => {
    // グループマスタの取得（管理者のみグループ検索可）
    fetchGroup()
  }, [condition_group, user_group])

  // 初期処理
  async function doInit() {
    // 以下では'custom:group'が取得できないのでユーザー情報取得APIを実行する。
    const user = await Auth.currentAuthenticatedUser()
    const apiUrl = `/api/user/${user.username}`
    const response = await fetch(apiUrl)
    const login_user = await response.json()
    
    // TODO:グループマスタに存在しない例外処理
    // ログインユーザーのグループマスタを取得
    const groupResults = await DataStore.query(MGroup, (c) => c.id.eq(login_user.user.custom_group))
    setUserGroup(groupResults[0])

    // 管理者の場合、全グループを選択可
    if (groupResults[0].admin_flag) {
      const m_group = await DataStore.query(MGroup, Predicates.ALL, {
          sort:(s) => s.sort(SortDirection.ASCENDING),
      })
      setGroups(m_group)
    }
    // 管理者でない場合、ログインユーザーのグループのみ表示
    else {
      setGroups(groupResults)
      //　自グループのユーザーのみ対象
      const _user_list = []
      for (const _user of props.userList) {
        const _user_group = _user.Attributes.find(attr => attr.Name === 'custom:group').Value
        // 自グループidのユーザーのみ表示
        if (_user_group === groupResults[0].id) {
            _user_list.push(_user)
        }
      }
      setUserList(_user_list)
    }
  }

  // グループマスタ取得（管理者のみグループ検索可）
  async function fetchGroup() {
    // initが走ってから
    if (user_group) {
      // 管理者の場合のみ、グループ選択可
      if (user_group.admin_flag) {
        const _user_list = []
        // グループ「すべて」選択時
        if (!condition_group) {
          setUserList(props.userList)
        }
        // グループ選択時
        else {
          for (const _user of props.userList) {
            const _user_group = _user.Attributes.find(attr => attr.Name === 'custom:group').Value
            // 選択したグループidのユーザーのみ表示
            if (_user_group === condition_group) {
                _user_list.push(_user)
            }
          }
          setUserList(_user_list)
        }
      }
    }
  }

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
            <h2>ユーザー一覧</h2>
            {
                  user_group ? 
                  <h5>所属グループ：{user_group.group_name}（{user.attributes.email}）</h5>
                  :
                  <Loader />
              }
          </Flex>
          
          <Flex direction="row" gap="10rem" alignItems="right">
              <Link href="/admin/user/create_user">
                  <Button variation="primary" size="small">ユーザー登録</Button>
              </Link>
          </Flex>
          <Flex>&nbsp;</Flex>
          
          {
            user_group && groups && user_group.admin_flag ?
              <>
                <Flex direction="row" alignItems="flex-start">
                  <SelectField
                      label="グループ"
                      size="default"
                      onChange={(e) => setConditionGroup(e.target.value)}
                  >
                      <option key="" value="">すべて</option>
                      {
                          groups.map(item => (
                              <option key={item.id} value={item.id}>{item.group_name}</option>
                          ))
                      }
                  </SelectField>
                </Flex>
                <Flex>&nbsp;</Flex>
              </>
            :
            ""
          }
          
          <Table
              caption={""}
              highlightOnHover={true}
              size={"small"}
              variation={"striped"}
          >
            <TableHead>
                <TableRow>
                  <TableCell as="th">グループ企業名</TableCell>
                  <TableCell as="th">Eメールアドレス</TableCell>
                  <TableCell as="th">Eメール確認済み</TableCell>
                  <TableCell as="th">確認ステータス</TableCell>
                  <TableCell as="th">ステータス</TableCell>
                  <TableCell as="th">作成日時</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                user_list.map(user => (
                    <TableRow key={user.Username}>
                        {user.Attributes.find(attr => attr.Name === 'custom:group') ? (
                          <TableCell>{groups.find((item) => item.id === user.Attributes.find(attr => attr.Name === 'custom:group').Value)?.group_name}</TableCell>
                        ) : (
                          <TableCell>未設定</TableCell>
                        )}
                        <TableCell><Link href={`/admin/user/update/${user.Username}`}>{user.Attributes.find(attr => attr.Name === 'email').Value}</Link></TableCell>
                        {user.Attributes.find(attr => attr.Name === 'email_verified') && user.Attributes.find(attr => attr.Name === 'email_verified').Value ? (
                          <TableCell>メールアドレス検証済み</TableCell>
                        ) : (
                          <TableCell>メールアドレス未検証</TableCell>
                        )}
                        {user.UserStatus === 'FORCE_CHANGE_PASSWORD' ? (
                          <TableCell>パスワードを強制的に変更</TableCell>
                        ) : user.UserStatus === 'CONFIRMED' ? (
                          <TableCell>確認済み</TableCell>
                        ) : (
                          <TableCell>（不明）</TableCell>
                        )}
                        {user.Enabled ? (
                          <TableCell>有効</TableCell>
                        ) : (
                          <TableCell>無効</TableCell>
                        )}
                        <TableCell>{extractDateAndTimeChars(user.UserCreateDate)}</TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
          </Table>
        </>
        )}
        </Authenticator>
        </Authenticator.Provider>
  )
}

export default UserList

// 先にAPIが実行される
export const getServerSideProps = async(context) => {
    const { req } = context
    let protocol = req.headers["x-forwarded-proto"] || "https"
    // Hostingすると「https, http」と入る対策
    protocol = protocol.includes("https") ? "https" : "http"
    const host = req.headers["x-forwarded-host"] || req.headers.host // ホストを取得 (リバースプロキシを考慮)
    const apiUrl = `${protocol}://${host}/api/userlist`
    const response = await fetch(apiUrl)
    const userList = await response.json()
    /*
        console.log(userList[1].Attributes)
        const UserList =
        {
            message: 'ユーザーリスト取得成功',
            userList: [
              {
                Attributes: [Array],
                Enabled: true,
                UserCreateDate: '2023-07-14T14:35:22.006Z',
                UserLastModifiedDate: '2023-07-14T14:35:22.006Z',
                UserStatus: 'FORCE_CHANGE_PASSWORD',
                Username: '37b48ad8-c0b1-7043-beb4-d8affd973f64'
              },
            ]
        }
        // Attributes:
        [
          { Name: 'sub', Value: '6704fac8-60f1-70b3-5bb0-6003ffc69fd3' },
          { Name: 'email_verified', Value: 'true' },
          { Name: 'custom:group', Value: 'グループB' },
          { Name: 'email', Value: 'kawamura.takeo1@gmail.com' }
        ]
    */
    return {
        props: userList
    }
}
