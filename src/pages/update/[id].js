import '@aws-amplify/ui-react/styles.css';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { Dog, MSize, MType, MGender, MShop, MGroup, MArea, MPrefecture } from '../../models';
import { useState, useEffect } from 'react';
import { Amplify, Storage, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);
import { useRouter } from 'next/router'
import { Card, Image, View, Heading, Flex, Badge, Button, useTheme, SelectField, TextAreaField, SwitchField, Text, Loader }from '@aws-amplify/ui-react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import HamburgerMenu from "../HamburgerMenu"
import Header from "../Header"
import Link from 'next/link'

const UpdateDog = () => {
    const [dog, setDog] = useState("")
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

    // パスパラメータからidを取得
    const router = useRouter()
    const param_id = router.query.id
    
    useEffect(() => {
        doInit()
    }, [])

    useEffect(() => {
        // パラメータ取得後に処理実行
        if (param_id) {
            fetchDogs()
        }
    }, [param_id])

    // 初期ロード時の処理
    const doInit = async() => {
        // 以下では'custom:group'が取得できないのでユーザー情報取得APIを実行する。
        const user = await Auth.currentAuthenticatedUser()
        const apiUrl = `/api/user/${user.username}`
        const response = await fetch(apiUrl)
        const login_user = await response.json()
        
        // ログインユーザーのグループマスタを取得
        const groupResults = await DataStore.query(MGroup, (c) => c.id.eq(login_user.user.custom_group))
        setUserGroup(groupResults[0])
        
        // 管理者の場合、全店舗を選択可
        if (groupResults[0].admin_flag) {
            const shopResults = await DataStore.query(MShop, Predicates.ALL, {
                sort:(s) => s.area(SortDirection.ASCENDING).prefecture(SortDirection.ASCENDING).shop_name(SortDirection.ASCENDING),
            })
            setShops(shopResults)
        }
        // 管理者でない場合、ログインユーザーのグループに紐づく店舗マスタを取得
        else {
            const shopResults = await DataStore.query(MShop, (c) => c.mShopMGroupId.eq(login_user.user.custom_group), {
                sort:(s) => s.area(SortDirection.ASCENDING).prefecture(SortDirection.ASCENDING).shop_name(SortDirection.ASCENDING),
            })
            setShops(shopResults)
        }
        
        // リストボックス用データを各マスタから取得
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

        const m_area = await DataStore.query(MArea, Predicates.ALL, {
            sort:(s) => s.area(SortDirection.ASCENDING),
        })
        setAreas(m_area)
        
        const m_prefecture = await DataStore.query(MPrefecture, Predicates.ALL, {
            sort:(s) => s.prefecture(SortDirection.ASCENDING),
        })
        setPrefectures(m_prefecture)
    }

    // Dog取得
    const fetchDogs = async() => {
        // パラメータのIDより犬マスタを１件取得
        const _dog = await DataStore.query(Dog, (c) => c.id.eq(param_id))
        if (!_dog[0]) {
            return
        }
        setDog(_dog[0])
        setSize(_dog[0].size)
        setType(_dog[0].type)
        setGender(_dog[0].gender)
        setDogMShopId(_dog[0].dogMShopId)
        setAppealPoint(_dog[0].appeal_point)
        
        // 選択した店舗の情報を取得
        const shopResults = await DataStore.query(MShop, (c) => c.id.eq(_dog[0].dogMShopId))
        if (shopResults) {
            setArea(shopResults[0].area)
            setPrefecture(shopResults[0].prefecture)
        }
        // 画像の取得
        const opt = {
            level: 'public'
        }
        try {
            const image_file = await Storage.get(_dog[0].image_name, opt)
            setImage(image_file)
        }
        catch (error) {
            console.error('Error fetchImage:', error);
        }
    }

    // 更新ボタンクリック
    const onUClick = async () => {
        //　画像アップあり時
        if (selectedFileName) {
            DataStore.save(
                Dog.copyOf(
                    dog, 
                    updated => {
                        updated.size = size
                        updated.type = type
                        updated.gender = gender
                        updated.image_name = selectedFileName
                        updated.dogMShopId = dog_m_shop_id
                        updated.appeal_point = appeal_point
                        updated.area = area
                        updated.prefecture = prefecture
                    }
                )
            ).then(()=>{
                alert("Dogを更新しました。（画像ファイル名も更新しました）");
            })
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
        //　画像なし時
        else {
            DataStore.save(
                Dog.copyOf(
                    dog, 
                    updated => {
                        updated.size = size
                        updated.type = type
                        updated.gender = gender
                        updated.dogMShopId = dog_m_shop_id
                        updated.appeal_point = appeal_point
                        updated.area = area
                        updated.prefecture = prefecture
                    }
                )
            ).then(()=>{
                alert("Dogを更新しました。");
            });
        }
    }

    // 削除ボタンクリック
    const onDClick = () => {
        DataStore.delete(dog).then(()=>{
            alert("TODO:Dogを削除しました。");
        });
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

    // TODO:共通化
    // 日付を成形する関数
    const extractDateAndTimeChars = (dateString) => {
        if (dateString) {
            return dateString.substring(0, 10) + " " + dateString.substring(11, 19)
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
                <h2>Dog編集</h2>
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
                            <Flex direction="column" alignItems="flex-start" gap={tokens.space.xs}>
                                <Flex direction="row">
                                    <Badge size="small" variation="info">
                                        {extractDateAndTimeChars(dog.updatedAt)} 更新
                                    </Badge>
                                    {
                                        user_group && user_group.group_name && (
                                            <Badge size="small" variation="success">
                                                {user_group.group_name}
                                            </Badge>
                                        )
                                    }
                                </Flex>

                                <Heading level={6}>識別番号: {dog.id}</Heading>
                                
                                <SwitchField
                                    label="承認済み"
                                    labelPosition="start"
                                    trackColor="#ccc"
                                    trackCheckedColor={tokens.colors.gray}
                                    //defaultChecked={dog.publish_status}
                                    //onChange={(e) => setUserEnabled(e.target.checked)}
                                />
                                <SwitchField
                                    label="売却済み"
                                    labelPosition="start"
                                    trackColor="#ccc"
                                    trackCheckedColor={tokens.colors.gray}
                                    //defaultChecked={dog.buy_flag}
                                    //onChange={(e) => setUserEnabled(e.target.checked)}
                                />

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
                                    defaultValue={appeal_point}
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
                                
                                <Flex direction="row" alignItems="flex-start">
                                    <Button variation="primary" onClick={onUClick}>更新する</Button>
                                    <Button variation="warning" onClick={onDClick}>削除する</Button>
                                </Flex>
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
                                    // TODO:ファイルパスはDogごと・ファイル名の重複チェック
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

export default UpdateDog
