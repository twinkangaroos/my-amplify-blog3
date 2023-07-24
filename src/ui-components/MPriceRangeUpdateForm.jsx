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
import { MPriceRange } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MPriceRangeUpdateForm(props) {
  const {
    id: idProp,
    mPriceRange,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    price_range: undefined,
    price_range_name: "",
    sort: "",
  };
  const [price_range, setPrice_range] = React.useState(
    initialValues.price_range
  );
  const [price_range_name, setPrice_range_name] = React.useState(
    initialValues.price_range_name
  );
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mPriceRangeRecord
      ? { ...initialValues, ...mPriceRangeRecord }
      : initialValues;
    setPrice_range(cleanValues.price_range);
    setPrice_range_name(cleanValues.price_range_name);
    setSort(cleanValues.sort);
    setErrors({});
  };
  const [mPriceRangeRecord, setMPriceRangeRecord] = React.useState(mPriceRange);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(MPriceRange, idProp)
        : mPriceRange;
      setMPriceRangeRecord(record);
    };
    queryData();
  }, [idProp, mPriceRange]);
  React.useEffect(resetStateValues, [mPriceRangeRecord]);
  const validations = {
    price_range: [],
    price_range_name: [],
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
          price_range,
          price_range_name,
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
            MPriceRange.copyOf(mPriceRangeRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MPriceRangeUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Price range"
        placeholder="Please select an option"
        isDisabled={false}
        value={price_range}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              price_range: value,
              price_range_name,
              sort,
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
      <TextField
        label="Price range name"
        isRequired={false}
        isReadOnly={false}
        value={price_range_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              price_range,
              price_range_name: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.price_range_name ?? value;
          }
          if (errors.price_range_name?.hasError) {
            runValidationTasks("price_range_name", value);
          }
          setPrice_range_name(value);
        }}
        onBlur={() => runValidationTasks("price_range_name", price_range_name)}
        errorMessage={errors.price_range_name?.errorMessage}
        hasError={errors.price_range_name?.hasError}
        {...getOverrideProps(overrides, "price_range_name")}
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
              price_range,
              price_range_name,
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
          isDisabled={!(idProp || mPriceRange)}
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
              !(idProp || mPriceRange) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
