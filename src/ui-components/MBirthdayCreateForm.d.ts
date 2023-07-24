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
export declare type MBirthdayCreateFormInputValues = {
    birthday?: string;
    birthday_name?: string;
    sort?: number;
};
export declare type MBirthdayCreateFormValidationValues = {
    birthday?: ValidationFunction<string>;
    birthday_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MBirthdayCreateFormOverridesProps = {
    MBirthdayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    birthday?: PrimitiveOverrideProps<SelectFieldProps>;
    birthday_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MBirthdayCreateFormProps = React.PropsWithChildren<{
    overrides?: MBirthdayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MBirthdayCreateFormInputValues) => MBirthdayCreateFormInputValues;
    onSuccess?: (fields: MBirthdayCreateFormInputValues) => void;
    onError?: (fields: MBirthdayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MBirthdayCreateFormInputValues) => MBirthdayCreateFormInputValues;
    onValidate?: MBirthdayCreateFormValidationValues;
} & React.CSSProperties>;
export default function MBirthdayCreateForm(props: MBirthdayCreateFormProps): React.ReactElement;
