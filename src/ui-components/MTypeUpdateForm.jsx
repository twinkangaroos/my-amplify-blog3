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
import { MType } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MTypeUpdateForm(props) {
  const {
    id: idProp,
    mType,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: undefined,
    type_name: "",
    sort: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [type_name, setType_name] = React.useState(initialValues.type_name);
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mTypeRecord
      ? { ...initialValues, ...mTypeRecord }
      : initialValues;
    setType(cleanValues.type);
    setType_name(cleanValues.type_name);
    setSort(cleanValues.sort);
    setErrors({});
  };
  const [mTypeRecord, setMTypeRecord] = React.useState(mType);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(MType, idProp) : mType;
      setMTypeRecord(record);
    };
    queryData();
  }, [idProp, mType]);
  React.useEffect(resetStateValues, [mTypeRecord]);
  const validations = {
    type: [],
    type_name: [],
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
          type,
          type_name,
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
            MType.copyOf(mTypeRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MTypeUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              type_name,
              sort,
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
      <TextField
        label="Type name"
        isRequired={false}
        isReadOnly={false}
        value={type_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              type_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.type_name ?? value;
          }
          if (errors.type_name?.hasError) {
            runValidationTasks("type_name", value);
          }
          setType_name(value);
        }}
        onBlur={() => runValidationTasks("type_name", type_name)}
        errorMessage={errors.type_name?.errorMessage}
        hasError={errors.type_name?.hasError}
        {...getOverrideProps(overrides, "type_name")}
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
              type,
              type_name,
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
          isDisabled={!(idProp || mType)}
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
              !(idProp || mType) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
