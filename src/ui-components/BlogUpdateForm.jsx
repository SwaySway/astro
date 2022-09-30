/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Blog } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
}) {
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (currentFieldValue.length && !hasError) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
    }
  };
  return (
    <React.Fragment>
      {children}
      <Flex justifyContent="flex-end">
        <Button
          children="Cancel"
          type="button"
          onClick={() => {
            setFieldValue("");
          }}
        ></Button>
        <Button
          children="Save"
          variation="primary"
          isDisabled={hasError}
          onClick={addItem}
        ></Button>
      </Flex>
      {!!items.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  inputFieldRef?.current?.focus();
                }}
              >
                {value}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function BlogUpdateForm(props) {
  const {
    id,
    blog,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const [title, setTitle] = React.useState(undefined);
  const [content, setContent] = React.useState(undefined);
  const [tags, setTags] = React.useState(undefined);
  const [published, setPublished] = React.useState(undefined);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(undefined);
    setContent(undefined);
    setTags(undefined);
    setCurrentTagsValue(undefined);
    setPublished(undefined);
    setErrors({});
  };
  const [blogRecord, setBlogRecord] = React.useState(blog);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Blog, id) : blog;
      if (record) {
        setBlogRecord(record);
        setTitle(record.title);
        setContent(record.content);
        setTags(record.tags);
        setPublished(record.published);
      }
    };
    queryData();
  }, [id, blog]);
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const validations = {
    title: [],
    content: [],
    tags: [],
    published: [],
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
          title,
          content,
          tags,
          published,
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
            Blog.copyOf(blogRecord, (updated) => {
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
      {...getOverrideProps(overrides, "BlogUpdateForm")}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        defaultValue={title}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              content,
              tags,
              published,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            await runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        defaultValue={content}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content: value,
              tags,
              published,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            await runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          setTags(items);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        items={tags}
        hasError={errors.tags?.hasError}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          onChange={async (e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                title,
                content,
                tags: value,
                published,
              };
              const result = onChange(modelFields);
              value = result?.tags ?? value;
            }
            if (errors.tags?.hasError) {
              await runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          value={currentTagsValue}
          ref={tagsRef}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Published"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={published}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content,
              tags,
              published: value,
            };
            const result = onChange(modelFields);
            value = result?.published ?? value;
          }
          if (errors.published?.hasError) {
            await runValidationTasks("published", value);
          }
          setPublished(value);
        }}
        onBlur={() => runValidationTasks("published", published)}
        errorMessage={errors.published?.errorMessage}
        hasError={errors.published?.hasError}
        {...getOverrideProps(overrides, "published")}
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
