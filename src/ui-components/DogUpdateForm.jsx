/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Dog } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DogUpdateForm(props) {
  const {
    id: idProp,
    dog,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    size: undefined,
    type: undefined,
    gender: undefined,
    birthday: undefined,
    nature: undefined,
    type_hair: undefined,
    area: undefined,
    prefecture: undefined,
    particular_condition: undefined,
    free_word: "",
    image_name: "",
    publish_status: "",
    appeal_point: "",
    buy_flag: false,
    price_range: undefined,
  };
  const [size, setSize] = React.useState(initialValues.size);
  const [type, setType] = React.useState(initialValues.type);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [birthday, setBirthday] = React.useState(initialValues.birthday);
  const [nature, setNature] = React.useState(initialValues.nature);
  const [type_hair, setType_hair] = React.useState(initialValues.type_hair);
  const [area, setArea] = React.useState(initialValues.area);
  const [prefecture, setPrefecture] = React.useState(initialValues.prefecture);
  const [particular_condition, setParticular_condition] = React.useState(
    initialValues.particular_condition
  );
  const [free_word, setFree_word] = React.useState(initialValues.free_word);
  const [image_name, setImage_name] = React.useState(initialValues.image_name);
  const [publish_status, setPublish_status] = React.useState(
    initialValues.publish_status
  );
  const [appeal_point, setAppeal_point] = React.useState(
    initialValues.appeal_point
  );
  const [buy_flag, setBuy_flag] = React.useState(initialValues.buy_flag);
  const [price_range, setPrice_range] = React.useState(
    initialValues.price_range
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = dogRecord
      ? { ...initialValues, ...dogRecord }
      : initialValues;
    setSize(cleanValues.size);
    setType(cleanValues.type);
    setGender(cleanValues.gender);
    setBirthday(cleanValues.birthday);
    setNature(cleanValues.nature);
    setType_hair(cleanValues.type_hair);
    setArea(cleanValues.area);
    setPrefecture(cleanValues.prefecture);
    setParticular_condition(cleanValues.particular_condition);
    setFree_word(cleanValues.free_word);
    setImage_name(cleanValues.image_name);
    setPublish_status(cleanValues.publish_status);
    setAppeal_point(cleanValues.appeal_point);
    setBuy_flag(cleanValues.buy_flag);
    setPrice_range(cleanValues.price_range);
    setErrors({});
  };
  const [dogRecord, setDogRecord] = React.useState(dog);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Dog, idProp) : dog;
      setDogRecord(record);
    };
    queryData();
  }, [idProp, dog]);
  React.useEffect(resetStateValues, [dogRecord]);
  const validations = {
    size: [],
    type: [],
    gender: [],
    birthday: [],
    nature: [],
    type_hair: [],
    area: [],
    prefecture: [],
    particular_condition: [],
    free_word: [],
    image_name: [],
    publish_status: [],
    appeal_point: [],
    buy_flag: [],
    price_range: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          size,
          type,
          gender,
          birthday,
          nature,
          type_hair,
          area,
          prefecture,
          particular_condition,
          free_word,
          image_name,
          publish_status,
          appeal_point,
          buy_flag,
          price_range,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Dog.copyOf(dogRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DogUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Size"
        placeholder="Please select an option"
        isDisabled={false}
        value={size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size: value,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.size ?? value;
          }
          if (errors.size?.hasError) {
            runValidationTasks("size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("size", size)}
        errorMessage={errors.size?.errorMessage}
        hasError={errors.size?.hasError}
        {...getOverrideProps(overrides, "size")}
      >
        <option
          children="Ultra small"
          value="ULTRA_SMALL"
          {...getOverrideProps(overrides, "sizeoption0")}
        ></option>
        <option
          children="Small"
          value="SMALL"
          {...getOverrideProps(overrides, "sizeoption1")}
        ></option>
        <option
          children="Medium"
          value="MEDIUM"
          {...getOverrideProps(overrides, "sizeoption2")}
        ></option>
        <option
          children="Large"
          value="LARGE"
          {...getOverrideProps(overrides, "sizeoption3")}
        ></option>
        <option
          children="Ultra large"
          value="ULTRA_LARGE"
          {...getOverrideProps(overrides, "sizeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type: value,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Akitaken"
          value="AKITAKEN"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Poodle"
          value="POODLE"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Collie"
          value="COLLIE"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Pomeranian"
          value="POMERANIAN"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="Golden retriever"
          value="GOLDEN_RETRIEVER"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
        <option
          children="Siberian husky"
          value="SIBERIAN_HUSKY"
          {...getOverrideProps(overrides, "typeoption5")}
        ></option>
        <option
          children="Chihuahua"
          value="CHIHUAHUA"
          {...getOverrideProps(overrides, "typeoption6")}
        ></option>
        <option
          children="Standard dachshund"
          value="STANDARD_DACHSHUND"
          {...getOverrideProps(overrides, "typeoption7")}
        ></option>
      </SelectField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender: value,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "genderoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "genderoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Birthday"
        placeholder="Please select an option"
        isDisabled={false}
        value={birthday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday: value,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.birthday ?? value;
          }
          if (errors.birthday?.hasError) {
            runValidationTasks("birthday", value);
          }
          setBirthday(value);
        }}
        onBlur={() => runValidationTasks("birthday", birthday)}
        errorMessage={errors.birthday?.errorMessage}
        hasError={errors.birthday?.hasError}
        {...getOverrideProps(overrides, "birthday")}
      >
        <option
          children="After 49 90"
          value="AFTER_49_90"
          {...getOverrideProps(overrides, "birthdayoption0")}
        ></option>
        <option
          children="After 98 180"
          value="AFTER_98_180"
          {...getOverrideProps(overrides, "birthdayoption1")}
        ></option>
        <option
          children="After 181"
          value="AFTER_181"
          {...getOverrideProps(overrides, "birthdayoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Nature"
        placeholder="Please select an option"
        isDisabled={false}
        value={nature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature: value,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.nature ?? value;
          }
          if (errors.nature?.hasError) {
            runValidationTasks("nature", value);
          }
          setNature(value);
        }}
        onBlur={() => runValidationTasks("nature", nature)}
        errorMessage={errors.nature?.errorMessage}
        hasError={errors.nature?.hasError}
        {...getOverrideProps(overrides, "nature")}
      >
        <option
          children="Short"
          value="SHORT"
          {...getOverrideProps(overrides, "natureoption0")}
        ></option>
        <option
          children="Long"
          value="LONG"
          {...getOverrideProps(overrides, "natureoption1")}
        ></option>
        <option
          children="Special"
          value="SPECIAL"
          {...getOverrideProps(overrides, "natureoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Type hair"
        placeholder="Please select an option"
        isDisabled={false}
        value={type_hair}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair: value,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.type_hair ?? value;
          }
          if (errors.type_hair?.hasError) {
            runValidationTasks("type_hair", value);
          }
          setType_hair(value);
        }}
        onBlur={() => runValidationTasks("type_hair", type_hair)}
        errorMessage={errors.type_hair?.errorMessage}
        hasError={errors.type_hair?.hasError}
        {...getOverrideProps(overrides, "type_hair")}
      >
        <option
          children="Short"
          value="SHORT"
          {...getOverrideProps(overrides, "type_hairoption0")}
        ></option>
        <option
          children="Long"
          value="LONG"
          {...getOverrideProps(overrides, "type_hairoption1")}
        ></option>
        <option
          children="Special"
          value="SPECIAL"
          {...getOverrideProps(overrides, "type_hairoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Area"
        placeholder="Please select an option"
        isDisabled={false}
        value={area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area: value,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setArea(value);
        }}
        onBlur={() => runValidationTasks("area", area)}
        errorMessage={errors.area?.errorMessage}
        hasError={errors.area?.hasError}
        {...getOverrideProps(overrides, "area")}
      >
        <option
          children="A tohoku"
          value="A_TOHOKU"
          {...getOverrideProps(overrides, "areaoption0")}
        ></option>
        <option
          children="B kanto"
          value="B_KANTO"
          {...getOverrideProps(overrides, "areaoption1")}
        ></option>
        <option
          children="C chubu"
          value="C_CHUBU"
          {...getOverrideProps(overrides, "areaoption2")}
        ></option>
        <option
          children="D kinki"
          value="D_KINKI"
          {...getOverrideProps(overrides, "areaoption3")}
        ></option>
        <option
          children="E chugoku"
          value="E_CHUGOKU"
          {...getOverrideProps(overrides, "areaoption4")}
        ></option>
        <option
          children="F shikoku"
          value="F_SHIKOKU"
          {...getOverrideProps(overrides, "areaoption5")}
        ></option>
        <option
          children="G kyushu"
          value="G_KYUSHU"
          {...getOverrideProps(overrides, "areaoption6")}
        ></option>
      </SelectField>
      <SelectField
        label="Prefecture"
        placeholder="Please select an option"
        isDisabled={false}
        value={prefecture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture: value,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.prefecture ?? value;
          }
          if (errors.prefecture?.hasError) {
            runValidationTasks("prefecture", value);
          }
          setPrefecture(value);
        }}
        onBlur={() => runValidationTasks("prefecture", prefecture)}
        errorMessage={errors.prefecture?.errorMessage}
        hasError={errors.prefecture?.hasError}
        {...getOverrideProps(overrides, "prefecture")}
      >
        <option
          children="A01 hokkaido"
          value="A01_HOKKAIDO"
          {...getOverrideProps(overrides, "prefectureoption0")}
        ></option>
        <option
          children="A02 aomori"
          value="A02_AOMORI"
          {...getOverrideProps(overrides, "prefectureoption1")}
        ></option>
        <option
          children="A03 iwate"
          value="A03_IWATE"
          {...getOverrideProps(overrides, "prefectureoption2")}
        ></option>
        <option
          children="A04 miyagi"
          value="A04_MIYAGI"
          {...getOverrideProps(overrides, "prefectureoption3")}
        ></option>
        <option
          children="A05 akita"
          value="A05_AKITA"
          {...getOverrideProps(overrides, "prefectureoption4")}
        ></option>
        <option
          children="A06 yamagata"
          value="A06_YAMAGATA"
          {...getOverrideProps(overrides, "prefectureoption5")}
        ></option>
        <option
          children="A07 fukushima"
          value="A07_FUKUSHIMA"
          {...getOverrideProps(overrides, "prefectureoption6")}
        ></option>
        <option
          children="A08 ibaraki"
          value="A08_IBARAKI"
          {...getOverrideProps(overrides, "prefectureoption7")}
        ></option>
        <option
          children="A09 tochigi"
          value="A09_TOCHIGI"
          {...getOverrideProps(overrides, "prefectureoption8")}
        ></option>
        <option
          children="A10 gumma"
          value="A10_GUMMA"
          {...getOverrideProps(overrides, "prefectureoption9")}
        ></option>
        <option
          children="A11 saitama"
          value="A11_SAITAMA"
          {...getOverrideProps(overrides, "prefectureoption10")}
        ></option>
        <option
          children="A12 chiba"
          value="A12_CHIBA"
          {...getOverrideProps(overrides, "prefectureoption11")}
        ></option>
        <option
          children="A13 tokyo"
          value="A13_TOKYO"
          {...getOverrideProps(overrides, "prefectureoption12")}
        ></option>
        <option
          children="A14 kanagawa"
          value="A14_KANAGAWA"
          {...getOverrideProps(overrides, "prefectureoption13")}
        ></option>
        <option
          children="A15 nigata"
          value="A15_NIGATA"
          {...getOverrideProps(overrides, "prefectureoption14")}
        ></option>
        <option
          children="A16 toyama"
          value="A16_TOYAMA"
          {...getOverrideProps(overrides, "prefectureoption15")}
        ></option>
        <option
          children="A17 ishikawa"
          value="A17_ISHIKAWA"
          {...getOverrideProps(overrides, "prefectureoption16")}
        ></option>
        <option
          children="A18 fukui"
          value="A18_FUKUI"
          {...getOverrideProps(overrides, "prefectureoption17")}
        ></option>
        <option
          children="A19 yamanashi"
          value="A19_YAMANASHI"
          {...getOverrideProps(overrides, "prefectureoption18")}
        ></option>
        <option
          children="A20 nagano"
          value="A20_NAGANO"
          {...getOverrideProps(overrides, "prefectureoption19")}
        ></option>
        <option
          children="A21 gifu"
          value="A21_GIFU"
          {...getOverrideProps(overrides, "prefectureoption20")}
        ></option>
        <option
          children="A22 shizuoka"
          value="A22_SHIZUOKA"
          {...getOverrideProps(overrides, "prefectureoption21")}
        ></option>
        <option
          children="A23 aichi"
          value="A23_AICHI"
          {...getOverrideProps(overrides, "prefectureoption22")}
        ></option>
        <option
          children="A24 mie"
          value="A24_MIE"
          {...getOverrideProps(overrides, "prefectureoption23")}
        ></option>
        <option
          children="A25 shiga"
          value="A25_SHIGA"
          {...getOverrideProps(overrides, "prefectureoption24")}
        ></option>
        <option
          children="A26 kyoto"
          value="A26_KYOTO"
          {...getOverrideProps(overrides, "prefectureoption25")}
        ></option>
        <option
          children="A27 osaka"
          value="A27_OSAKA"
          {...getOverrideProps(overrides, "prefectureoption26")}
        ></option>
        <option
          children="A28 hyogo"
          value="A28_HYOGO"
          {...getOverrideProps(overrides, "prefectureoption27")}
        ></option>
        <option
          children="A29 nara"
          value="A29_NARA"
          {...getOverrideProps(overrides, "prefectureoption28")}
        ></option>
        <option
          children="A30 wakayama"
          value="A30_WAKAYAMA"
          {...getOverrideProps(overrides, "prefectureoption29")}
        ></option>
        <option
          children="A31 tottori"
          value="A31_TOTTORI"
          {...getOverrideProps(overrides, "prefectureoption30")}
        ></option>
        <option
          children="A32 shimane"
          value="A32_SHIMANE"
          {...getOverrideProps(overrides, "prefectureoption31")}
        ></option>
        <option
          children="A33 okayama"
          value="A33_OKAYAMA"
          {...getOverrideProps(overrides, "prefectureoption32")}
        ></option>
        <option
          children="A34 hiroshima"
          value="A34_HIROSHIMA"
          {...getOverrideProps(overrides, "prefectureoption33")}
        ></option>
        <option
          children="A35 yamaguchi"
          value="A35_YAMAGUCHI"
          {...getOverrideProps(overrides, "prefectureoption34")}
        ></option>
        <option
          children="A36 tokushima"
          value="A36_TOKUSHIMA"
          {...getOverrideProps(overrides, "prefectureoption35")}
        ></option>
        <option
          children="A37 kagawa"
          value="A37_KAGAWA"
          {...getOverrideProps(overrides, "prefectureoption36")}
        ></option>
        <option
          children="A38 ehime"
          value="A38_EHIME"
          {...getOverrideProps(overrides, "prefectureoption37")}
        ></option>
        <option
          children="A39 kochi"
          value="A39_KOCHI"
          {...getOverrideProps(overrides, "prefectureoption38")}
        ></option>
        <option
          children="A40 fukuoka"
          value="A40_FUKUOKA"
          {...getOverrideProps(overrides, "prefectureoption39")}
        ></option>
        <option
          children="A41 saga"
          value="A41_SAGA"
          {...getOverrideProps(overrides, "prefectureoption40")}
        ></option>
        <option
          children="A42 nagasaki"
          value="A42_NAGASAKI"
          {...getOverrideProps(overrides, "prefectureoption41")}
        ></option>
        <option
          children="A43 kumamoto"
          value="A43_KUMAMOTO"
          {...getOverrideProps(overrides, "prefectureoption42")}
        ></option>
        <option
          children="A44 oita"
          value="A44_OITA"
          {...getOverrideProps(overrides, "prefectureoption43")}
        ></option>
        <option
          children="A45 miyazaki"
          value="A45_MIYAZAKI"
          {...getOverrideProps(overrides, "prefectureoption44")}
        ></option>
        <option
          children="A46 kagoshima"
          value="A46_KAGOSHIMA"
          {...getOverrideProps(overrides, "prefectureoption45")}
        ></option>
        <option
          children="A47 okinawa"
          value="A47_OKINAWA"
          {...getOverrideProps(overrides, "prefectureoption46")}
        ></option>
      </SelectField>
      <SelectField
        label="Particular condition"
        placeholder="Please select an option"
        isDisabled={false}
        value={particular_condition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition: value,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.particular_condition ?? value;
          }
          if (errors.particular_condition?.hasError) {
            runValidationTasks("particular_condition", value);
          }
          setParticular_condition(value);
        }}
        onBlur={() =>
          runValidationTasks("particular_condition", particular_condition)
        }
        errorMessage={errors.particular_condition?.errorMessage}
        hasError={errors.particular_condition?.hasError}
        {...getOverrideProps(overrides, "particular_condition")}
      >
        <option
          children="Rare"
          value="RARE"
          {...getOverrideProps(overrides, "particular_conditionoption0")}
        ></option>
        <option
          children="Pedigree"
          value="PEDIGREE"
          {...getOverrideProps(overrides, "particular_conditionoption1")}
        ></option>
        <option
          children="Champion"
          value="CHAMPION"
          {...getOverrideProps(overrides, "particular_conditionoption2")}
        ></option>
        <option
          children="Video"
          value="VIDEO"
          {...getOverrideProps(overrides, "particular_conditionoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Free word"
        isRequired={false}
        isReadOnly={false}
        value={free_word}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word: value,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.free_word ?? value;
          }
          if (errors.free_word?.hasError) {
            runValidationTasks("free_word", value);
          }
          setFree_word(value);
        }}
        onBlur={() => runValidationTasks("free_word", free_word)}
        errorMessage={errors.free_word?.errorMessage}
        hasError={errors.free_word?.hasError}
        {...getOverrideProps(overrides, "free_word")}
      ></TextField>
      <TextField
        label="Image name"
        isRequired={false}
        isReadOnly={false}
        value={image_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name: value,
              publish_status,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.image_name ?? value;
          }
          if (errors.image_name?.hasError) {
            runValidationTasks("image_name", value);
          }
          setImage_name(value);
        }}
        onBlur={() => runValidationTasks("image_name", image_name)}
        errorMessage={errors.image_name?.errorMessage}
        hasError={errors.image_name?.hasError}
        {...getOverrideProps(overrides, "image_name")}
      ></TextField>
      <TextField
        label="Publish status"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={publish_status}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status: value,
              appeal_point,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.publish_status ?? value;
          }
          if (errors.publish_status?.hasError) {
            runValidationTasks("publish_status", value);
          }
          setPublish_status(value);
        }}
        onBlur={() => runValidationTasks("publish_status", publish_status)}
        errorMessage={errors.publish_status?.errorMessage}
        hasError={errors.publish_status?.hasError}
        {...getOverrideProps(overrides, "publish_status")}
      ></TextField>
      <TextField
        label="Appeal point"
        isRequired={false}
        isReadOnly={false}
        value={appeal_point}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point: value,
              buy_flag,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.appeal_point ?? value;
          }
          if (errors.appeal_point?.hasError) {
            runValidationTasks("appeal_point", value);
          }
          setAppeal_point(value);
        }}
        onBlur={() => runValidationTasks("appeal_point", appeal_point)}
        errorMessage={errors.appeal_point?.errorMessage}
        hasError={errors.appeal_point?.hasError}
        {...getOverrideProps(overrides, "appeal_point")}
      ></TextField>
      <SwitchField
        label="Buy flag"
        defaultChecked={false}
        isDisabled={false}
        isChecked={buy_flag}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag: value,
              price_range,
            };
            const result = onChange(modelFields);
            value = result?.buy_flag ?? value;
          }
          if (errors.buy_flag?.hasError) {
            runValidationTasks("buy_flag", value);
          }
          setBuy_flag(value);
        }}
        onBlur={() => runValidationTasks("buy_flag", buy_flag)}
        errorMessage={errors.buy_flag?.errorMessage}
        hasError={errors.buy_flag?.hasError}
        {...getOverrideProps(overrides, "buy_flag")}
      ></SwitchField>
      <SelectField
        label="Price range"
        placeholder="Please select an option"
        isDisabled={false}
        value={price_range}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              type,
              gender,
              birthday,
              nature,
              type_hair,
              area,
              prefecture,
              particular_condition,
              free_word,
              image_name,
              publish_status,
              appeal_point,
              buy_flag,
              price_range: value,
            };
            const result = onChange(modelFields);
            value = result?.price_range ?? value;
          }
          if (errors.price_range?.hasError) {
            runValidationTasks("price_range", value);
          }
          setPrice_range(value);
        }}
        onBlur={() => runValidationTasks("price_range", price_range)}
        errorMessage={errors.price_range?.errorMessage}
        hasError={errors.price_range?.hasError}
        {...getOverrideProps(overrides, "price_range")}
      >
        <option
          children="Under 50000"
          value="UNDER_50000"
          {...getOverrideProps(overrides, "price_rangeoption0")}
        ></option>
        <option
          children="Under 100000"
          value="UNDER_100000"
          {...getOverrideProps(overrides, "price_rangeoption1")}
        ></option>
        <option
          children="Under 150000"
          value="UNDER_150000"
          {...getOverrideProps(overrides, "price_rangeoption2")}
        ></option>
        <option
          children="Under 200000"
          value="UNDER_200000"
          {...getOverrideProps(overrides, "price_rangeoption3")}
        ></option>
        <option
          children="Under 250000"
          value="UNDER_250000"
          {...getOverrideProps(overrides, "price_rangeoption4")}
        ></option>
        <option
          children="Under 300000"
          value="UNDER_300000"
          {...getOverrideProps(overrides, "price_rangeoption5")}
        ></option>
        <option
          children="Over 300000"
          value="OVER_300000"
          {...getOverrideProps(overrides, "price_rangeoption6")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || dog)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || dog) || Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
