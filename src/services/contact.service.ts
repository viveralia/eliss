export const sendEmail = async (payload: unknown) => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const path = `http://formspree.io/f/${formId}`;

  return await fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
};
