/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { label, overrides, ...rest } = props;
  return (
    <View
      width="717px"
      height="110px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="399px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31px"
        left="33px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sample application"
        {...getOverrideProps(overrides, "title")}
      ></Text>
    </View>
  );
}
