export const sendEmail = async (payload: unknown) => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const path = `https://formspree.io/f/${formId}`;

  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};
