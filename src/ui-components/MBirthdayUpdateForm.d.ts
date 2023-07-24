/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MBirthday } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MBirthdayUpdateFormInputValues = {
    birthday?: string;
    birthday_name?: string;
    sort?: number;
};
export declare type MBirthdayUpdateFormValidationValues = {
    birthday?: ValidationFunction<string>;
    birthday_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MBirthdayUpdateFormOverridesProps = {
    MBirthdayUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    birthday?: PrimitiveOverrideProps<SelectFieldProps>;
    birthday_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MBirthdayUpdateFormProps = React.PropsWithChildren<{
    overrides?: MBirthdayUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mBirthday?: MBirthday;
    onSubmit?: (fields: MBirthdayUpdateFormInputValues) => MBirthdayUpdateFormInputValues;
    onSuccess?: (fields: MBirthdayUpdateFormInputValues) => void;
    onError?: (fields: MBirthdayUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MBirthdayUpdateFormInputValues) => MBirthdayUpdateFormInputValues;
    onValidate?: MBirthdayUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MBirthdayUpdateForm(props: MBirthdayUpdateFormProps): React.ReactElement;
