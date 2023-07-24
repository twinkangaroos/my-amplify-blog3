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
import { MNature } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MNatureCreateForm(props) {
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
    nature: undefined,
    nature_name: "",
    sort: "",
  };
  const [nature, setNature] = React.useState(initialValues.nature);
  const [nature_name, setNature_name] = React.useState(
    initialValues.nature_name
  );
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNature(initialValues.nature);
    setNature_name(initialValues.nature_name);
    setSort(initialValues.sort);
    setErrors({});
  };
  const validations = {
    nature: [],
    nature_name: [],
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
          nature,
          nature_name,
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
          await DataStore.save(new MNature(modelFields));
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
      {...getOverrideProps(overrides, "MNatureCreateForm")}
      {...rest}
    >
      <SelectField
        label="Nature"
        placeholder="Please select an option"
        isDisabled={false}
        value={nature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nature: value,
              nature_name,
              sort,
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
      <TextField
        label="Nature name"
        isRequired={false}
        isReadOnly={false}
        value={nature_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nature,
              nature_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.nature_name ?? value;
          }
          if (errors.nature_name?.hasError) {
            runValidationTasks("nature_name", value);
          }
          setNature_name(value);
        }}
        onBlur={() => runValidationTasks("nature_name", nature_name)}
        errorMessage={errors.nature_name?.errorMessage}
        hasError={errors.nature_name?.hasError}
        {...getOverrideProps(overrides, "nature_name")}
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
              nature,
              nature_name,
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
