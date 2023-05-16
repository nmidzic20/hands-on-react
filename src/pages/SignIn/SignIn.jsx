import React, { useState } from "react";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
} from "../../utils/styles/generalStyles";
import * as Yup from "yup";
import { Formik } from "formik";
import Section from "../../components/Section/Section";
import { getUsers, loginUser } from "../../api/users";
import { FormSuccessMessage } from "../../utils/styles/generalStyles";

const SignIn = ({ setIsLoggedIn, setIsAdmin }) => {
  const [successMessage, setSuccessMessage] = useState(null);

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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await loginUser(values);
            const users = await getUsers(response.access_token);
            const user = users.data.find((user) => user.email == values.email);
            console.log("USER");
            console.log(user);
            setSuccessMessage({
              error: false,
              message: `User ${user.first_name} ${user.last_name} logged in successfully!`,
            });
            setTimeout(() => {
              setSuccessMessage(null);
            }, 3000);

            localStorage.setItem("jwt", response.access_token);
            localStorage.setItem("isAdmin", user.is_admin);

            setIsLoggedIn(response.access_token);
            setIsAdmin(user.is_admin);

            resetForm();
          } catch (err) {
            setSuccessMessage({
              error: true,
              message: "There was an error",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form>
            {successMessage && (
              <FormRow>
                <FormSuccessMessage isError={successMessage.error}>
                  {successMessage.message}
                </FormSuccessMessage>
              </FormRow>
            )}
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
