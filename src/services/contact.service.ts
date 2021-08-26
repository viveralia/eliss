export const sendEmail = async (payload: unknown) => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const path = `https://formspree.io/f/${formId}`;

  const response = await fetch(path, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return response.json();
};
