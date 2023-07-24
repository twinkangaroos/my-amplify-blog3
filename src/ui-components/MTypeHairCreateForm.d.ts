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
export declare type MTypeHairCreateFormInputValues = {
    type_hair?: string;
    type_hair_name?: string;
    sort?: number;
};
export declare type MTypeHairCreateFormValidationValues = {
    type_hair?: ValidationFunction<string>;
    type_hair_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MTypeHairCreateFormOverridesProps = {
    MTypeHairCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type_hair?: PrimitiveOverrideProps<SelectFieldProps>;
    type_hair_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MTypeHairCreateFormProps = React.PropsWithChildren<{
    overrides?: MTypeHairCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MTypeHairCreateFormInputValues) => MTypeHairCreateFormInputValues;
    onSuccess?: (fields: MTypeHairCreateFormInputValues) => void;
    onError?: (fields: MTypeHairCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MTypeHairCreateFormInputValues) => MTypeHairCreateFormInputValues;
    onValidate?: MTypeHairCreateFormValidationValues;
} & React.CSSProperties>;
export default function MTypeHairCreateForm(props: MTypeHairCreateFormProps): React.ReactElement;
