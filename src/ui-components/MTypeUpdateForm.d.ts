/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MType } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MTypeUpdateFormInputValues = {
    type?: string;
    type_name?: string;
    sort?: number;
};
export declare type MTypeUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    type_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MTypeUpdateFormOverridesProps = {
    MTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    type_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: MTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mType?: MType;
    onSubmit?: (fields: MTypeUpdateFormInputValues) => MTypeUpdateFormInputValues;
    onSuccess?: (fields: MTypeUpdateFormInputValues) => void;
    onError?: (fields: MTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MTypeUpdateFormInputValues) => MTypeUpdateFormInputValues;
    onValidate?: MTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MTypeUpdateForm(props: MTypeUpdateFormProps): React.ReactElement;
