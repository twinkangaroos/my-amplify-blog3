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
export declare type MAreaCreateFormInputValues = {
    area?: string;
    area_name?: string;
    sort?: number;
};
export declare type MAreaCreateFormValidationValues = {
    area?: ValidationFunction<string>;
    area_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MAreaCreateFormOverridesProps = {
    MAreaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    area?: PrimitiveOverrideProps<SelectFieldProps>;
    area_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MAreaCreateFormProps = React.PropsWithChildren<{
    overrides?: MAreaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MAreaCreateFormInputValues) => MAreaCreateFormInputValues;
    onSuccess?: (fields: MAreaCreateFormInputValues) => void;
    onError?: (fields: MAreaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MAreaCreateFormInputValues) => MAreaCreateFormInputValues;
    onValidate?: MAreaCreateFormValidationValues;
} & React.CSSProperties>;
export default function MAreaCreateForm(props: MAreaCreateFormProps): React.ReactElement;
