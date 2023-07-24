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
export declare type MPrefectureCreateFormInputValues = {
    prefecture?: string;
    prefecture_name?: string;
    sort?: number;
};
export declare type MPrefectureCreateFormValidationValues = {
    prefecture?: ValidationFunction<string>;
    prefecture_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MPrefectureCreateFormOverridesProps = {
    MPrefectureCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    prefecture?: PrimitiveOverrideProps<SelectFieldProps>;
    prefecture_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MPrefectureCreateFormProps = React.PropsWithChildren<{
    overrides?: MPrefectureCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MPrefectureCreateFormInputValues) => MPrefectureCreateFormInputValues;
    onSuccess?: (fields: MPrefectureCreateFormInputValues) => void;
    onError?: (fields: MPrefectureCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MPrefectureCreateFormInputValues) => MPrefectureCreateFormInputValues;
    onValidate?: MPrefectureCreateFormValidationValues;
} & React.CSSProperties>;
export default function MPrefectureCreateForm(props: MPrefectureCreateFormProps): React.ReactElement;
