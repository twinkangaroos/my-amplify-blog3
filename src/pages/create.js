import '@aws-amplify/ui-react/styles.css';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { Dog, MSize, MType, MGender, MShop, MGroup, MArea, MPrefecture } from '../models';
import { useState, useEffect } from 'react';
import { Amplify, Storage, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

import { Card, Image, View, Heading, Flex, Button, useTheme, SelectField, TextAreaField, Text, Loader } from '@aws-amplify/ui-react';
import { StorageManager } from '@aws-amplify/ui-react-storage';

import HamburgerMenu from "./HamburgerMenu"
import Header from "./Header"
import Link from 'next/link'

const CreateDog = () => {
    const [size, setSize] = useState("")
    const [sizes, setSizes] = useState([])
    const [type, setType] = useState("")
    const [types, setTypes] = useState([])
    const [gender, setGender] = useState("")
    const [genders, setGenders] = useState([])
    const [image, setImage] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    const [shops, setShops] = useState([])
    const [dog_m_shop_id, setDogMShopId] = useState("")
    const [user_group, setUserGroup] = useState("")
    const [appeal_point, setAppealPoint] = useState("")
    const [areas, setAreas] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [area, setArea] = useState("")
    const [prefecture, setPrefecture] = useState("")

    const { tokens } = useTheme();

    // 初期ロード時の処理
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
        
        // 管理者の場合、全店舗を取得
        let shopResults = []
        if (groupResults[0].admin_flag) {
            shopResults = await DataStore.query(MShop, Predicates.ALL, {
                sort:(s) => s.area(SortDirection.ASCENDING).prefecture(SortDirection.ASCENDING).shop_name(SortDirection.ASCENDING),
            })
        }
        // 管理者でない場合、ログインユーザーのグループに紐づく店舗マスタを取得
        else {
            shopResults = await DataStore.query(MShop, (c) => c.mShopMGroupId.eq(login_user.user.custom_group), {
                sort:(s) => s.area(SortDirection.ASCENDING).prefecture(SortDirection.ASCENDING).shop_name(SortDirection.ASCENDING),
            })
        }
        setShops(shopResults)
        setDogMShopId(shopResults[0].id)

        // 選択した店舗の情報を取得
        const selectShopResults = await DataStore.query(MShop, (c) => c.id.eq(shopResults[0].id))
        if (selectShopResults) {
            setArea(shopResults[0].area)
            setPrefecture(shopResults[0].prefecture)
        }

        // リストボックス用データを各マスタから取得
        const m_size = await DataStore.query(MSize, Predicates.ALL, {
            sort:(s) => s.size(SortDirection.ASCENDING),
        })
        setSizes(m_size)
        setSize(m_size[0].size)

        const m_type = await DataStore.query(MType, Predicates.ALL, {
            sort:(s) => s.type(SortDirection.ASCENDING),
        })
        setTypes(m_type)
        setType(m_type[0].type)

        const m_gender = await DataStore.query(MGender, Predicates.ALL, {
            sort:(s) => s.gender(SortDirection.ASCENDING),
        })
        setGenders(m_gender)
        setGender(m_gender[0].gender)

        const m_area = await DataStore.query(MArea, Predicates.ALL, {
            sort:(s) => s.area(SortDirection.ASCENDING),
        })
        setAreas(m_area)
        setArea(m_area[0].area)
        
        const m_prefecture = await DataStore.query(MPrefecture, Predicates.ALL, {
            sort:(s) => s.prefecture(SortDirection.ASCENDING),
        })
        setPrefectures(m_prefecture)
        setPrefecture(m_prefecture[0].prefecture)
    }

    // 登録ボタンクリック
    const onClick = async()=> {
      const bd = new Dog({
        "size": size,
        "type": type,
        "gender": gender,
        "image_name": selectedFileName,
        "dogMShopId": dog_m_shop_id,
        "appeal_point": appeal_point,
        "area": area,
        "prefecture": prefecture,
      });
      DataStore.save(bd).then(()=>{
        // TODO:承認依頼メール送信
        alert("Dogの登録が完了し、管理会社に承認依頼メールを送信しました。承認されると一般公開されます。");
      });
      // 画像の取得
      const opt = {
          level: 'public'
      }
      try {
          const image_file = await Storage.get(selectedFileName, opt)
          setImage(image_file)
      }
      catch (error) {
          console.error('Error getImage:', error);
      }
    }

    // 店舗変更時
    const shopSelectChange = async (e) => {
        setDogMShopId(e.target.value)
        // 選択した店舗の情報を取得
        const shopResults = await DataStore.query(MShop, (c) => c.id.eq(e.target.value))
        if (shopResults) {
            setArea(shopResults[0].area)
            setPrefecture(shopResults[0].prefecture)
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
                <h2>Dog登録</h2>
                {
                    user_group ? 
                    <h5>所属グループ：{user_group.group_name}（{user.attributes.email}）</h5>
                    :
                    <Loader />
                }
            </Flex>

            <Flex direction="row" gap="10rem" alignItems="right">
                <Link href="/search">Dog一覧に戻る</Link>
            </Flex>
            <Flex>&nbsp;</Flex>

            <div>
                <View
                    backgroundColor={tokens.colors.background.secondary}
                    padding={tokens.space.medium}
                    >
                    <Card>
                        <Flex direction="row" alignItems="flex-start">
                            <Flex
                                direction="column"
                                alignItems="flex-start"
                                gap={tokens.space.xs}
                            >
                                
                                <Heading level={5}></Heading>

                                <SelectField
                                    label="種類"
                                    size="default"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    {
                                        types.map(item => (
                                            <option key={item.id} value={item.type}>{item.type_name}</option>
                                        ))
                                    }
                                </SelectField>
                                
                                <TextAreaField
                                    descriptiveText=""
                                    label="アピールポイント"
                                    width="400px"
                                    placeholder="とてもきれいな毛色をした女の子が入荷しました！性格は温厚で人懐っこく、人間が大好きです。"
                                    onChange={(e) => setAppealPoint(e.target.value)}
                                />
                                
                                <SelectField
                                    label="大きさ"
                                    size="default"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                >
                                    {
                                        sizes.map(item => (
                                            <option key={item.id} value={item.size}>{item.size_name}</option>
                                        ))
                                    }
                                </SelectField>

                                <SelectField
                                    label="性別"
                                    size="default"
                                    value={size}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    {
                                        genders.map(item => (
                                            <option key={item.id} value={item.gender}>{item.gender_name}</option>
                                        ))
                                    }
                                </SelectField>

                                <SelectField
                                    label="店舗"
                                    size="default"
                                    value={dog_m_shop_id}
                                    onChange={shopSelectChange}
                                >
                                    {
                                        shops.map(item => (
                                            <option key={item.id} value={item.id}>{item.shop_name}</option>
                                        ))
                                    }
                                </SelectField>
                                <Text variation="primary" fontSize="0.7em">店舗の場所：{areas.find((item) => item.area === area)?.area_name}エリア</Text>
                                <Text variation="primary" fontSize="0.7em">店舗都道府県：{prefectures.find((item) => item.prefecture === prefecture)?.prefecture_name}</Text>
                                
                                <Button variation="primary" onClick={onClick}>登録する</Button>
                                
                            </Flex>
                            <Flex direction="column">
                            {
                                image && (
                                <Image
                                    alt="ペットの画像ファイルです。"
                                    src={image}
                                    width="400px"
                                />
                                )
                            }
                            <StorageManager
                                acceptedFileTypes={['image/*']}
                                accessLevel="public"
                                maxFileCount={1}
                                isResumable
                                onUploadSuccess={({ key }) => {
                                    // アップロードは終わっているのでファイル名をセット（DB更新用）
                                    setSelectedFileName(key)
                                }}
                            />
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

export default CreateDog