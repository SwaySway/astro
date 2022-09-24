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
export declare type ProfileCreateFormInputValues<useBase extends boolean = true> = {
    name?: UseBaseOrValidationType<useBase, string>;
    email?: UseBaseOrValidationType<useBase, string>;
    location?: UseBaseOrValidationType<useBase, string>;
    profile_url?: UseBaseOrValidationType<useBase, string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCreateFormOverridesProps = {
    ProfileCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    profile_url?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfileCreateFormOverridesProps | undefined | null;
} & {
    onSubmit?: (fields: ProfileCreateFormInputValues) => ProfileCreateFormInputValues;
    onSuccess?: (fields: ProfileCreateFormInputValues) => void;
    onError?: (fields: ProfileCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProfileCreateFormInputValues) => ProfileCreateFormInputValues;
    onValidate?: ProfileCreateFormInputValues<false>;
}>;
export default function ProfileCreateForm(props: ProfileCreateFormProps): React.ReactElement;
