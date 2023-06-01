import React from "react";
import PropTypes from "prop-types";
import { PasswordResetWrapper, Title } from "./PasswordReset";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  Option,
  Select,
} from "../../utils/styles/generalStyles";
import * as Yup from "yup";
import { Formik } from "formik";

const PasswordReset = ({ isEditing, onPasswordUpdate }) => {
  return (
    <PasswordResetWrapper>
      <Title>Reset password</Title>
      {isEditing ? (
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            passwordRepeat: "",
          }}
          validationSchema={Yup.object({
            oldPassword: Yup.string().required("Old password is required"),
            newPassword: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .test({
                name: "old-new-password-match",
                message: "New password cannot be the same as old password",
                test: function (value) {
                  return this.parent.oldPassword != value;
                },
              }),
            passwordRepeat: Yup.string().test({
              name: "passwords-match",
              message: "Passwords must match",
              test: function (value) {
                return this.parent.newPassword === value;
              },
            }),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              onPasswordUpdate();
            }, 1000);
          }}
        >
          {(formik) => (
            <Form>
              <FormRow>
                <Field
                  type="password"
                  name="oldPassword"
                  placeholder="Old password..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="oldPassword" />
              </FormRow>
              <FormRow>
                <Field
                  type="password"
                  name="newPassword"
                  placeholder="New password..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="newPassword" />
              </FormRow>
              <FormRow>
                <Field
                  type="password"
                  name="passwordRepeat"
                  placeholder="Repeat new password..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="passwordRepeat" />
              </FormRow>
              <FormRow>
                <Button
                  isSecondary
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Processing..." : "Update password"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      ) : (
        <p>In order to reset the password, click on Edit button.</p>
      )}
    </PasswordResetWrapper>
  );
};

PasswordReset.propTypes = {
  isEditing: PropTypes.bool,
};

export default PasswordReset;
