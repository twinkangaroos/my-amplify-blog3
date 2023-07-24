/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function DogComponent(props) {
  const { dog, overrides, ...rest } = props;
  return (
    <View
      width="722px"
      height="245px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DogComponent")}
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
        width="87px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="39px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="dog.size"
        {...getOverrideProps(overrides, "size")}
      ></Text>
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
        width="93px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80px"
        left="31px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="dog.type"
        {...getOverrideProps(overrides, "type")}
      ></Text>
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
        width="97px"
        height="35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="133px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="dog.gender"
        {...getOverrideProps(overrides, "gender")}
      ></Text>
      <Image
        width="109px"
        height="94px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="51px"
        left="252px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
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
        width="71px"
        height="32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="173px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="dog.birthday"
        {...getOverrideProps(overrides, "birthday")}
      ></Text>
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
        width="332px"
        height="19px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={dog?.id}
        {...getOverrideProps(overrides, "id")}
      ></Text>
    </View>
  );
}
