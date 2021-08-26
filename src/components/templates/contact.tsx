import { Button, makeStyles, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { FC, useReducer } from "react";
import { Controller, useForm } from "react-hook-form";

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
  feedbackMessage: null,
  success: undefined,
};

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    margin: "1.75rem auto 0 auto",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "20rem",
    },
  },
  formGrid: {
    display: "grid",
    gap: "0.75rem",
    gridTemplateColumns: "1fr",
    margin: "auto",
    maxWidth: "40rem",
  },
}));

const Contact: FC = () => {
  const classes = useStyles();
  const { control, handleSubmit, formState, reset } = useForm();
  const [state, dispatch] = useReducer(contactFormReducer, INITIAL_STATE);

  async function onSubmit(data: FormData) {
    try {
      dispatch({ type: "SENDING_EMAIL" });
      await contactService.sendEmail(data);
      reset();
      dispatch({ type: "EMAIL_SENT_SUCCESS" });
    } catch (error) {
      dispatch({ type: "EMAIL_SENT_FAILURE" });
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  return (
    <Section title="Contacto" id="contacto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formGrid}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: { message: messages.required, value: true } }}
            render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
              <TextField
                fullWidth
                variant="outlined"
                id="name"
                type="text"
                label="Nombre"
                inputRef={ref}
                error={!!error}
                helperText={error ? error.message : null}
                {...fieldProps}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              pattern: { message: messages.email, value: /^[^\s@]+@[^\s@]+$/ },
              required: { message: messages.required, value: true },
            }}
            render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
              <TextField
                fullWidth
                variant="outlined"
                id="email"
                type="email"
                label="Correo electrónico"
                inputRef={ref}
                error={!!error}
                helperText={error ? error.message : null}
                {...fieldProps}
              />
            )}
          />
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            rules={{ required: { message: messages.required, value: true } }}
            render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
              <TextField
                fullWidth
                variant="outlined"
                id="subject"
                type="text"
                label="Asunto"
                inputRef={ref}
                error={!!error}
                helperText={error ? error.message : null}
                {...fieldProps}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: { message: messages.required, value: true } }}
            render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                id="message"
                type="text"
                label="Mensaje"
                inputRef={ref}
                error={!!error}
                helperText={error ? error.message : null}
                {...fieldProps}
              />
            )}
          />
          {state.success !== undefined && (
            <Alert severity={state.success ? "success" : "error"}>{state.feedbackMessage}</Alert>
          )}
        </div>
        <Button
          className={classes.button}
          fullWidth
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
