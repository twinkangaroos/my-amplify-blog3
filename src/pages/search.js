import '@aws-amplify/ui-react/styles.css';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { Dog, MSize, MType, MGender, MShop, MGroup } from '../models';
import { useState, useEffect } from 'react';
import Link from 'next/link'
//import { withAuthenticator } from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify'
import aws_exports from '../aws-exports'
Amplify.configure(aws_exports)

import { Button, Table, TableCell, TableBody, TableHead, TableRow, Flex, SelectField, Loader } from '@aws-amplify/ui-react';

import HamburgerMenu from "./HamburgerMenu"
import Header from "./Header"

const Search = () => {
    const [condition_type, setConditionType] = useState("")
    const [condition_shop, setConditionShop] = useState("")
    const [dogs, setDogs] = useState([])
    const [shops, setShops] = useState([])
    const [sizes, setSizes] = useState([])
    const [types, setTypes] = useState([])
    const [genders, setGenders] = useState([])
    const [user_group, setUserGroup] = useState("")
    
    // 初期処理
    useEffect(() => {
        doInit()
    }, []);

    // 検索条件選択→Dog抽出
    useEffect(() => {
        fetchDogs()
    }, [user_group, shops, condition_type, condition_shop]);
    // 初期処理が後の処理になった場合に備えて、初期設定でセットする変数をセット（変数がセットされたら起動するため）

    // 初期処理
    async function doInit() {
        // TODO:API実行は初回のみにしたい。
        // 以下では'custom:group'が取得できないのでユーザー情報取得APIを実行する。
        const user = await Auth.currentAuthenticatedUser()
        const apiUrl = `/api/user/${user.username}`
        const response = await fetch(apiUrl)
        const login_user = await response.json()
        
        // ログインユーザーのグループマスタを取得
        const groupResults = await DataStore.query(MGroup, (c) => c.id.eq(login_user.user.custom_group))
        setUserGroup(groupResults[0])

        // 店舗リストボックスの初期設定
        let shopResults = []
        // 管理者の場合、全店舗を取得
        if (groupResults[0].admin_flag) {
            shopResults = await DataStore.query(MShop, Predicates.ALL, {
                sort:(s) => s.area(SortDirection.ASCENDING).prefecture(SortDirection.ASCENDING).shop_name(SortDirection.ASCENDING),
            })
            setShops(shopResults)
        }
        // 管理者でない場合、ログインユーザーのグループに紐づく店舗を取得
        else {
            // ログインユーザーのグループに紐づく店舗マスタを取得
            shopResults = await DataStore.query(MShop, (c) => c.mShopMGroupId.eq(login_user.user.custom_group), {
                sort:(s) => s.area(SortDirection.ASCENDING).prefecture(SortDirection.ASCENDING).shop_name(SortDirection.ASCENDING),
            })
            setShops(shopResults)
        }

        // 各マスタ系をリストボックス用にセット
        const m_size = await DataStore.query(MSize, Predicates.ALL, {
            sort:(s) => s.size(SortDirection.ASCENDING),
        })
        setSizes(m_size)
        
        const m_type = await DataStore.query(MType, Predicates.ALL, {
            sort:(s) => s.type(SortDirection.ASCENDING),
        })
        setTypes(m_type)
        
        const m_gender = await DataStore.query(MGender, Predicates.ALL, {
            sort:(s) => s.gender(SortDirection.ASCENDING),
        })
        setGenders(m_gender)
    }

    // Dog取得
    async function fetchDogs() {
        // TODO:件数を増やした場合の検証
        // Dogを取得（全店舗）
        const dogsResults = await DataStore.query(Dog, (c) => c.and(c => [
                c.type.contains(condition_type),
                c.dogMShopId.contains(condition_shop),
            ]), {
                sort: (s) => s.area(SortDirection.ASCENDING).prefecture(SortDirection.ASCENDING).dogMShopId(SortDirection.ASCENDING).type(SortDirection.ASCENDING),
                // page: +input,
                limit: 1000 // TODO:ページング
            }
        )
        
        // 管理者の場合、全店舗のDogを取得
        if (user_group.admin_flag) {
            setDogs(dogsResults)
        }
        // 管理者でない場合、ユーザーが所属するグループに所属する店舗のDogのみ抽出
        else {
            const showSearch = []
            for (const _dog of dogsResults) {
                // ログインユーザーの所属するグループidのみDog抽出
                for (const _shop of shops) {
                    if (_shop.id === _dog.dogMShopId) {
                        showSearch.push(_dog)
                    }
                }
            }
            setDogs(showSearch) 
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
                <h2>Dog一覧</h2>
                {
                    user_group ? 
                    <h5>所属グループ：{user_group.group_name}（{user.attributes.email}）</h5>
                    :
                    <Loader />
                }
            </Flex>
            
            <Flex direction="row" gap="10rem" alignItems="right">
                <Link href="/create">
                    <Button variation="primary" size="small">Dog登録</Button>
                </Link>
            </Flex>
            <Flex>&nbsp;</Flex>
            
            <Flex
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                alignContent="flex-start"
                wrap="nowrap"
                gap="1rem"
            >
                <Flex direction="row" alignItems="flex-start">
                    <SelectField
                        label="店舗"
                        size="default"
                        value={condition_shop}
                        onChange={(e) => setConditionShop(e.target.value)}
                    >
                        <option key="" value="">すべて</option>
                        {
                            shops.map(item => (
                                <option key={item.id} value={item.id}>{item.shop_name}</option>
                            ))
                        }
                    </SelectField>

                    <SelectField
                        label="種類"
                        size="default"
                        value={condition_type}
                        onChange={(e) => setConditionType(e.target.value)}
                    >
                        <option key="" value="">すべて</option>
                        {
                            types.map(item => (
                                <option key={item.id} value={item.type}>{item.type_name}</option>
                            ))
                        }
                    </SelectField>
                </Flex>

                <Table
                    caption={""}
                    highlightOnHover={true}
                    size={"small"}
                    variation={"striped"}
                    >
                    <TableHead>
                        <TableRow>
                        <TableCell as="th">店舗</TableCell>
                        <TableCell as="th">種類</TableCell>
                        <TableCell as="th">大きさ</TableCell>
                        <TableCell as="th">性別</TableCell>
                        <TableCell as="th">画像ファイル名</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        dogs.map(dog => (
                            <TableRow key={dog.id}>
                                <TableCell>{shops.find((shop) => shop.id === dog.dogMShopId)?.shop_name}</TableCell>
                                <TableCell><Link href={`/update/${dog.id}`}>{types.find((item) => item.type === dog.type)?.type_name}</Link></TableCell>
                                <TableCell>{sizes.find((item) => item.size === dog.size)?.size_name}</TableCell>
                                <TableCell>{genders.find((item) => item.gender === dog.gender)?.gender_name}</TableCell>
                                <TableCell>{dog.image_name}</TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </Flex>
            </>
        )}
        </Authenticator>
        </Authenticator.Provider>
    )
}

export default Search
/*
//　ログイン中ユーザーのUsernameが取得できないためSSRは却下
export const getServerSideProps = async(context) => {
    const user_id = "57e40a28-9081-706d-70e8-b4579144bce7"
    const { req } = context
    const protocol = req.headers["x-forwarded-proto"] || "https" // プロトコルを取得 (リバースプロキシを考慮)
    const host = req.headers["x-forwarded-host"] || req.headers.host // ホストを取得 (リバースプロキシを考慮)
    const apiUrl = `${protocol}://${host}/api/user/${user_id}`
    const response = await fetch(apiUrl)
    const user = await response.json()
    return {
        props: user
    }
}
*/
    // 別のメソッドにすると取得が遅れるため使えない・・
    //　ログインユーザーのグループIDを取得
    /*
    async function getLoginUser() {
        // 以下では'custom:group'が取得できないのでユーザー情報取得APIを実行する。
        const user = await Auth.currentAuthenticatedUser()
        const apiUrl = `/api/user/${user.username}`
        const response = await fetch(apiUrl)
        const login_user = await response.json()
        setUserGroup(login_user.user.custom_group)
    }

    // ショップマスタ取得（ログインユーザーのグループのみ）
    async function fetchMShops() {
        // 以下では'custom:group'が取得できないのでユーザー情報取得APIを実行する。
        const user = await Auth.currentAuthenticatedUser()
        const apiUrl = `/api/user/${user.username}`
        const response = await fetch(apiUrl)
        const login_user = await response.json()
        setUserGroup(login_user.user.custom_group)
        const shopResults = await DataStore.query(MShop, (c) => c.mShopMGroupId.eq(login_user.user.custom_group))
        setShops(shopResults)
    }
*/
