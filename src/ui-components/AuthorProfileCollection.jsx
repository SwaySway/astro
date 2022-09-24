/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Author, Book } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import AuthorProfile from "./AuthorProfile";
import { Collection } from "@aws-amplify/ui-react";
export default function AuthorProfileCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const bookItems = useDataStoreBinding({
    type: "collection",
    model: Book,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Author,
  }).items.map((item) => ({
    ...item,
    books: bookItems.filter((model) => model.authorID === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "AuthorProfileCollection")}
    >
      {(item, index) => (
        <AuthorProfile
          author={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></AuthorProfile>
      )}
    </Collection>
  );
}
