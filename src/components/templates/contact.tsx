import { Button, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { FC, useEffect, useRef } from "react";
import * as Yup from "yup";

import * as contactService from "../../services/contact.service";
import { FormStatusEnum } from "../../types";
import { validationErrorMessages as errors } from "../../utils/errors.utils";
import { FormikTextField, Section } from "../molecules";

interface FormValues {
  email: string;
  message: string;
  name: string;
  subject: string;
}

const INITIAL_FORM_VALUES: FormValues = {
  email: "",
  message: "",
  name: "",
  subject: "",
};

const feedback = {
  SUCCESS: "Hemos recibido tus datos y te responderemos a la brevedad.",
  FAILURE: "Algo salió mal y no pudimos enviar tus datos. Intenta más tarde.",
};

const schema = Yup.object().shape({
  email: Yup.string().email(errors.email).required(errors.required),
  message: Yup.string().required(errors.required),
  name: Yup.string().required(errors.required),
  subject: Yup.string().required(errors.required),
});

const useStyles = makeStyles(() => ({
  form: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "0.75rem",
    maxWidth: "40rem",
    margin: "auto",
  },
}));

const Contact: FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (router.asPath === "/#contacto") {
      firstInputRef.current.focus();
    }
  }, [router]);

  const handleSubmit = async (
    formValues: FormValues,
    { resetForm, setStatus }: FormikHelpers<FormValues>
  ) => {
    try {
      setStatus(FormStatusEnum.INITIAL);
      await contactService.sendEmail(formValues);
      setStatus(FormStatusEnum.SUCCESS);
      resetForm();
    } catch (error) {
      setStatus(FormStatusEnum.FAILURE);
      console.error(error);
    }
  };

  return (
    <Section title="Contacto" id="contacto">
      <Formik
        initialStatus={FormStatusEnum.INITIAL}
        initialValues={INITIAL_FORM_VALUES}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting, status }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <FormikTextField
              name="name"
              label="Nombre"
              inputRef={firstInputRef}
            />
            <FormikTextField name="email" label="Correo electrónico" />
            <FormikTextField name="subject" label="Asunto" />
            <FormikTextField
              name="message"
              label="Mensaje"
              multiline
              rows={4}
            />
            {status !== FormStatusEnum.INITIAL && (
              <Alert>
                {status === FormStatusEnum.SUCCESS && feedback.SUCCESS}
                {status === FormStatusEnum.FAILURE && feedback.FAILURE}
              </Alert>
            )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              disableElevation
              size="large"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        )}
      </Formik>
    </Section>
  );
};

export default Contact;
