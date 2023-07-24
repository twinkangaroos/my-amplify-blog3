/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MGroup } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MGroupUpdateFormInputValues = {
    group_name?: string;
    admin_flag?: boolean;
    sort?: number;
};
export declare type MGroupUpdateFormValidationValues = {
    group_name?: ValidationFunction<string>;
    admin_flag?: ValidationFunction<boolean>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MGroupUpdateFormOverridesProps = {
    MGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    group_name?: PrimitiveOverrideProps<TextFieldProps>;
    admin_flag?: PrimitiveOverrideProps<SwitchFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: MGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mGroup?: MGroup;
    onSubmit?: (fields: MGroupUpdateFormInputValues) => MGroupUpdateFormInputValues;
    onSuccess?: (fields: MGroupUpdateFormInputValues) => void;
    onError?: (fields: MGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MGroupUpdateFormInputValues) => MGroupUpdateFormInputValues;
    onValidate?: MGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MGroupUpdateForm(props: MGroupUpdateFormProps): React.ReactElement;
