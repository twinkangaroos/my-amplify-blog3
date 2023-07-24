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
export declare type MShopCreateFormInputValues = {
    shop_name?: string;
    area?: string;
    prefecture?: string;
    sort?: number;
};
export declare type MShopCreateFormValidationValues = {
    shop_name?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
    prefecture?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MShopCreateFormOverridesProps = {
    MShopCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    shop_name?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<SelectFieldProps>;
    prefecture?: PrimitiveOverrideProps<SelectFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MShopCreateFormProps = React.PropsWithChildren<{
    overrides?: MShopCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MShopCreateFormInputValues) => MShopCreateFormInputValues;
    onSuccess?: (fields: MShopCreateFormInputValues) => void;
    onError?: (fields: MShopCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MShopCreateFormInputValues) => MShopCreateFormInputValues;
    onValidate?: MShopCreateFormValidationValues;
} & React.CSSProperties>;
export default function MShopCreateForm(props: MShopCreateFormProps): React.ReactElement;
