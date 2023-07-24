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
export declare type MNatureCreateFormInputValues = {
    nature?: string;
    nature_name?: string;
    sort?: number;
};
export declare type MNatureCreateFormValidationValues = {
    nature?: ValidationFunction<string>;
    nature_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MNatureCreateFormOverridesProps = {
    MNatureCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nature?: PrimitiveOverrideProps<SelectFieldProps>;
    nature_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MNatureCreateFormProps = React.PropsWithChildren<{
    overrides?: MNatureCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MNatureCreateFormInputValues) => MNatureCreateFormInputValues;
    onSuccess?: (fields: MNatureCreateFormInputValues) => void;
    onError?: (fields: MNatureCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MNatureCreateFormInputValues) => MNatureCreateFormInputValues;
    onValidate?: MNatureCreateFormValidationValues;
} & React.CSSProperties>;
export default function MNatureCreateForm(props: MNatureCreateFormProps): React.ReactElement;
