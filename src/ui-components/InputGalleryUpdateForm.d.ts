/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { InputGallery } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, PhoneNumberFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UseBaseOrValidationType<Flag, T> = Flag extends true ? T : ValidationFunction<T>;
export declare type InputGalleryUpdateFormInputValues<useBase extends boolean = true> = {
    num?: UseBaseOrValidationType<useBase, number>;
    rootbeer?: UseBaseOrValidationType<useBase, number>;
    maybe?: UseBaseOrValidationType<useBase, boolean>;
    maybeSlide?: UseBaseOrValidationType<useBase, boolean>;
    maybeCheck?: UseBaseOrValidationType<useBase, boolean>;
    timestamp?: UseBaseOrValidationType<useBase, number>;
    ippy?: UseBaseOrValidationType<useBase, string>;
    timeisnow?: UseBaseOrValidationType<useBase, string>;
    awsphony?: UseBaseOrValidationType<useBase, string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputGalleryUpdateFormOverridesProps = {
    InputGalleryUpdateFormGrid?: FormProps<GridProps>;
    num?: FormProps<TextFieldProps>;
    rootbeer?: FormProps<TextFieldProps>;
    maybe?: FormProps<SwitchFieldProps>;
    maybeSlide?: FormProps<SwitchFieldProps>;
    maybeCheck?: FormProps<SwitchFieldProps>;
    timestamp?: FormProps<TextFieldProps>;
    ippy?: FormProps<TextFieldProps>;
    timeisnow?: FormProps<TextFieldProps>;
    awsphony?: FormProps<PhoneNumberFieldProps>;
} & EscapeHatchProps;
export declare type InputGalleryUpdateFormProps = React.PropsWithChildren<{
    overrides?: InputGalleryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    inputGallery?: InputGallery;
    onSubmit?: (fields: InputGalleryUpdateFormInputValues) => InputGalleryUpdateFormInputValues;
    onSuccess?: (fields: InputGalleryUpdateFormInputValues) => void;
    onError?: (fields: InputGalleryUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: InputGalleryUpdateFormInputValues) => InputGalleryUpdateFormInputValues;
    onValidate?: InputGalleryUpdateFormInputValues<false>;
}>;
export default function InputGalleryUpdateForm(props: InputGalleryUpdateFormProps): React.ReactElement;
