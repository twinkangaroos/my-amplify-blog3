/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MArea } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MAreaUpdateFormInputValues = {
    area?: string;
    area_name?: string;
    sort?: number;
};
export declare type MAreaUpdateFormValidationValues = {
    area?: ValidationFunction<string>;
    area_name?: ValidationFunction<string>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MAreaUpdateFormOverridesProps = {
    MAreaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    area?: PrimitiveOverrideProps<SelectFieldProps>;
    area_name?: PrimitiveOverrideProps<TextFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MAreaUpdateFormProps = React.PropsWithChildren<{
    overrides?: MAreaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mArea?: MArea;
    onSubmit?: (fields: MAreaUpdateFormInputValues) => MAreaUpdateFormInputValues;
    onSuccess?: (fields: MAreaUpdateFormInputValues) => void;
    onError?: (fields: MAreaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MAreaUpdateFormInputValues) => MAreaUpdateFormInputValues;
    onValidate?: MAreaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MAreaUpdateForm(props: MAreaUpdateFormProps): React.ReactElement;
