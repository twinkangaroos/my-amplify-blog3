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
export declare type MTypeCreateFormInputValues = {
    type?: string;
    type_name?: string;
    sort?: number;
};
export declare type MTypeCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    type_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MTypeCreateFormOverridesProps = {
    MTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    type_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: MTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MTypeCreateFormInputValues) => MTypeCreateFormInputValues;
    onSuccess?: (fields: MTypeCreateFormInputValues) => void;
    onError?: (fields: MTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MTypeCreateFormInputValues) => MTypeCreateFormInputValues;
    onValidate?: MTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function MTypeCreateForm(props: MTypeCreateFormProps): React.ReactElement;
