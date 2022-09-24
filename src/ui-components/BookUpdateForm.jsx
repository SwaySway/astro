/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Book } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function BookUpdateForm(props) {
  const {
    id,
    book,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const [name, setName] = React.useState(undefined);
  const [bookImageSrc, setBookImageSrc] = React.useState(undefined);
  const [description, setDescription] = React.useState(undefined);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(undefined);
    setBookImageSrc(undefined);
    setDescription(undefined);
    setErrors({});
  };
  const [bookRecord, setBookRecord] = React.useState(book);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Book, id) : book;
      if (record) {
        setBookRecord(record);
        setName(record.name);
        setBookImageSrc(record.bookImageSrc);
        setDescription(record.description);
      }
    };
    queryData();
  }, [id, book]);
  const validations = {
    name: [],
    bookImageSrc: [{ type: "URL" }],
    description: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          bookImageSrc,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Book.copyOf(bookRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "BookUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              bookImageSrc,
              description,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            await runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Book image src"
        isRequired={false}
        isReadOnly={false}
        defaultValue={bookImageSrc}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bookImageSrc: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.bookImageSrc ?? value;
          }
          if (errors.bookImageSrc?.hasError) {
            await runValidationTasks("bookImageSrc", value);
          }
          setBookImageSrc(value);
        }}
        onBlur={() => runValidationTasks("bookImageSrc", bookImageSrc)}
        errorMessage={errors.bookImageSrc?.errorMessage}
        hasError={errors.bookImageSrc?.hasError}
        {...getOverrideProps(overrides, "bookImageSrc")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={description}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bookImageSrc,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            await runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "SubmitAndResetFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
