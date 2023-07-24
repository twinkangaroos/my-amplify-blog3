import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Prefecture {
  A01_HOKKAIDO = "A01_HOKKAIDO",
  A02_AOMORI = "A02_AOMORI",
  A03_IWATE = "A03_IWATE",
  A04_MIYAGI = "A04_MIYAGI",
  A05_AKITA = "A05_AKITA",
  A06_YAMAGATA = "A06_YAMAGATA",
  A07_FUKUSHIMA = "A07_FUKUSHIMA",
  A08_IBARAKI = "A08_IBARAKI",
  A09_TOCHIGI = "A09_TOCHIGI",
  A10_GUMMA = "A10_GUMMA",
  A11_SAITAMA = "A11_SAITAMA",
  A12_CHIBA = "A12_CHIBA",
  A13_TOKYO = "A13_TOKYO",
  A14_KANAGAWA = "A14_KANAGAWA",
  A15_NIGATA = "A15_NIGATA",
  A16_TOYAMA = "A16_TOYAMA",
  A17_ISHIKAWA = "A17_ISHIKAWA",
  A18_FUKUI = "A18_FUKUI",
  A19_YAMANASHI = "A19_YAMANASHI",
  A20_NAGANO = "A20_NAGANO",
  A21_GIFU = "A21_GIFU",
  A22_SHIZUOKA = "A22_SHIZUOKA",
  A23_AICHI = "A23_AICHI",
  A24_MIE = "A24_MIE",
  A25_SHIGA = "A25_SHIGA",
  A26_KYOTO = "A26_KYOTO",
  A27_OSAKA = "A27_OSAKA",
  A28_HYOGO = "A28_HYOGO",
  A29_NARA = "A29_NARA",
  A30_WAKAYAMA = "A30_WAKAYAMA",
  A31_TOTTORI = "A31_TOTTORI",
  A32_SHIMANE = "A32_SHIMANE",
  A33_OKAYAMA = "A33_OKAYAMA",
  A34_HIROSHIMA = "A34_HIROSHIMA",
  A35_YAMAGUCHI = "A35_YAMAGUCHI",
  A36_TOKUSHIMA = "A36_TOKUSHIMA",
  A37_KAGAWA = "A37_KAGAWA",
  A38_EHIME = "A38_EHIME",
  A39_KOCHI = "A39_KOCHI",
  A40_FUKUOKA = "A40_FUKUOKA",
  A41_SAGA = "A41_SAGA",
  A42_NAGASAKI = "A42_NAGASAKI",
  A43_KUMAMOTO = "A43_KUMAMOTO",
  A44_OITA = "A44_OITA",
  A45_MIYAZAKI = "A45_MIYAZAKI",
  A46_KAGOSHIMA = "A46_KAGOSHIMA",
  A47_OKINAWA = "A47_OKINAWA"
}

export enum Area {
  A_TOHOKU = "A_TOHOKU",
  B_KANTO = "B_KANTO",
  C_CHUBU = "C_CHUBU",
  D_KINKI = "D_KINKI",
  E_CHUGOKU = "E_CHUGOKU",
  F_SHIKOKU = "F_SHIKOKU",
  G_KYUSHU = "G_KYUSHU"
}

export enum ParticularCondition {
  RARE = "RARE",
  PEDIGREE = "PEDIGREE",
  CHAMPION = "CHAMPION",
  VIDEO = "VIDEO"
}

export enum PriceRange {
  UNDER_50000 = "UNDER_50000",
  UNDER_100000 = "UNDER_100000",
  UNDER_150000 = "UNDER_150000",
  UNDER_200000 = "UNDER_200000",
  UNDER_250000 = "UNDER_250000",
  UNDER_300000 = "UNDER_300000",
  OVER_300000 = "OVER_300000"
}

export enum TypeHair {
  SHORT = "SHORT",
  LONG = "LONG",
  SPECIAL = "SPECIAL"
}

export enum Nature {
  SHORT = "SHORT",
  LONG = "LONG",
  SPECIAL = "SPECIAL"
}

export enum Type {
  AKITAKEN = "AKITAKEN",
  POODLE = "POODLE",
  COLLIE = "COLLIE",
  POMERANIAN = "POMERANIAN",
  GOLDEN_RETRIEVER = "GOLDEN_RETRIEVER",
  SIBERIAN_HUSKY = "SIBERIAN_HUSKY",
  CHIHUAHUA = "CHIHUAHUA",
  STANDARD_DACHSHUND = "STANDARD_DACHSHUND"
}

export enum Birthday {
  AFTER_49_90 = "AFTER_49_90",
  AFTER_98_180 = "AFTER_98_180",
  AFTER_181 = "AFTER_181"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

export enum Size {
  ULTRA_SMALL = "ULTRA_SMALL",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  ULTRA_LARGE = "ULTRA_LARGE"
}



type EagerMPrefecture = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MPrefecture, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prefecture?: Prefecture | keyof typeof Prefecture | null;
  readonly prefecture_name?: string | null;
  readonly sort?: number | null;
  readonly MArea?: MArea | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mPrefectureMAreaId?: string | null;
}

type LazyMPrefecture = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MPrefecture, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prefecture?: Prefecture | keyof typeof Prefecture | null;
  readonly prefecture_name?: string | null;
  readonly sort?: number | null;
  readonly MArea: AsyncItem<MArea | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mPrefectureMAreaId?: string | null;
}

export declare type MPrefecture = LazyLoading extends LazyLoadingDisabled ? EagerMPrefecture : LazyMPrefecture

export declare const MPrefecture: (new (init: ModelInit<MPrefecture>) => MPrefecture) & {
  copyOf(source: MPrefecture, mutator: (draft: MutableModel<MPrefecture>) => MutableModel<MPrefecture> | void): MPrefecture;
}

type EagerMArea = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MArea, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly area?: Area | keyof typeof Area | null;
  readonly area_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMArea = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MArea, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly area?: Area | keyof typeof Area | null;
  readonly area_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MArea = LazyLoading extends LazyLoadingDisabled ? EagerMArea : LazyMArea

export declare const MArea: (new (init: ModelInit<MArea>) => MArea) & {
  copyOf(source: MArea, mutator: (draft: MutableModel<MArea>) => MutableModel<MArea> | void): MArea;
}

type EagerMGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group_name?: string | null;
  readonly admin_flag?: boolean | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group_name?: string | null;
  readonly admin_flag?: boolean | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MGroup = LazyLoading extends LazyLoadingDisabled ? EagerMGroup : LazyMGroup

export declare const MGroup: (new (init: ModelInit<MGroup>) => MGroup) & {
  copyOf(source: MGroup, mutator: (draft: MutableModel<MGroup>) => MutableModel<MGroup> | void): MGroup;
}

type EagerMParticularCondition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MParticularCondition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly particular_condition?: ParticularCondition | keyof typeof ParticularCondition | null;
  readonly particular_condition_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMParticularCondition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MParticularCondition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly particular_condition?: ParticularCondition | keyof typeof ParticularCondition | null;
  readonly particular_condition_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MParticularCondition = LazyLoading extends LazyLoadingDisabled ? EagerMParticularCondition : LazyMParticularCondition

export declare const MParticularCondition: (new (init: ModelInit<MParticularCondition>) => MParticularCondition) & {
  copyOf(source: MParticularCondition, mutator: (draft: MutableModel<MParticularCondition>) => MutableModel<MParticularCondition> | void): MParticularCondition;
}

type EagerMPriceRange = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MPriceRange, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price_range?: PriceRange | keyof typeof PriceRange | null;
  readonly price_range_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMPriceRange = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MPriceRange, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price_range?: PriceRange | keyof typeof PriceRange | null;
  readonly price_range_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MPriceRange = LazyLoading extends LazyLoadingDisabled ? EagerMPriceRange : LazyMPriceRange

export declare const MPriceRange: (new (init: ModelInit<MPriceRange>) => MPriceRange) & {
  copyOf(source: MPriceRange, mutator: (draft: MutableModel<MPriceRange>) => MutableModel<MPriceRange> | void): MPriceRange;
}

type EagerMTypeHair = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MTypeHair, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type_hair?: TypeHair | keyof typeof TypeHair | null;
  readonly type_hair_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMTypeHair = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MTypeHair, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type_hair?: TypeHair | keyof typeof TypeHair | null;
  readonly type_hair_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MTypeHair = LazyLoading extends LazyLoadingDisabled ? EagerMTypeHair : LazyMTypeHair

export declare const MTypeHair: (new (init: ModelInit<MTypeHair>) => MTypeHair) & {
  copyOf(source: MTypeHair, mutator: (draft: MutableModel<MTypeHair>) => MutableModel<MTypeHair> | void): MTypeHair;
}

type EagerMNature = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MNature, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nature?: Nature | keyof typeof Nature | null;
  readonly nature_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMNature = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MNature, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nature?: Nature | keyof typeof Nature | null;
  readonly nature_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MNature = LazyLoading extends LazyLoadingDisabled ? EagerMNature : LazyMNature

export declare const MNature: (new (init: ModelInit<MNature>) => MNature) & {
  copyOf(source: MNature, mutator: (draft: MutableModel<MNature>) => MutableModel<MNature> | void): MNature;
}

type EagerMType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: Type | keyof typeof Type | null;
  readonly type_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: Type | keyof typeof Type | null;
  readonly type_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MType = LazyLoading extends LazyLoadingDisabled ? EagerMType : LazyMType

export declare const MType: (new (init: ModelInit<MType>) => MType) & {
  copyOf(source: MType, mutator: (draft: MutableModel<MType>) => MutableModel<MType> | void): MType;
}

type EagerMShop = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MShop, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shop_name?: string | null;
  readonly area?: Area | keyof typeof Area | null;
  readonly prefecture?: Prefecture | keyof typeof Prefecture | null;
  readonly MGroup?: MGroup | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mShopMGroupId?: string | null;
}

type LazyMShop = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MShop, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shop_name?: string | null;
  readonly area?: Area | keyof typeof Area | null;
  readonly prefecture?: Prefecture | keyof typeof Prefecture | null;
  readonly MGroup: AsyncItem<MGroup | undefined>;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mShopMGroupId?: string | null;
}

export declare type MShop = LazyLoading extends LazyLoadingDisabled ? EagerMShop : LazyMShop

export declare const MShop: (new (init: ModelInit<MShop>) => MShop) & {
  copyOf(source: MShop, mutator: (draft: MutableModel<MShop>) => MutableModel<MShop> | void): MShop;
}

type EagerMBirthday = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MBirthday, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly birthday?: Birthday | keyof typeof Birthday | null;
  readonly birthday_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMBirthday = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MBirthday, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly birthday?: Birthday | keyof typeof Birthday | null;
  readonly birthday_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MBirthday = LazyLoading extends LazyLoadingDisabled ? EagerMBirthday : LazyMBirthday

export declare const MBirthday: (new (init: ModelInit<MBirthday>) => MBirthday) & {
  copyOf(source: MBirthday, mutator: (draft: MutableModel<MBirthday>) => MutableModel<MBirthday> | void): MBirthday;
}

type EagerMGender = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MGender, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly gender_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMGender = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MGender, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly gender_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MGender = LazyLoading extends LazyLoadingDisabled ? EagerMGender : LazyMGender

export declare const MGender: (new (init: ModelInit<MGender>) => MGender) & {
  copyOf(source: MGender, mutator: (draft: MutableModel<MGender>) => MutableModel<MGender> | void): MGender;
}

type EagerMSize = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MSize, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly size?: Size | keyof typeof Size | null;
  readonly size_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMSize = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MSize, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly size?: Size | keyof typeof Size | null;
  readonly size_name?: string | null;
  readonly sort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MSize = LazyLoading extends LazyLoadingDisabled ? EagerMSize : LazyMSize

export declare const MSize: (new (init: ModelInit<MSize>) => MSize) & {
  copyOf(source: MSize, mutator: (draft: MutableModel<MSize>) => MutableModel<MSize> | void): MSize;
}

type EagerDog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly size?: Size | keyof typeof Size | null;
  readonly type?: Type | keyof typeof Type | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly birthday?: Birthday | keyof typeof Birthday | null;
  readonly MShop?: MShop | null;
  readonly nature?: Nature | keyof typeof Nature | null;
  readonly type_hair?: TypeHair | keyof typeof TypeHair | null;
  readonly area?: Area | keyof typeof Area | null;
  readonly prefecture?: Prefecture | keyof typeof Prefecture | null;
  readonly particular_condition?: ParticularCondition | keyof typeof ParticularCondition | null;
  readonly free_word?: string | null;
  readonly image_name?: string | null;
  readonly publish_status?: number | null;
  readonly appeal_point?: string | null;
  readonly buy_flag?: boolean | null;
  readonly price_range?: PriceRange | keyof typeof PriceRange | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dogMShopId?: string | null;
}

type LazyDog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly size?: Size | keyof typeof Size | null;
  readonly type?: Type | keyof typeof Type | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly birthday?: Birthday | keyof typeof Birthday | null;
  readonly MShop: AsyncItem<MShop | undefined>;
  readonly nature?: Nature | keyof typeof Nature | null;
  readonly type_hair?: TypeHair | keyof typeof TypeHair | null;
  readonly area?: Area | keyof typeof Area | null;
  readonly prefecture?: Prefecture | keyof typeof Prefecture | null;
  readonly particular_condition?: ParticularCondition | keyof typeof ParticularCondition | null;
  readonly free_word?: string | null;
  readonly image_name?: string | null;
  readonly publish_status?: number | null;
  readonly appeal_point?: string | null;
  readonly buy_flag?: boolean | null;
  readonly price_range?: PriceRange | keyof typeof PriceRange | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dogMShopId?: string | null;
}

export declare type Dog = LazyLoading extends LazyLoadingDisabled ? EagerDog : LazyDog

export declare const Dog: (new (init: ModelInit<Dog>) => Dog) & {
  copyOf(source: Dog, mutator: (draft: MutableModel<Dog>) => MutableModel<Dog> | void): Dog;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}