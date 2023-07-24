/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Dog } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DogUpdateFormInputValues = {
    size?: string;
    type?: string;
    gender?: string;
    birthday?: string;
    nature?: string;
    type_hair?: string;
    area?: string;
    prefecture?: string;
    particular_condition?: string;
    free_word?: string;
    image_name?: string;
    publish_status?: number;
    appeal_point?: string;
    buy_flag?: boolean;
    price_range?: string;
};
export declare type DogUpdateFormValidationValues = {
    size?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    birthday?: ValidationFunction<string>;
    nature?: ValidationFunction<string>;
    type_hair?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
    prefecture?: ValidationFunction<string>;
    particular_condition?: ValidationFunction<string>;
    free_word?: ValidationFunction<string>;
    image_name?: ValidationFunction<string>;
    publish_status?: ValidationFunction<number>;
    appeal_point?: ValidationFunction<string>;
    buy_flag?: ValidationFunction<boolean>;
    price_range?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogUpdateFormOverridesProps = {
    DogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    size?: PrimitiveOverrideProps<SelectFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    birthday?: PrimitiveOverrideProps<SelectFieldProps>;
    nature?: PrimitiveOverrideProps<SelectFieldProps>;
    type_hair?: PrimitiveOverrideProps<SelectFieldProps>;
    area?: PrimitiveOverrideProps<SelectFieldProps>;
    prefecture?: PrimitiveOverrideProps<SelectFieldProps>;
    particular_condition?: PrimitiveOverrideProps<SelectFieldProps>;
    free_word?: PrimitiveOverrideProps<TextFieldProps>;
    image_name?: PrimitiveOverrideProps<TextFieldProps>;
    publish_status?: PrimitiveOverrideProps<TextFieldProps>;
    appeal_point?: PrimitiveOverrideProps<TextFieldProps>;
    buy_flag?: PrimitiveOverrideProps<SwitchFieldProps>;
    price_range?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type DogUpdateFormProps = React.PropsWithChildren<{
    overrides?: DogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dog?: Dog;
    onSubmit?: (fields: DogUpdateFormInputValues) => DogUpdateFormInputValues;
    onSuccess?: (fields: DogUpdateFormInputValues) => void;
    onError?: (fields: DogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DogUpdateFormInputValues) => DogUpdateFormInputValues;
    onValidate?: DogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DogUpdateForm(props: DogUpdateFormProps): React.ReactElement;
