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
export declare type MPriceRangeCreateFormInputValues = {
    price_range?: string;
    price_range_name?: string;
    sort?: number;
};
export declare type MPriceRangeCreateFormValidationValues = {
    price_range?: ValidationFunction<string>;
    price_range_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MPriceRangeCreateFormOverridesProps = {
    MPriceRangeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    price_range?: PrimitiveOverrideProps<SelectFieldProps>;
    price_range_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MPriceRangeCreateFormProps = React.PropsWithChildren<{
    overrides?: MPriceRangeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MPriceRangeCreateFormInputValues) => MPriceRangeCreateFormInputValues;
    onSuccess?: (fields: MPriceRangeCreateFormInputValues) => void;
    onError?: (fields: MPriceRangeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MPriceRangeCreateFormInputValues) => MPriceRangeCreateFormInputValues;
    onValidate?: MPriceRangeCreateFormValidationValues;
} & React.CSSProperties>;
export default function MPriceRangeCreateForm(props: MPriceRangeCreateFormProps): React.ReactElement;
