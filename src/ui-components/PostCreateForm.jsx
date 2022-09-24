/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Post } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PostCreateForm(props) {
  const {
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const [username, setUsername] = React.useState(undefined);
  const [caption, setCaption] = React.useState(undefined);
  const [profile_url, setProfile_url] = React.useState(undefined);
  const [post_url, setPost_url] = React.useState(undefined);
  const [status, setStatus] = React.useState(undefined);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(undefined);
    setCaption(undefined);
    setProfile_url(undefined);
    setPost_url(undefined);
    setStatus(undefined);
    setErrors({});
  };
  const validations = {
    username: [
      {
        type: "GreaterThanChar",
        numValues: [2],
        validationMessage: "needs to be of length 2",
      },
    ],
    caption: [],
    profile_url: [{ type: "URL" }],
    post_url: [{ type: "URL" }],
    status: [],
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
          username,
          caption,
          profile_url,
          post_url,
          status,
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
          await DataStore.save(new Post(modelFields));
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
      {...getOverrideProps(overrides, "PostCreateForm")}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        placeholder="john"
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              caption,
              profile_url,
              post_url,
              status,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            await runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Caption"
        isRequired={false}
        isReadOnly={false}
        placeholder="i love code"
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              caption: value,
              profile_url,
              post_url,
              status,
            };
            const result = onChange(modelFields);
            value = result?.caption ?? value;
          }
          if (errors.caption?.hasError) {
            await runValidationTasks("caption", value);
          }
          setCaption(value);
        }}
        onBlur={() => runValidationTasks("caption", caption)}
        errorMessage={errors.caption?.errorMessage}
        hasError={errors.caption?.hasError}
        {...getOverrideProps(overrides, "caption")}
      ></TextField>
      <TextField
        label="Profile url"
        descriptiveText="profile image url"
        isRequired={false}
        isReadOnly={false}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              caption,
              profile_url: value,
              post_url,
              status,
            };
            const result = onChange(modelFields);
            value = result?.profile_url ?? value;
          }
          if (errors.profile_url?.hasError) {
            await runValidationTasks("profile_url", value);
          }
          setProfile_url(value);
        }}
        onBlur={() => runValidationTasks("profile_url", profile_url)}
        errorMessage={errors.profile_url?.errorMessage}
        hasError={errors.profile_url?.hasError}
        {...getOverrideProps(overrides, "profile_url")}
      ></TextField>
      <TextField
        label="Post url"
        descriptiveText="post url to use for the component"
        isRequired={false}
        isReadOnly={false}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              caption,
              profile_url,
              post_url: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.post_url ?? value;
          }
          if (errors.post_url?.hasError) {
            await runValidationTasks("post_url", value);
          }
          setPost_url(value);
        }}
        onBlur={() => runValidationTasks("post_url", post_url)}
        errorMessage={errors.post_url?.errorMessage}
        hasError={errors.post_url?.hasError}
        {...getOverrideProps(overrides, "post_url")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              caption,
              profile_url,
              post_url,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            await runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Posted"
          value="POSTED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="In review"
          value="IN_REVIEW"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
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
