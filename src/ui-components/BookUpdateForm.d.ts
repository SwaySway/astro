/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Book } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UseBaseOrValidationType<Flag, T> = Flag extends true ? T : ValidationFunction<T>;
export declare type BookUpdateFormInputValues<useBase extends boolean = true> = {
    name?: UseBaseOrValidationType<useBase, string>;
    bookImageSrc?: UseBaseOrValidationType<useBase, string>;
    description?: UseBaseOrValidationType<useBase, string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookUpdateFormOverridesProps = {
    BookUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    bookImageSrc?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    book?: Book;
    onSubmit?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onSuccess?: (fields: BookUpdateFormInputValues) => void;
    onError?: (fields: BookUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onValidate?: BookUpdateFormInputValues<false>;
}>;
export default function BookUpdateForm(props: BookUpdateFormProps): React.ReactElement;
