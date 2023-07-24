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
import { MBirthday } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MBirthdayCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    birthday: undefined,
    birthday_name: "",
    sort: "",
  };
  const [birthday, setBirthday] = React.useState(initialValues.birthday);
  const [birthday_name, setBirthday_name] = React.useState(
    initialValues.birthday_name
  );
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBirthday(initialValues.birthday);
    setBirthday_name(initialValues.birthday_name);
    setSort(initialValues.sort);
    setErrors({});
  };
  const validations = {
    birthday: [],
    birthday_name: [],
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
          birthday,
          birthday_name,
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
          await DataStore.save(new MBirthday(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MBirthdayCreateForm")}
      {...rest}
    >
      <SelectField
        label="Birthday"
        placeholder="Please select an option"
        isDisabled={false}
        value={birthday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              birthday: value,
              birthday_name,
              sort,
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
      <TextField
        label="Birthday name"
        isRequired={false}
        isReadOnly={false}
        value={birthday_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              birthday,
              birthday_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.birthday_name ?? value;
          }
          if (errors.birthday_name?.hasError) {
            runValidationTasks("birthday_name", value);
          }
          setBirthday_name(value);
        }}
        onBlur={() => runValidationTasks("birthday_name", birthday_name)}
        errorMessage={errors.birthday_name?.errorMessage}
        hasError={errors.birthday_name?.hasError}
        {...getOverrideProps(overrides, "birthday_name")}
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
              birthday,
              birthday_name,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
