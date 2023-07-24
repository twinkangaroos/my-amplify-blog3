/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MShop } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MShopUpdateFormInputValues = {
    shop_name?: string;
    area?: string;
    prefecture?: string;
    sort?: number;
};
export declare type MShopUpdateFormValidationValues = {
    shop_name?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
    prefecture?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MShopUpdateFormOverridesProps = {
    MShopUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    shop_name?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<SelectFieldProps>;
    prefecture?: PrimitiveOverrideProps<SelectFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MShopUpdateFormProps = React.PropsWithChildren<{
    overrides?: MShopUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mShop?: MShop;
    onSubmit?: (fields: MShopUpdateFormInputValues) => MShopUpdateFormInputValues;
    onSuccess?: (fields: MShopUpdateFormInputValues) => void;
    onError?: (fields: MShopUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MShopUpdateFormInputValues) => MShopUpdateFormInputValues;
    onValidate?: MShopUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MShopUpdateForm(props: MShopUpdateFormProps): React.ReactElement;
