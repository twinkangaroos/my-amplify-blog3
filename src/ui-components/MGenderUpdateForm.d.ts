/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MGender } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MGenderUpdateFormInputValues = {
    gender?: string;
    gender_name?: string;
    sort?: number;
};
export declare type MGenderUpdateFormValidationValues = {
    gender?: ValidationFunction<string>;
    gender_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MGenderUpdateFormOverridesProps = {
    MGenderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    gender_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MGenderUpdateFormProps = React.PropsWithChildren<{
    overrides?: MGenderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mGender?: MGender;
    onSubmit?: (fields: MGenderUpdateFormInputValues) => MGenderUpdateFormInputValues;
    onSuccess?: (fields: MGenderUpdateFormInputValues) => void;
    onError?: (fields: MGenderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MGenderUpdateFormInputValues) => MGenderUpdateFormInputValues;
    onValidate?: MGenderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MGenderUpdateForm(props: MGenderUpdateFormProps): React.ReactElement;
