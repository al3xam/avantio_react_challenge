/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { Formik } from "formik";

import { validationSchema } from "./stepper.validations";
import { FormValues } from "./stepper.types";
import { initialValues } from "./stepper.helpers";

import { Button, Box } from "@mui/material";
import Alert from "@mui/material/Alert/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { randomAlertMessage } from "./stepper.helpers";

import GoStep1 from "./step1.component";
import GoStep2 from "./step2.component";
import GoStep3 from "./step3.component";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  updateAccomodationData,
  updateCurrentStep,
  updateOwnerData,
} from "../../store/slices/global.slice";

const StepperForm: React.FC = () => {
  const { currentStep, data } = useAppSelector((state) => state.app.stepper);
  const dispatch = useAppDispatch();

  const [isStepValid, setIsStepValid] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleNext = (validateForm: () => Promise<Record<string, string>>) => {
    validateForm().then((errors) => {
      if (
        !Object.keys(errors).some(
          (field) =>
            (currentStep === 1
              ? ["name", "address", "description", "type", "images"]
              : ["owner", "email", "phone"]
            ).includes(field) && errors[field]
        )
      ) {
        dispatch(updateCurrentStep(currentStep + 1));
      }
    });
  };

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => setShowAlert(false), 2000);
    }
  }, [showAlert]);

  const handleSubmitForm = (values: FormValues) => {
    dispatch(
      updateAccomodationData({
        ...data.accommodation,
        name: values.name,
        address: values.address,
        description: values.description,
        type: values.type,
        images: values.images,
      })
    );

    dispatch(
      updateOwnerData({
        ...data.owner,
        name: values.owner,
        email: values.email,
        phone: values.phone,
      })
    );

    setShowAlert(true);
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={currentStep < 3 && validationSchema[currentStep - 1]}
      onSubmit={(values) => handleSubmitForm(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        validateForm,
      }) => {
        useEffect(() => {
          if (currentStep < 3) {
            validateForm().then((errors) => {
              const stepFields =
                currentStep === 1
                  ? ["name", "address", "description", "type", "images"]
                  : ["owner", "email", "phone"];
              const hasErrors = stepFields.some((field) => errors[field]);
              setIsStepValid(!hasErrors);
            });
          } else {
            setIsStepValid(true);
          }
        }, [currentStep, values]);

        return (
          <div className="m-8">
            {showAlert && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                {randomAlertMessage()}
              </Alert>
            )}

            <Box>
              {currentStep === 1 && (
                <GoStep1
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}
              {currentStep === 2 && (
                <GoStep2
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}
              {currentStep === 3 && <GoStep3 values={values} />}

              <Box display="flex" justifyContent="space-between" mt={2}>
                {currentStep < 3 ? (
                  <Button
                    variant="contained"
                    onClick={() => handleNext(validateForm)}
                    disabled={!isStepValid}
                    fullWidth
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </Box>
          </div>
        );
      }}
    </Formik>
  );
};

export default StepperForm;
