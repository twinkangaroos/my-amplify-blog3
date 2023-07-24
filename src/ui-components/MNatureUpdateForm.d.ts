/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MNature } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MNatureUpdateFormInputValues = {
    nature?: string;
    nature_name?: string;
    sort?: number;
};
export declare type MNatureUpdateFormValidationValues = {
    nature?: ValidationFunction<string>;
    nature_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MNatureUpdateFormOverridesProps = {
    MNatureUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nature?: PrimitiveOverrideProps<SelectFieldProps>;
    nature_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MNatureUpdateFormProps = React.PropsWithChildren<{
    overrides?: MNatureUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mNature?: MNature;
    onSubmit?: (fields: MNatureUpdateFormInputValues) => MNatureUpdateFormInputValues;
    onSuccess?: (fields: MNatureUpdateFormInputValues) => void;
    onError?: (fields: MNatureUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MNatureUpdateFormInputValues) => MNatureUpdateFormInputValues;
    onValidate?: MNatureUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MNatureUpdateForm(props: MNatureUpdateFormProps): React.ReactElement;
