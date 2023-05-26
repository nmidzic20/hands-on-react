import React, { useState } from "react";
import Section from "../../components/Section/Section";
import {
  FlexContainer,
  FlexRowTitleButton,
  FlexRowForms,
  FormWrapper,
  Title,
  ProfileButton,
  Label,
} from "./Profile";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  Option,
  Select,
} from "../../utils/styles/generalStyles";
import PasswordReset from "../../components/PasswordReset/PasswordReset.jsx";
import { useEffect } from "react";
import { useRef } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    first_name: "Borna",
    last_name: "Grilec",
    email: "borna.grilec@speck.agency",
    github_username: "bornadevelo",
    zeplin_username: "bspeck",
    active_faculty_year: 1,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const formikRef = useRef();

  useEffect(() => {
    //when refreshing, context is destroyed, so userData from signed in user won't show when refreshed
    //correct method is to fetch the user from API each time, using ID of user which is saved in jwt from localStorage

    if (passwordChanged) {
      formikRef.current?.resetForm();
      //but not working with resetForm({ values: userData }) - for the case where if we click only on Update password,
      //if the changes were made to the first form, those should not be saved
      //right now the first form is reset to the initial state, but not to the previous userData state

      alert("Password has been changed!");
      setPasswordChanged(false);
    }
  });

  const handleEdit = () => {
    if (isEditing) {
      console.log(userData);
      formikRef.current?.resetForm();
    }
    setIsEditing((current) => !current);
  };

  return (
    <Section>
      <FlexContainer>
        <FlexRowTitleButton>
          <Title>Profile</Title>
          <ProfileButton
            onClick={handleEdit}
            isOutline={isEditing ? false : true}
          >
            {isEditing ? "Cancel" : "Edit"}
          </ProfileButton>
        </FlexRowTitleButton>
        <FlexRowForms>
          <FormWrapper>
            <Formik
              innerRef={formikRef}
              initialValues={{
                firstName: userData.first_name,
                lastName: userData.last_name,
                email: userData.email,
                githubUsername: userData.github_username,
                zeplinUsername: userData.zeplin_username,
                activeFacultyYear: userData.active_faculty_year,
              }}
              enableReinitialize={true}
              validationSchema={Yup.object({
                firstName: Yup.string().required("First name is required"),
                lastName: Yup.string().required("Last name is required"),
                email: Yup.string()
                  .email("Invalid e-mail")
                  .required("E-mail is required"),
                githubUsername: Yup.string().required(
                  "GitHub username is required"
                ),
                zeplinUsername: Yup.string().required(
                  "Zeplin username is required"
                ),
                activeFacultyYear: Yup.string().required(
                  "Active faculty year is required"
                ),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  const data = {
                    first_name: values.firstName,
                    last_name: values.lastName,
                    email: values.email,
                    github_username: values.githubUsername,
                    zeplin_username: values.zeplinUsername,
                    active_faculty_year:
                      parseInt(values.activeFacultyYear) === 0
                        ? null
                        : parseInt(values.activeFacultyYear),
                  };
                  setUserData((current) => ({
                    ...current,
                    ...data,
                  }));
                  setIsEditing(false);
                  setSubmitting(false);
                }, 1000);
              }}
            >
              {(formik) => {
                console.log(formik.errors);
                return (
                  <Form>
                    <FormRow>
                      <Label isVisible={isEditing}>First name</Label>
                      <Field
                        type="text"
                        name="firstName"
                        disabled={!isEditing || formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="firstName" />
                    </FormRow>
                    <FormRow>
                      <Label isVisible={isEditing}>Last name</Label>
                      <Field
                        type="text"
                        name="lastName"
                        disabled={!isEditing || formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="lastName" />
                    </FormRow>
                    <FormRow>
                      <Label isVisible={isEditing}>E-mail</Label>
                      <Field
                        type="email"
                        name="email"
                        disabled={!isEditing || formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="email" />
                    </FormRow>
                    <FormRow>
                      <Label isVisible={isEditing}>GitHub</Label>
                      <Field
                        type="text"
                        name="githubUsername"
                        disabled={!isEditing || formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="githubUsername" />
                    </FormRow>
                    <FormRow>
                      <Label isVisible={isEditing}>Zeplin</Label>
                      <Field
                        type="text"
                        name="zeplinUsername"
                        disabled={!isEditing || formik.isSubmitting}
                      />
                      <ErrorMessage component={"div"} name="zeplinUsername" />
                    </FormRow>
                    <FormRow>
                      <Label isVisible={isEditing}>Active faculty year</Label>
                      <Select
                        id="activeFacultyYear"
                        disabled={!isEditing || formik.isSubmitting}
                        {...formik.getFieldProps("activeFacultyYear")}
                      >
                        <Option value="" disabled hidden>
                          Choose an Active faculty year
                        </Option>
                        <Option value="0">Not a student</Option>
                        <Option value="1">1st faculty year</Option>
                        <Option value="2">2nd faculty year</Option>
                        <Option value="3">3rd faculty year</Option>
                        <Option value="4">4th faculty year</Option>
                        <Option value="5">5th faculty year</Option>
                      </Select>
                      <ErrorMessage
                        component={"div"}
                        name="activeFacultyYear"
                      />
                    </FormRow>
                    <FormRow>
                      {isEditing && (
                        <Button
                          isSecondary
                          type="submit"
                          disabled={formik.isSubmitting}
                        >
                          {formik.isSubmitting
                            ? "Processing..."
                            : "Update user data"}
                        </Button>
                      )}
                    </FormRow>
                  </Form>
                );
              }}
            </Formik>
          </FormWrapper>
          <FormWrapper>
            <PasswordReset
              isEditing={isEditing}
              onPasswordUpdate={function () {
                setIsEditing(!isEditing);
                setPasswordChanged(true);
              }}
            />
          </FormWrapper>
        </FlexRowForms>
      </FlexContainer>
    </Section>
  );
};

export default Profile;

/*
<Section>
  <FlexContainer>
    <FlexRow>
      <Title />
      <Button></Button>
    </FlexRow>
    <FlexRow>
      <FormWrapper>
        FORMA 1
      </FormWrapper>
      <FormWrapper>
        FORMA 2
      </FormWrapper>
    </FlexRow>
  </FlexContainer>
</Section>
*/
