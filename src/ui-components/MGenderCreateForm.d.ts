/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MGenderCreateFormInputValues = {
    gender?: string;
    gender_name?: string;
    sort?: number;
};
export declare type MGenderCreateFormValidationValues = {
    gender?: ValidationFunction<string>;
    gender_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MGenderCreateFormOverridesProps = {
    MGenderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    gender_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MGenderCreateFormProps = React.PropsWithChildren<{
    overrides?: MGenderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MGenderCreateFormInputValues) => MGenderCreateFormInputValues;
    onSuccess?: (fields: MGenderCreateFormInputValues) => void;
    onError?: (fields: MGenderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MGenderCreateFormInputValues) => MGenderCreateFormInputValues;
    onValidate?: MGenderCreateFormValidationValues;
} & React.CSSProperties>;
export default function MGenderCreateForm(props: MGenderCreateFormProps): React.ReactElement;
