import React from "react";
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
import Section from "../../components/Section/Section";

const SignIn = () => {
  return (
    <Section title="Sign In">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid e-mail")
            .required("E-mail is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const data = {
              email: values.email,
              password: values.password,
            };
            alert(JSON.stringify(data, null, 2));
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {(formik) => (
          <Form>
            <FormRow>
              <Field
                type="email"
                name="email"
                placeholder="Email..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="email" />
            </FormRow>
            <FormRow>
              <Field
                type="password"
                name="password"
                placeholder="Password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="password" />
            </FormRow>
            <FormRow>
              <Button isSecondary type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Processing..." : "Sign in"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SignIn;
