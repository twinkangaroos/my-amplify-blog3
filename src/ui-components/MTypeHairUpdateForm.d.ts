/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MTypeHair } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MTypeHairUpdateFormInputValues = {
    type_hair?: string;
    type_hair_name?: string;
    sort?: number;
};
export declare type MTypeHairUpdateFormValidationValues = {
    type_hair?: ValidationFunction<string>;
    type_hair_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MTypeHairUpdateFormOverridesProps = {
    MTypeHairUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type_hair?: PrimitiveOverrideProps<SelectFieldProps>;
    type_hair_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MTypeHairUpdateFormProps = React.PropsWithChildren<{
    overrides?: MTypeHairUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mTypeHair?: MTypeHair;
    onSubmit?: (fields: MTypeHairUpdateFormInputValues) => MTypeHairUpdateFormInputValues;
    onSuccess?: (fields: MTypeHairUpdateFormInputValues) => void;
    onError?: (fields: MTypeHairUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MTypeHairUpdateFormInputValues) => MTypeHairUpdateFormInputValues;
    onValidate?: MTypeHairUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MTypeHairUpdateForm(props: MTypeHairUpdateFormProps): React.ReactElement;
