/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MParticularCondition } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MParticularConditionUpdateFormInputValues = {
    particular_condition?: string;
    particular_condition_name?: string;
    sort?: number;
};
export declare type MParticularConditionUpdateFormValidationValues = {
    particular_condition?: ValidationFunction<string>;
    particular_condition_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MParticularConditionUpdateFormOverridesProps = {
    MParticularConditionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    particular_condition?: PrimitiveOverrideProps<SelectFieldProps>;
    particular_condition_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MParticularConditionUpdateFormProps = React.PropsWithChildren<{
    overrides?: MParticularConditionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mParticularCondition?: MParticularCondition;
    onSubmit?: (fields: MParticularConditionUpdateFormInputValues) => MParticularConditionUpdateFormInputValues;
    onSuccess?: (fields: MParticularConditionUpdateFormInputValues) => void;
    onError?: (fields: MParticularConditionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MParticularConditionUpdateFormInputValues) => MParticularConditionUpdateFormInputValues;
    onValidate?: MParticularConditionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MParticularConditionUpdateForm(props: MParticularConditionUpdateFormProps): React.ReactElement;
