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
export declare type MSizeCreateFormInputValues = {
    size?: string;
    size_name?: string;
    sort?: number;
};
export declare type MSizeCreateFormValidationValues = {
    size?: ValidationFunction<string>;
    size_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MSizeCreateFormOverridesProps = {
    MSizeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    size?: PrimitiveOverrideProps<SelectFieldProps>;
    size_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MSizeCreateFormProps = React.PropsWithChildren<{
    overrides?: MSizeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MSizeCreateFormInputValues) => MSizeCreateFormInputValues;
    onSuccess?: (fields: MSizeCreateFormInputValues) => void;
    onError?: (fields: MSizeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MSizeCreateFormInputValues) => MSizeCreateFormInputValues;
    onValidate?: MSizeCreateFormValidationValues;
} & React.CSSProperties>;
export default function MSizeCreateForm(props: MSizeCreateFormProps): React.ReactElement;
