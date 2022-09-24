/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Post } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UseBaseOrValidationType<Flag, T> = Flag extends true ? T : ValidationFunction<T>;
export declare type PostUpdateFormInputValues<useBase extends boolean = true> = {
    caption?: UseBaseOrValidationType<useBase, string>;
    username?: UseBaseOrValidationType<useBase, string>;
    post_url?: UseBaseOrValidationType<useBase, string>;
    profile_url?: UseBaseOrValidationType<useBase, string>;
    status?: UseBaseOrValidationType<useBase, string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostUpdateFormOverridesProps = {
    PostUpdateFormGrid?: FormProps<GridProps>;
    caption?: FormProps<TextFieldProps>;
    username?: FormProps<TextFieldProps>;
    post_url?: FormProps<TextFieldProps>;
    profile_url?: FormProps<TextFieldProps>;
    status?: FormProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PostUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    post?: Post;
    onSubmit?: (fields: PostUpdateFormInputValues) => PostUpdateFormInputValues;
    onSuccess?: (fields: PostUpdateFormInputValues) => void;
    onError?: (fields: PostUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostUpdateFormInputValues) => PostUpdateFormInputValues;
    onValidate?: PostUpdateFormInputValues<false>;
}>;
export default function PostUpdateForm(props: PostUpdateFormProps): React.ReactElement;
