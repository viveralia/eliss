import { Button, makeStyles, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { FC, useReducer } from "react";
import { useForm } from "react-hook-form";

import { Section } from "~components";
import { contactFormReducer, ContactFormState } from "~reducers";
import * as contactService from "~services/contact.service";
import { validationErrorMessages as messages } from "~utils";

interface FormData {
  email: string;
  message: string;
  name: string;
  subject: string;
}

const INITIAL_STATE: ContactFormState = {
  success: undefined,
  feedbackMessage: null,
};

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
  const { register, errors, handleSubmit, formState, reset } = useForm();
  const [state, dispatch] = useReducer(contactFormReducer, INITIAL_STATE);

  async function onSubmit(data: FormData) {
    try {
      dispatch({ type: "SENDING_EMAIL" });
      await contactService.sendEmail(data);
      reset();
      dispatch({ type: "EMAIL_SENT_SUCCESS" });
    } catch (error) {
      dispatch({ type: "EMAIL_SENT_FAILURE" });
      console.error(error);
    }
  }

  return (
    <Section title="Contacto" id="contacto">
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          fullWidth
          variant="outlined"
          id="name"
          name="name"
          type="text"
          label="Nombre"
          error={!!errors.name}
          helperText={errors.name?.message}
          inputRef={register({
            required: { value: true, message: messages.required },
          })}
        />
        <TextField
          fullWidth
          variant="outlined"
          id="email"
          name="email"
          type="email"
          label="Correo electrónico"
          error={!!errors.email}
          helperText={errors.email?.message}
          inputRef={register({
            required: { value: true, message: messages.required },
            pattern: { value: /^[^\s@]+@[^\s@]+$/, message: messages.email },
          })}
        />
        <TextField
          fullWidth
          variant="outlined"
          id="subject"
          name="subject"
          type="text"
          label="Asunto"
          error={!!errors.subject}
          helperText={errors.subject?.message}
          inputRef={register({
            required: { value: true, message: messages.required },
          })}
        />
        <TextField
          fullWidth
          variant="outlined"
          id="message"
          name="message"
          type="text"
          label="Mensaje"
          multiline
          rows={4}
          error={!!errors.message}
          helperText={errors.message?.message}
          inputRef={register({
            required: { value: true, message: messages.required },
          })}
        />
        {state.success !== undefined && (
          <Alert severity={state.success ? "success" : "error"}>
            {state.feedbackMessage}
          </Alert>
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={formState.isSubmitting}
          disableElevation
          size="large"
        >
          {formState.isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Section>
  );
};

export default Contact;
