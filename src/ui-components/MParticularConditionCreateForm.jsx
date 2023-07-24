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
import { MParticularCondition } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MParticularConditionCreateForm(props) {
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
    particular_condition: undefined,
    particular_condition_name: "",
    sort: "",
  };
  const [particular_condition, setParticular_condition] = React.useState(
    initialValues.particular_condition
  );
  const [particular_condition_name, setParticular_condition_name] =
    React.useState(initialValues.particular_condition_name);
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setParticular_condition(initialValues.particular_condition);
    setParticular_condition_name(initialValues.particular_condition_name);
    setSort(initialValues.sort);
    setErrors({});
  };
  const validations = {
    particular_condition: [],
    particular_condition_name: [],
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
          particular_condition,
          particular_condition_name,
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
          await DataStore.save(new MParticularCondition(modelFields));
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
      {...getOverrideProps(overrides, "MParticularConditionCreateForm")}
      {...rest}
    >
      <SelectField
        label="Particular condition"
        placeholder="Please select an option"
        isDisabled={false}
        value={particular_condition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              particular_condition: value,
              particular_condition_name,
              sort,
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
        label="Particular condition name"
        isRequired={false}
        isReadOnly={false}
        value={particular_condition_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              particular_condition,
              particular_condition_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.particular_condition_name ?? value;
          }
          if (errors.particular_condition_name?.hasError) {
            runValidationTasks("particular_condition_name", value);
          }
          setParticular_condition_name(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "particular_condition_name",
            particular_condition_name
          )
        }
        errorMessage={errors.particular_condition_name?.errorMessage}
        hasError={errors.particular_condition_name?.hasError}
        {...getOverrideProps(overrides, "particular_condition_name")}
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
              particular_condition,
              particular_condition_name,
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
