/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MSize } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MSizeUpdateFormInputValues = {
    size?: string;
    size_name?: string;
    sort?: number;
};
export declare type MSizeUpdateFormValidationValues = {
    size?: ValidationFunction<string>;
    size_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MSizeUpdateFormOverridesProps = {
    MSizeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    size?: PrimitiveOverrideProps<SelectFieldProps>;
    size_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MSizeUpdateFormProps = React.PropsWithChildren<{
    overrides?: MSizeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mSize?: MSize;
    onSubmit?: (fields: MSizeUpdateFormInputValues) => MSizeUpdateFormInputValues;
    onSuccess?: (fields: MSizeUpdateFormInputValues) => void;
    onError?: (fields: MSizeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MSizeUpdateFormInputValues) => MSizeUpdateFormInputValues;
    onValidate?: MSizeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MSizeUpdateForm(props: MSizeUpdateFormProps): React.ReactElement;
