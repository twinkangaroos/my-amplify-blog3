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
import { MTypeHair } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MTypeHairCreateForm(props) {
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
    type_hair: undefined,
    type_hair_name: "",
    sort: "",
  };
  const [type_hair, setType_hair] = React.useState(initialValues.type_hair);
  const [type_hair_name, setType_hair_name] = React.useState(
    initialValues.type_hair_name
  );
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType_hair(initialValues.type_hair);
    setType_hair_name(initialValues.type_hair_name);
    setSort(initialValues.sort);
    setErrors({});
  };
  const validations = {
    type_hair: [],
    type_hair_name: [],
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
          type_hair,
          type_hair_name,
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
          await DataStore.save(new MTypeHair(modelFields));
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
      {...getOverrideProps(overrides, "MTypeHairCreateForm")}
      {...rest}
    >
      <SelectField
        label="Type hair"
        placeholder="Please select an option"
        isDisabled={false}
        value={type_hair}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type_hair: value,
              type_hair_name,
              sort,
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
      <TextField
        label="Type hair name"
        isRequired={false}
        isReadOnly={false}
        value={type_hair_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type_hair,
              type_hair_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.type_hair_name ?? value;
          }
          if (errors.type_hair_name?.hasError) {
            runValidationTasks("type_hair_name", value);
          }
          setType_hair_name(value);
        }}
        onBlur={() => runValidationTasks("type_hair_name", type_hair_name)}
        errorMessage={errors.type_hair_name?.errorMessage}
        hasError={errors.type_hair_name?.hasError}
        {...getOverrideProps(overrides, "type_hair_name")}
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
              type_hair,
              type_hair_name,
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
