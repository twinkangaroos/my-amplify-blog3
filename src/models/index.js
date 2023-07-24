// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Prefecture = {
  "A01_HOKKAIDO": "A01_HOKKAIDO",
  "A02_AOMORI": "A02_AOMORI",
  "A03_IWATE": "A03_IWATE",
  "A04_MIYAGI": "A04_MIYAGI",
  "A05_AKITA": "A05_AKITA",
  "A06_YAMAGATA": "A06_YAMAGATA",
  "A07_FUKUSHIMA": "A07_FUKUSHIMA",
  "A08_IBARAKI": "A08_IBARAKI",
  "A09_TOCHIGI": "A09_TOCHIGI",
  "A10_GUMMA": "A10_GUMMA",
  "A11_SAITAMA": "A11_SAITAMA",
  "A12_CHIBA": "A12_CHIBA",
  "A13_TOKYO": "A13_TOKYO",
  "A14_KANAGAWA": "A14_KANAGAWA",
  "A15_NIGATA": "A15_NIGATA",
  "A16_TOYAMA": "A16_TOYAMA",
  "A17_ISHIKAWA": "A17_ISHIKAWA",
  "A18_FUKUI": "A18_FUKUI",
  "A19_YAMANASHI": "A19_YAMANASHI",
  "A20_NAGANO": "A20_NAGANO",
  "A21_GIFU": "A21_GIFU",
  "A22_SHIZUOKA": "A22_SHIZUOKA",
  "A23_AICHI": "A23_AICHI",
  "A24_MIE": "A24_MIE",
  "A25_SHIGA": "A25_SHIGA",
  "A26_KYOTO": "A26_KYOTO",
  "A27_OSAKA": "A27_OSAKA",
  "A28_HYOGO": "A28_HYOGO",
  "A29_NARA": "A29_NARA",
  "A30_WAKAYAMA": "A30_WAKAYAMA",
  "A31_TOTTORI": "A31_TOTTORI",
  "A32_SHIMANE": "A32_SHIMANE",
  "A33_OKAYAMA": "A33_OKAYAMA",
  "A34_HIROSHIMA": "A34_HIROSHIMA",
  "A35_YAMAGUCHI": "A35_YAMAGUCHI",
  "A36_TOKUSHIMA": "A36_TOKUSHIMA",
  "A37_KAGAWA": "A37_KAGAWA",
  "A38_EHIME": "A38_EHIME",
  "A39_KOCHI": "A39_KOCHI",
  "A40_FUKUOKA": "A40_FUKUOKA",
  "A41_SAGA": "A41_SAGA",
  "A42_NAGASAKI": "A42_NAGASAKI",
  "A43_KUMAMOTO": "A43_KUMAMOTO",
  "A44_OITA": "A44_OITA",
  "A45_MIYAZAKI": "A45_MIYAZAKI",
  "A46_KAGOSHIMA": "A46_KAGOSHIMA",
  "A47_OKINAWA": "A47_OKINAWA"
};

const Area = {
  "A_TOHOKU": "A_TOHOKU",
  "B_KANTO": "B_KANTO",
  "C_CHUBU": "C_CHUBU",
  "D_KINKI": "D_KINKI",
  "E_CHUGOKU": "E_CHUGOKU",
  "F_SHIKOKU": "F_SHIKOKU",
  "G_KYUSHU": "G_KYUSHU"
};

const ParticularCondition = {
  "RARE": "RARE",
  "PEDIGREE": "PEDIGREE",
  "CHAMPION": "CHAMPION",
  "VIDEO": "VIDEO"
};

const PriceRange = {
  "UNDER_50000": "UNDER_50000",
  "UNDER_100000": "UNDER_100000",
  "UNDER_150000": "UNDER_150000",
  "UNDER_200000": "UNDER_200000",
  "UNDER_250000": "UNDER_250000",
  "UNDER_300000": "UNDER_300000",
  "OVER_300000": "OVER_300000"
};

const TypeHair = {
  "SHORT": "SHORT",
  "LONG": "LONG",
  "SPECIAL": "SPECIAL"
};

const Nature = {
  "SHORT": "SHORT",
  "LONG": "LONG",
  "SPECIAL": "SPECIAL"
};

const Type = {
  "AKITAKEN": "AKITAKEN",
  "POODLE": "POODLE",
  "COLLIE": "COLLIE",
  "POMERANIAN": "POMERANIAN",
  "GOLDEN_RETRIEVER": "GOLDEN_RETRIEVER",
  "SIBERIAN_HUSKY": "SIBERIAN_HUSKY",
  "CHIHUAHUA": "CHIHUAHUA",
  "STANDARD_DACHSHUND": "STANDARD_DACHSHUND"
};

const Birthday = {
  "AFTER_49_90": "AFTER_49_90",
  "AFTER_98_180": "AFTER_98_180",
  "AFTER_181": "AFTER_181"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const Size = {
  "ULTRA_SMALL": "ULTRA_SMALL",
  "SMALL": "SMALL",
  "MEDIUM": "MEDIUM",
  "LARGE": "LARGE",
  "ULTRA_LARGE": "ULTRA_LARGE"
};

const { MPrefecture, MArea, MGroup, MParticularCondition, MPriceRange, MTypeHair, MNature, MType, MShop, MBirthday, MGender, MSize, Dog, Post } = initSchema(schema);

export {
  MPrefecture,
  MArea,
  MGroup,
  MParticularCondition,
  MPriceRange,
  MTypeHair,
  MNature,
  MType,
  MShop,
  MBirthday,
  MGender,
  MSize,
  Dog,
  Post,
  Prefecture,
  Area,
  ParticularCondition,
  PriceRange,
  TypeHair,
  Nature,
  Type,
  Birthday,
  Gender,
  Size
};