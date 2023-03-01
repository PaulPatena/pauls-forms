import React, { useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import "./App.scss";
import { PpTextInput } from "./InputComponents/PpTextInput";
import { PpCheckbox } from "./InputComponents/PpCheckbox";
import { PpSelect } from "./InputComponents/PpSelect";
import { ErrorSummary } from "./InputComponents/ErrorSummary";

const SignupForm = () => {
  const [showErrorSummary, setShowErrorSummary] = useState(false);

  return (
    <div className={"pauls-form"}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false,
          jobType: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formikProps: FormikProps<any>) => {
          const { values: formValues, errors: formErrors } = formikProps;
          return (
            <Form>
              {showErrorSummary && <ErrorSummary errors={formErrors} />}

              <PpTextInput
                name={"firstName"}
                label={"First Name"}
                type={"text"}
                placeholder={"Jane"}
              />

              <PpTextInput
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Doe"
              />

              <PpTextInput
                name="email"
                label="Email Address"
                type="email"
                placeholder="jane@gmail.com"
              />

              <PpSelect
                name="jobType"
                label="Job Type"
                options={[
                  { value: "", label: "Select a job type" },
                  { value: "designer", label: "Designer" },
                  { value: "developer", label: "Devie" },
                  { value: "manager", label: "Manaaager" },
                ]}
              />

              {formValues.jobType === "developer" && (
                <PpTextInput
                  name={"devLevel"}
                  label={"Developer Level"}
                  type={"number"}
                />
              )}

              <PpCheckbox
                name="acceptedTerms"
                label={`I accept the terms and conditions`}
              />

              <button
                onClick={() => {
                  formikProps.handleSubmit();
                  setShowErrorSummary(true);
                }}
              >
                Submit
              </button>
              <button onClick={formikProps.handleReset}>Reset</button>

              <pre>
                InitValues {JSON.stringify(formikProps.initialValues, null, 2)}
              </pre>
              <pre>Values {JSON.stringify(formValues, null, 2)}</pre>
              <pre>Touched {JSON.stringify(formikProps.touched, null, 2)}</pre>
              <pre>Errors {JSON.stringify(formikProps.errors, null, 2)}</pre>
              <pre>Dirty {formikProps.dirty ? "yes" : "no"}</pre>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

function App() {
  return <SignupForm />;
}

export default App;
