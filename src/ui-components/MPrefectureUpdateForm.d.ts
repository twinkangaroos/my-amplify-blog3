/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MPrefecture } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MPrefectureUpdateFormInputValues = {
    prefecture?: string;
    prefecture_name?: string;
    sort?: number;
};
export declare type MPrefectureUpdateFormValidationValues = {
    prefecture?: ValidationFunction<string>;
    prefecture_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MPrefectureUpdateFormOverridesProps = {
    MPrefectureUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    prefecture?: PrimitiveOverrideProps<SelectFieldProps>;
    prefecture_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MPrefectureUpdateFormProps = React.PropsWithChildren<{
    overrides?: MPrefectureUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mPrefecture?: MPrefecture;
    onSubmit?: (fields: MPrefectureUpdateFormInputValues) => MPrefectureUpdateFormInputValues;
    onSuccess?: (fields: MPrefectureUpdateFormInputValues) => void;
    onError?: (fields: MPrefectureUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MPrefectureUpdateFormInputValues) => MPrefectureUpdateFormInputValues;
    onValidate?: MPrefectureUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MPrefectureUpdateForm(props: MPrefectureUpdateFormProps): React.ReactElement;
