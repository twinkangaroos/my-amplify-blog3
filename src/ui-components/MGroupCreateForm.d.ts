/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MGroupCreateFormInputValues = {
    group_name?: string;
    admin_flag?: boolean;
    sort?: number;
};
export declare type MGroupCreateFormValidationValues = {
    group_name?: ValidationFunction<string>;
    admin_flag?: ValidationFunction<boolean>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MGroupCreateFormOverridesProps = {
    MGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    group_name?: PrimitiveOverrideProps<TextFieldProps>;
    admin_flag?: PrimitiveOverrideProps<SwitchFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: MGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MGroupCreateFormInputValues) => MGroupCreateFormInputValues;
    onSuccess?: (fields: MGroupCreateFormInputValues) => void;
    onError?: (fields: MGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MGroupCreateFormInputValues) => MGroupCreateFormInputValues;
    onValidate?: MGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function MGroupCreateForm(props: MGroupCreateFormProps): React.ReactElement;
