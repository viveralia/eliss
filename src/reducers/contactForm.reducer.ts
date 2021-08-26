type ContactFormActionTypes = "SENDING_EMAIL" | "EMAIL_SENT_SUCCESS" | "EMAIL_SENT_FAILURE";

export interface ContactFormState {
  feedbackMessage: null | string;
  success: boolean | undefined;
}

export interface ContactFormAction {
  type: ContactFormActionTypes;
}

export const contactFormReducer = (
  state: ContactFormState,
  action: ContactFormAction
): ContactFormState => {
  switch (action.type) {
    case "SENDING_EMAIL":
      return { feedbackMessage: null, success: undefined };
    case "EMAIL_SENT_SUCCESS":
      return {
        feedbackMessage: "Hemos recibido tus datos y te responderemos a la brevedad.",
        success: true,
      };
    case "EMAIL_SENT_FAILURE":
      return {
        feedbackMessage: "Algo salió mal y no pudimos enviar tus datos. Intenta más tarde.",
        success: false,
      };
    default:
      throw new Error();
  }
};
