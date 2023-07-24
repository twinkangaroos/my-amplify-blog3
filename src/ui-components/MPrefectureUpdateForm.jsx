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
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { MPrefecture } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MPrefectureUpdateForm(props) {
  const {
    id: idProp,
    mPrefecture,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    prefecture: undefined,
    prefecture_name: "",
    sort: "",
  };
  const [prefecture, setPrefecture] = React.useState(initialValues.prefecture);
  const [prefecture_name, setPrefecture_name] = React.useState(
    initialValues.prefecture_name
  );
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mPrefectureRecord
      ? { ...initialValues, ...mPrefectureRecord }
      : initialValues;
    setPrefecture(cleanValues.prefecture);
    setPrefecture_name(cleanValues.prefecture_name);
    setSort(cleanValues.sort);
    setErrors({});
  };
  const [mPrefectureRecord, setMPrefectureRecord] = React.useState(mPrefecture);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(MPrefecture, idProp)
        : mPrefecture;
      setMPrefectureRecord(record);
    };
    queryData();
  }, [idProp, mPrefecture]);
  React.useEffect(resetStateValues, [mPrefectureRecord]);
  const validations = {
    prefecture: [],
    prefecture_name: [],
    sort: [],
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
          prefecture,
          prefecture_name,
          sort,
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
            MPrefecture.copyOf(mPrefectureRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MPrefectureUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Prefecture"
        placeholder="Please select an option"
        isDisabled={false}
        value={prefecture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prefecture: value,
              prefecture_name,
              sort,
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
      <TextField
        label="Prefecture name"
        isRequired={false}
        isReadOnly={false}
        value={prefecture_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prefecture,
              prefecture_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.prefecture_name ?? value;
          }
          if (errors.prefecture_name?.hasError) {
            runValidationTasks("prefecture_name", value);
          }
          setPrefecture_name(value);
        }}
        onBlur={() => runValidationTasks("prefecture_name", prefecture_name)}
        errorMessage={errors.prefecture_name?.errorMessage}
        hasError={errors.prefecture_name?.hasError}
        {...getOverrideProps(overrides, "prefecture_name")}
      ></TextField>
      <TextField
        label="Sort"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sort}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              prefecture,
              prefecture_name,
              sort: value,
            };
            const result = onChange(modelFields);
            value = result?.sort ?? value;
          }
          if (errors.sort?.hasError) {
            runValidationTasks("sort", value);
          }
          setSort(value);
        }}
        onBlur={() => runValidationTasks("sort", sort)}
        errorMessage={errors.sort?.errorMessage}
        hasError={errors.sort?.hasError}
        {...getOverrideProps(overrides, "sort")}
      ></TextField>
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
          isDisabled={!(idProp || mPrefecture)}
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
              !(idProp || mPrefecture) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
