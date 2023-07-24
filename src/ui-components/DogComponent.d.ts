/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Dog } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogComponentOverridesProps = {
    DogComponent?: PrimitiveOverrideProps<ViewProps>;
    size?: PrimitiveOverrideProps<TextProps>;
    type?: PrimitiveOverrideProps<TextProps>;
    gender?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    birthday?: PrimitiveOverrideProps<TextProps>;
    id?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DogComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    dog?: Dog;
} & {
    overrides?: DogComponentOverridesProps | undefined | null;
}>;
export default function DogComponent(props: DogComponentProps): React.ReactElement;
