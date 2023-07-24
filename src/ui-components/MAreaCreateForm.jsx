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
import { MArea } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MAreaCreateForm(props) {
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
    area: undefined,
    area_name: "",
    sort: "",
  };
  const [area, setArea] = React.useState(initialValues.area);
  const [area_name, setArea_name] = React.useState(initialValues.area_name);
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setArea(initialValues.area);
    setArea_name(initialValues.area_name);
    setSort(initialValues.sort);
    setErrors({});
  };
  const validations = {
    area: [],
    area_name: [],
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
          area,
          area_name,
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
          await DataStore.save(new MArea(modelFields));
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
      {...getOverrideProps(overrides, "MAreaCreateForm")}
      {...rest}
    >
      <SelectField
        label="Area"
        placeholder="Please select an option"
        isDisabled={false}
        value={area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              area: value,
              area_name,
              sort,
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
      <TextField
        label="Area name"
        isRequired={false}
        isReadOnly={false}
        value={area_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              area,
              area_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.area_name ?? value;
          }
          if (errors.area_name?.hasError) {
            runValidationTasks("area_name", value);
          }
          setArea_name(value);
        }}
        onBlur={() => runValidationTasks("area_name", area_name)}
        errorMessage={errors.area_name?.errorMessage}
        hasError={errors.area_name?.hasError}
        {...getOverrideProps(overrides, "area_name")}
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
              area,
              area_name,
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
