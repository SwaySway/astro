/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UseBaseOrValidationType<Flag, T> = Flag extends true ? T : ValidationFunction<T>;
export declare type BlogCreateFormInputValues<useBase extends boolean = true> = {
    title?: UseBaseOrValidationType<useBase, string>;
    content?: UseBaseOrValidationType<useBase, string>;
    tags?: UseBaseOrValidationType<useBase, string>;
    published?: UseBaseOrValidationType<useBase, string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogCreateFormOverridesProps = {
    BlogCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    content?: FormProps<TextFieldProps>;
    tags?: FormProps<TextFieldProps>;
    published?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogCreateFormOverridesProps | undefined | null;
} & {
    onSubmit?: (fields: BlogCreateFormInputValues) => BlogCreateFormInputValues;
    onSuccess?: (fields: BlogCreateFormInputValues) => void;
    onError?: (fields: BlogCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BlogCreateFormInputValues) => BlogCreateFormInputValues;
    onValidate?: BlogCreateFormInputValues<false>;
}>;
export default function BlogCreateForm(props: BlogCreateFormProps): React.ReactElement;
