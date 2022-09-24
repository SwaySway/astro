/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function ResponsiveCard(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Title: {},
        "Blog 1": { width: "446px", height: "250px" },
        Description: {},
        ResponsiveCard: { justifyContent: "center", alignItems: "center" },
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        Title: {},
        "Blog 1": {},
        Description: {},
        ResponsiveCard: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Title: {},
        "Blog 1": { width: "450px", height: "253px", display: "none" },
        Description: {},
        ResponsiveCard: {},
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
    large: "large",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      boxShadow="0px 4px 14px rgba(0, 0, 0, 0.25)"
      padding="8px 8px 8px 8px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ResponsiveCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Image
        width="171px"
        height="96px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Blog 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Description"
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </Flex>
  );
}
