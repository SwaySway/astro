/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { InputGallery } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  CheckboxField,
  Flex,
  Grid,
  PhoneNumberField,
  Radio,
  RadioGroupField,
  StepperField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function InputGalleryCreateForm(props) {
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
  const [num, setNum] = React.useState(0);
  const [rootbeer, setRootbeer] = React.useState(undefined);
  const [maybe, setMaybe] = React.useState(undefined);
  const [maybeSlide, setMaybeSlide] = React.useState(undefined);
  const [maybeCheck, setMaybeCheck] = React.useState(undefined);
  const [timestamp, setTimestamp] = React.useState(undefined);
  const [updatedAt, setUpdatedAt] = React.useState(undefined);
  const [ippy, setIppy] = React.useState(undefined);
  const [timeisnow, setTimeisnow] = React.useState(undefined);
  const [awsphony, setAwsphony] = React.useState(undefined);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNum(0);
    setRootbeer(undefined);
    setMaybe(undefined);
    setMaybeSlide(undefined);
    setMaybeCheck(undefined);
    setTimestamp(undefined);
    setUpdatedAt(undefined);
    setIppy(undefined);
    setTimeisnow(undefined);
    setAwsphony(undefined);
    setErrors({});
  };
  const validations = {
    num: [],
    rootbeer: [],
    maybe: [],
    maybeSlide: [],
    maybeCheck: [],
    timestamp: [],
    updatedAt: [],
    ippy: [{ type: "IpAddress" }],
    timeisnow: [],
    awsphony: [{ type: "Phone" }],
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
          num,
          rootbeer,
          maybe,
          maybeSlide,
          maybeCheck,
          timestamp,
          updatedAt,
          ippy,
          timeisnow,
          awsphony,
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
          await DataStore.save(new InputGallery(modelFields));
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
      {...getOverrideProps(overrides, "InputGalleryCreateForm")}
    >
      <StepperField
        label="Num"
        isReadOnly={false}
        isRequired={false}
        value={num}
        onStepChange={async (e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              num: value,
              rootbeer,
              maybe,
              maybeSlide,
              maybeCheck,
              timestamp,
              updatedAt,
              ippy,
              timeisnow,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.num ?? value;
          }
          if (errors.num?.hasError) {
            await runValidationTasks("num", value);
          }
          setNum(value);
        }}
        onBlur={() => runValidationTasks("num", num)}
        errorMessage={errors.num?.errorMessage}
        hasError={errors.num?.hasError}
        {...getOverrideProps(overrides, "num")}
      ></StepperField>
      <TextField
        label="Rootbeer"
        descriptiveText="like the number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        onChange={async (e) => {
          let value = Number(e.target.value);
          if (onChange) {
            const modelFields = {
              num,
              rootbeer: value,
              maybe,
              maybeSlide,
              maybeCheck,
              timestamp,
              updatedAt,
              ippy,
              timeisnow,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.rootbeer ?? value;
          }
          if (errors.rootbeer?.hasError) {
            await runValidationTasks("rootbeer", value);
          }
          setRootbeer(value);
        }}
        onBlur={() => runValidationTasks("rootbeer", rootbeer)}
        errorMessage={errors.rootbeer?.errorMessage}
        hasError={errors.rootbeer?.hasError}
        {...getOverrideProps(overrides, "rootbeer")}
      ></TextField>
      <RadioGroupField
        label="Maybe?"
        name="maybe"
        isReadOnly={false}
        isRequired={false}
        onChange={async (e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              num,
              rootbeer,
              maybe: value,
              maybeSlide,
              maybeCheck,
              timestamp,
              updatedAt,
              ippy,
              timeisnow,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.maybe ?? value;
          }
          if (errors.maybe?.hasError) {
            await runValidationTasks("maybe", value);
          }
          setMaybe(value);
        }}
        onBlur={() => runValidationTasks("maybe", maybe)}
        errorMessage={errors.maybe?.errorMessage}
        hasError={errors.maybe?.hasError}
        {...getOverrideProps(overrides, "maybe")}
      >
        <Radio
          children="Yes"
          value="true"
          {...getOverrideProps(overrides, "maybeRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="false"
          {...getOverrideProps(overrides, "maybeRadio1")}
        ></Radio>
      </RadioGroupField>
      <SwitchField
        label="flick of the switch"
        defaultChecked={false}
        isDisabled={false}
        onChange={async (e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              num,
              rootbeer,
              maybe,
              maybeSlide: value,
              maybeCheck,
              timestamp,
              updatedAt,
              ippy,
              timeisnow,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.maybeSlide ?? value;
          }
          if (errors.maybeSlide?.hasError) {
            await runValidationTasks("maybeSlide", value);
          }
          setMaybeSlide(value);
        }}
        onBlur={() => runValidationTasks("maybeSlide", maybeSlide)}
        errorMessage={errors.maybeSlide?.errorMessage}
        hasError={errors.maybeSlide?.hasError}
        {...getOverrideProps(overrides, "maybeSlide")}
      ></SwitchField>
      <CheckboxField
        label="Maybe check?"
        name="maybeCheck"
        value="maybeCheck"
        isDisabled={false}
        defaultChecked={false}
        onChange={async (e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              num,
              rootbeer,
              maybe,
              maybeSlide,
              maybeCheck: value,
              timestamp,
              updatedAt,
              ippy,
              timeisnow,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.maybeCheck ?? value;
          }
          if (errors.maybeCheck?.hasError) {
            await runValidationTasks("maybeCheck", value);
          }
          setMaybeCheck(value);
        }}
        onBlur={() => runValidationTasks("maybeCheck", maybeCheck)}
        errorMessage={errors.maybeCheck?.errorMessage}
        hasError={errors.maybeCheck?.hasError}
        {...getOverrideProps(overrides, "maybeCheck")}
      ></CheckboxField>
      <TextField
        label="Timestamp"
        descriptiveText="enter the stampy"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={async (e) => {
          let value = Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              num,
              rootbeer,
              maybe,
              maybeSlide,
              maybeCheck,
              timestamp: value,
              updatedAt,
              ippy,
              timeisnow,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            await runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={true}
        type="datetime-local"
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              num,
              rootbeer,
              maybe,
              maybeSlide,
              maybeCheck,
              timestamp,
              updatedAt: value,
              ippy,
              timeisnow,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            await runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <TextField
        label="Ippy"
        descriptiveText="ip ip ip ip"
        isRequired={false}
        isReadOnly={false}
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              num,
              rootbeer,
              maybe,
              maybeSlide,
              maybeCheck,
              timestamp,
              updatedAt,
              ippy: value,
              timeisnow,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.ippy ?? value;
          }
          if (errors.ippy?.hasError) {
            await runValidationTasks("ippy", value);
          }
          setIppy(value);
        }}
        onBlur={() => runValidationTasks("ippy", ippy)}
        errorMessage={errors.ippy?.errorMessage}
        hasError={errors.ippy?.hasError}
        {...getOverrideProps(overrides, "ippy")}
      ></TextField>
      <TextField
        label="Timeisnow"
        descriptiveText="better than previously,"
        isRequired={false}
        isReadOnly={false}
        type="time"
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              num,
              rootbeer,
              maybe,
              maybeSlide,
              maybeCheck,
              timestamp,
              updatedAt,
              ippy,
              timeisnow: value,
              awsphony,
            };
            const result = onChange(modelFields);
            value = result?.timeisnow ?? value;
          }
          if (errors.timeisnow?.hasError) {
            await runValidationTasks("timeisnow", value);
          }
          setTimeisnow(value);
        }}
        onBlur={() => runValidationTasks("timeisnow", timeisnow)}
        errorMessage={errors.timeisnow?.errorMessage}
        hasError={errors.timeisnow?.hasError}
        {...getOverrideProps(overrides, "timeisnow")}
      ></TextField>
      <PhoneNumberField
        label="Awsphony"
        defaultCountryCode="+1"
        isRequired={false}
        isReadOnly={false}
        descriptiveText="no phony numbers >:("
        onChange={async (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              num,
              rootbeer,
              maybe,
              maybeSlide,
              maybeCheck,
              timestamp,
              updatedAt,
              ippy,
              timeisnow,
              awsphony: value,
            };
            const result = onChange(modelFields);
            value = result?.awsphony ?? value;
          }
          if (errors.awsphony?.hasError) {
            await runValidationTasks("awsphony", value);
          }
          setAwsphony(value);
        }}
        onBlur={() => runValidationTasks("awsphony", awsphony)}
        errorMessage={errors.awsphony?.errorMessage}
        hasError={errors.awsphony?.hasError}
        {...getOverrideProps(overrides, "awsphony")}
      ></PhoneNumberField>
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
