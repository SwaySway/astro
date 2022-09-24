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
export declare type BookCreateFormInputValues<useBase extends boolean = true> = {
    name?: UseBaseOrValidationType<useBase, string>;
    bookImageSrc?: UseBaseOrValidationType<useBase, string>;
    description?: UseBaseOrValidationType<useBase, string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookCreateFormOverridesProps = {
    BookCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    bookImageSrc?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookCreateFormProps = React.PropsWithChildren<{
    overrides?: BookCreateFormOverridesProps | undefined | null;
} & {
    onSubmit?: (fields: BookCreateFormInputValues) => BookCreateFormInputValues;
    onSuccess?: (fields: BookCreateFormInputValues) => void;
    onError?: (fields: BookCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BookCreateFormInputValues) => BookCreateFormInputValues;
    onValidate?: BookCreateFormInputValues<false>;
}>;
export default function BookCreateForm(props: BookCreateFormProps): React.ReactElement;
