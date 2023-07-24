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
import { MSize } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MSizeUpdateForm(props) {
  const {
    id: idProp,
    mSize,
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
    size_name: "",
    sort: "",
  };
  const [size, setSize] = React.useState(initialValues.size);
  const [size_name, setSize_name] = React.useState(initialValues.size_name);
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mSizeRecord
      ? { ...initialValues, ...mSizeRecord }
      : initialValues;
    setSize(cleanValues.size);
    setSize_name(cleanValues.size_name);
    setSort(cleanValues.sort);
    setErrors({});
  };
  const [mSizeRecord, setMSizeRecord] = React.useState(mSize);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(MSize, idProp) : mSize;
      setMSizeRecord(record);
    };
    queryData();
  }, [idProp, mSize]);
  React.useEffect(resetStateValues, [mSizeRecord]);
  const validations = {
    size: [],
    size_name: [],
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
          size,
          size_name,
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
            MSize.copyOf(mSizeRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MSizeUpdateForm")}
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
              size_name,
              sort,
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
      <TextField
        label="Size name"
        isRequired={false}
        isReadOnly={false}
        value={size_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              size,
              size_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.size_name ?? value;
          }
          if (errors.size_name?.hasError) {
            runValidationTasks("size_name", value);
          }
          setSize_name(value);
        }}
        onBlur={() => runValidationTasks("size_name", size_name)}
        errorMessage={errors.size_name?.errorMessage}
        hasError={errors.size_name?.hasError}
        {...getOverrideProps(overrides, "size_name")}
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
              size,
              size_name,
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
          isDisabled={!(idProp || mSize)}
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
              !(idProp || mSize) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
