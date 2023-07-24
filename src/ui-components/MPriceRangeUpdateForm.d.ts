/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MPriceRange } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MPriceRangeUpdateFormInputValues = {
    price_range?: string;
    price_range_name?: string;
    sort?: number;
};
export declare type MPriceRangeUpdateFormValidationValues = {
    price_range?: ValidationFunction<string>;
    price_range_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MPriceRangeUpdateFormOverridesProps = {
    MPriceRangeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    price_range?: PrimitiveOverrideProps<SelectFieldProps>;
    price_range_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MPriceRangeUpdateFormProps = React.PropsWithChildren<{
    overrides?: MPriceRangeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mPriceRange?: MPriceRange;
    onSubmit?: (fields: MPriceRangeUpdateFormInputValues) => MPriceRangeUpdateFormInputValues;
    onSuccess?: (fields: MPriceRangeUpdateFormInputValues) => void;
    onError?: (fields: MPriceRangeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MPriceRangeUpdateFormInputValues) => MPriceRangeUpdateFormInputValues;
    onValidate?: MPriceRangeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MPriceRangeUpdateForm(props: MPriceRangeUpdateFormProps): React.ReactElement;
