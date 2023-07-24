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
export declare type MParticularConditionCreateFormInputValues = {
    particular_condition?: string;
    particular_condition_name?: string;
    sort?: number;
};
export declare type MParticularConditionCreateFormValidationValues = {
    particular_condition?: ValidationFunction<string>;
    particular_condition_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MParticularConditionCreateFormOverridesProps = {
    MParticularConditionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    particular_condition?: PrimitiveOverrideProps<SelectFieldProps>;
    particular_condition_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MParticularConditionCreateFormProps = React.PropsWithChildren<{
    overrides?: MParticularConditionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MParticularConditionCreateFormInputValues) => MParticularConditionCreateFormInputValues;
    onSuccess?: (fields: MParticularConditionCreateFormInputValues) => void;
    onError?: (fields: MParticularConditionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MParticularConditionCreateFormInputValues) => MParticularConditionCreateFormInputValues;
    onValidate?: MParticularConditionCreateFormValidationValues;
} & React.CSSProperties>;
export default function MParticularConditionCreateForm(props: MParticularConditionCreateFormProps): React.ReactElement;
