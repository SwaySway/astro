/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Author } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type AuthorProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    author?: Author;
    Title?: String;
    authorProfile?: React.ReactNode;
    body34252267?: React.ReactNode;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function AuthorProfile(props: AuthorProfileProps): React.ReactElement;
