/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, GridProps, PhoneNumberFieldProps, RadioGroupFieldProps, StepperFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UseBaseOrValidationType<Flag, T> = Flag extends true ? T : ValidationFunction<T>;
export declare type InputGalleryCreateFormInputValues<useBase extends boolean = true> = {
    num?: UseBaseOrValidationType<useBase, number>;
    rootbeer?: UseBaseOrValidationType<useBase, number>;
    maybe?: UseBaseOrValidationType<useBase, boolean>;
    maybeSlide?: UseBaseOrValidationType<useBase, boolean>;
    maybeCheck?: UseBaseOrValidationType<useBase, boolean>;
    timestamp?: UseBaseOrValidationType<useBase, number>;
    updatedAt?: UseBaseOrValidationType<useBase, string>;
    ippy?: UseBaseOrValidationType<useBase, string>;
    timeisnow?: UseBaseOrValidationType<useBase, string>;
    awsphony?: UseBaseOrValidationType<useBase, string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputGalleryCreateFormOverridesProps = {
    InputGalleryCreateFormGrid?: FormProps<GridProps>;
    num?: FormProps<StepperFieldProps>;
    rootbeer?: FormProps<TextFieldProps>;
    maybe?: FormProps<RadioGroupFieldProps>;
    maybeSlide?: FormProps<SwitchFieldProps>;
    maybeCheck?: FormProps<CheckboxFieldProps>;
    timestamp?: FormProps<TextFieldProps>;
    updatedAt?: FormProps<TextFieldProps>;
    ippy?: FormProps<TextFieldProps>;
    timeisnow?: FormProps<TextFieldProps>;
    awsphony?: FormProps<PhoneNumberFieldProps>;
} & EscapeHatchProps;
export declare type InputGalleryCreateFormProps = React.PropsWithChildren<{
    overrides?: InputGalleryCreateFormOverridesProps | undefined | null;
} & {
    onSubmit?: (fields: InputGalleryCreateFormInputValues) => InputGalleryCreateFormInputValues;
    onSuccess?: (fields: InputGalleryCreateFormInputValues) => void;
    onError?: (fields: InputGalleryCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: InputGalleryCreateFormInputValues) => InputGalleryCreateFormInputValues;
    onValidate?: InputGalleryCreateFormInputValues<false>;
}>;
export default function InputGalleryCreateForm(props: InputGalleryCreateFormProps): React.ReactElement;
