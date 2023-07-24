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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { MGroup } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MGroupUpdateForm(props) {
  const {
    id: idProp,
    mGroup,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    group_name: "",
    admin_flag: false,
    sort: "",
  };
  const [group_name, setGroup_name] = React.useState(initialValues.group_name);
  const [admin_flag, setAdmin_flag] = React.useState(initialValues.admin_flag);
  const [sort, setSort] = React.useState(initialValues.sort);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mGroupRecord
      ? { ...initialValues, ...mGroupRecord }
      : initialValues;
    setGroup_name(cleanValues.group_name);
    setAdmin_flag(cleanValues.admin_flag);
    setSort(cleanValues.sort);
    setErrors({});
  };
  const [mGroupRecord, setMGroupRecord] = React.useState(mGroup);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(MGroup, idProp) : mGroup;
      setMGroupRecord(record);
    };
    queryData();
  }, [idProp, mGroup]);
  React.useEffect(resetStateValues, [mGroupRecord]);
  const validations = {
    group_name: [],
    admin_flag: [],
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
          group_name,
          admin_flag,
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
            MGroup.copyOf(mGroupRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MGroupUpdateForm")}
      {...rest}
    >
      <TextField
        label="Group name"
        isRequired={false}
        isReadOnly={false}
        value={group_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              group_name: value,
              admin_flag,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.group_name ?? value;
          }
          if (errors.group_name?.hasError) {
            runValidationTasks("group_name", value);
          }
          setGroup_name(value);
        }}
        onBlur={() => runValidationTasks("group_name", group_name)}
        errorMessage={errors.group_name?.errorMessage}
        hasError={errors.group_name?.hasError}
        {...getOverrideProps(overrides, "group_name")}
      ></TextField>
      <SwitchField
        label="Admin flag"
        defaultChecked={false}
        isDisabled={false}
        isChecked={admin_flag}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              group_name,
              admin_flag: value,
              sort,
            };
            const result = onChange(modelFields);
            value = result?.admin_flag ?? value;
          }
          if (errors.admin_flag?.hasError) {
            runValidationTasks("admin_flag", value);
          }
          setAdmin_flag(value);
        }}
        onBlur={() => runValidationTasks("admin_flag", admin_flag)}
        errorMessage={errors.admin_flag?.errorMessage}
        hasError={errors.admin_flag?.hasError}
        {...getOverrideProps(overrides, "admin_flag")}
      ></SwitchField>
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
              group_name,
              admin_flag,
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
          isDisabled={!(idProp || mGroup)}
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
              !(idProp || mGroup) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
